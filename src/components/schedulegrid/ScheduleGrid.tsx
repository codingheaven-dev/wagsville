import styled from "styled-components";
import { Employee, ScheduleAppointment } from "../../types";
import { Fragment } from "react";

interface ScheduleGridProps {
  schedule: ScheduleAppointment[];
  employees: Employee[];
}

const Container = styled.div<{ employeeCount: number }>`
  display: grid;
  grid-template-columns: auto repeat(
      ${({ employeeCount }) => employeeCount},
      1fr
    );
  grid-template-rows: auto repeat(36, 1fr);
  width: 100%;
  height: calc(100vh - 100px);
`;

const HourTick = styled.div<{ hourIndex: number }>`
  grid-column: 1 / 2;
  grid-row: ${({ hourIndex }) => hourIndex * 4 + 4} / span 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  color: #9b9b9b;
  padding-right: 4px;
`;

const HourBox = styled.div<{
  hourIndex: number;
  employeeIndex: number;
  isRightMost: boolean;
  isBottomMost: boolean;
}>`
  grid-column: ${({ employeeIndex }) => employeeIndex + 2};
  grid-row: ${({ hourIndex }) => hourIndex * 4 + 5} / span 4;
  border: 1px solid #ddd;
  border-width: 1px ${({ isRightMost }) => (isRightMost ? "1px" : 0)}
    ${({ isBottomMost }) => (isBottomMost ? "1px" : 0)} 1px;
`;

const EmployeeName = styled.div<{ employeeIndex: number }>`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
  text-align: center;
  grid-column: ${({ employeeIndex }) => employeeIndex + 2};
  grid-row: 1 / span 4;
  font-weight: bold;
  margin-top: 4px;
  height: 100%;
`;

const AppointmentSlot = styled.div<{
  color: string;
  employeeIndex: number;
  startTimeIndex: number;
  duration: number;
}>`
  grid-column: ${({ employeeIndex }) => employeeIndex + 2};
  grid-row: ${({ startTimeIndex }) => startTimeIndex + 5} / span
    ${({ duration }) => duration};
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  font-size: 12px;
  padding: 8px;
  border-radius: 4px;
  color: #fff;
  width: calc(100% - 8px);
  margin: 4px;
  ${({ color }) => `background-color: ${color};`}
`;

const Avatar = styled.span`
  display: block;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  background-size: cover;
  overflow: hidden;
`;

const AppointmentTime = styled.h5`
  margin: 0;
`;

const AppointmentTitle = styled.h4`
  margin: 0;
`;

const timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
} as const;

function ScheduleGrid({ schedule, employees }: ScheduleGridProps) {
  const hourTicks = Array.from({ length: 8 }, (_, i) => `${i + 8}:00`);

  return (
    <Container employeeCount={employees.length}>
      {hourTicks.map((hour, index) => (
        <HourTick key={hour} hourIndex={index}>
          {hour}
        </HourTick>
      ))}
      {employees.map((employee, index) => (
        <Fragment key={employee.id}>
          {hourTicks.map((hour, hourIndex) => (
            <HourBox
              key={hour}
              hourIndex={hourIndex}
              employeeIndex={index}
              isRightMost={index === employees.length - 1}
              isBottomMost={hourIndex === hourTicks.length - 1}
            />
          ))}
          <EmployeeName employeeIndex={index}>
            <Avatar style={{ backgroundImage: `url(${employee.image})` }} />
            {employee.name}
          </EmployeeName>
          {schedule
            .filter((appointment) => appointment.employee.id === employee.id)
            .map((appointment) => (
              <AppointmentSlot
                key={appointment.id}
                color={appointment.service.color}
                employeeIndex={index}
                startTimeIndex={
                  (new Date(appointment.startTime).getHours() - 8) * 4 +
                  new Date(appointment.startTime).getMinutes() / 15
                }
                duration={appointment.service.duration / 15}
              >
                <AppointmentTime>
                  {new Date(appointment.startTime).toLocaleTimeString(
                    [],
                    timeOptions
                  )}
                  —
                  {new Date(
                    new Date(appointment.startTime).getTime() +
                      appointment.service.duration * 60000
                  ).toLocaleTimeString([], timeOptions)}
                </AppointmentTime>
                <AppointmentTitle>
                  {appointment.customer.dog} ({appointment.customer.breed})
                </AppointmentTitle>
                <div>
                  <appointment.service.icon /> {appointment.service.name}
                </div>
              </AppointmentSlot>
            ))}
        </Fragment>
      ))}
    </Container>
  );
}

export default ScheduleGrid;
