import { useSchedule } from "../services/schedule";
import { useAPI } from "../services/api";
import { ScheduleGrid } from "../components/schedulegrid";
import { Calendar } from "../components/calendar";

export function Schedule() {
  const employees = useAPI(({ employees }) => employees);
  const dailySchedule = useSchedule(({ dailySchedule }) => dailySchedule);

  return (
    <>
      <Calendar />
      <ScheduleGrid employees={employees} schedule={dailySchedule} />
    </>
  );
}
