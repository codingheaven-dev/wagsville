import recontextual from "recontextual";
import { ScheduleAppointment } from "../../types";

export interface ScheduleContext {
  date: Date;
  dailySchedule: ScheduleAppointment[];
  nextDate: () => void;
  previousDate: () => void;
}

const [ScheduleContextProvider, useSchedule] = recontextual<ScheduleContext>();

export { ScheduleContextProvider, useSchedule };
