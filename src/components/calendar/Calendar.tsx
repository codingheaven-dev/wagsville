import styled from "styled-components";
import { Button } from "../button";
import { useSchedule } from "../../services/schedule";

const DateChooser = styled.div`
  display: flex;
  gap: 2em;
  border: 1px solid #ccc;
  padding: 0.25em;
  border-radius: 0.25m;
`;

const CurrentDate = styled.h2`
  flex: 1 1 0;
  text-align: center;
  font-size: 1.5rem;
  margin: 0.25em 0;
`;

const localeDateStringOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
} as const;

export function Calendar() {
  const { nextDate, previousDate, date } = useSchedule(
    ({ nextDate, previousDate, date }) => ({ nextDate, previousDate, date }),
    true
  );

  return (
    <>
      <DateChooser>
        <Button onClick={previousDate}>Previous date</Button>
        <CurrentDate>
          Schedule for{" "}
          <time dateTime={date.toISOString().slice(0, 10)}>
            {date.toLocaleDateString(undefined, localeDateStringOptions)}
          </time>
        </CurrentDate>
        <Button onClick={nextDate}>Next date</Button>
      </DateChooser>
    </>
  );
}

export default Calendar;
