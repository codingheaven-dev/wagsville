import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { ScheduleContextProvider } from "./recontextual";
import { useAPI } from "../api";
import { ScheduleAppointment } from "../../types";

const ONE_DAY = 1000 * 60 * 60 * 24;

function isSameDate(date1: Date, date2: Date) {
  return date1.toISOString().slice(0, 10) === date2.toISOString().slice(0, 10);
}

function ScheduleProvider({ children }: PropsWithChildren) {
  const [date, setDate] = useState(new Date());
  const nextDate = useCallback(
    () => setDate((d) => new Date(d.getTime() + ONE_DAY)),
    []
  );
  const previousDate = useCallback(
    () => setDate((d) => new Date(d.getTime() - ONE_DAY)),
    []
  );
  const { services, customers, employees, appointments } = useAPI(
    ({ services, customers, employees, appointments }) => ({
      services,
      customers,
      employees,
      appointments,
    }),
    true
  );
  const dailySchedule = useMemo<ScheduleAppointment[]>(
    () =>
      appointments
        .filter(({ startTime }) => isSameDate(new Date(startTime), date))
        .map(({ id, startTime, employeeId, customerId, serviceId }) => {
          const service = services.find(({ id }) => id === serviceId);
          const employee = employees.find(({ id }) => id === employeeId);
          const customer = customers.find(({ id }) => id === customerId);
          if (!service || !employee || !customer) {
            return null;
          }
          return {
            id,
            startTime,
            service,
            employee,
            customer,
          };
        })
        .filter(
          (
            appointmentOrNull: ScheduleAppointment | null
          ): appointmentOrNull is ScheduleAppointment => !!appointmentOrNull
        ),
    [appointments, customers, date, employees, services]
  );

  const value = {
    date,
    dailySchedule,
    nextDate,
    previousDate,
  };

  return (
    <ScheduleContextProvider value={value}>{children}</ScheduleContextProvider>
  );
}

export default ScheduleProvider;
