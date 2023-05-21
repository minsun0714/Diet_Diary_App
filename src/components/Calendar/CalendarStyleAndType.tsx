import styled from "styled-components";

export const DatesContainer = styled.tbody`
  margin-top: 280px;
  padding: 5vw;
  @media (max-width: 1500px) {
    margin-top: 200px;
  }
`;

export const EachDate = styled.th<EachDatesProps>`
  font-size: 20px;
  font-weight: 400;
  width: 8.43vw;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 2px 4.8vw 30px 0.5vw;
  text-shadow: 1px 1px 2px gray;
  background-image: ${(props) => {
    const date = new Date();
    const thisMonth = date.getMonth();
    const thisYear = date.getFullYear();
    return props.today.year === thisYear &&
      props.today.month === thisMonth &&
      props.today.date === props.children
      ? "linear-gradient(150deg, rgba(249, 245, 245, 0.1),#f3bac3)"
      : "linear-gradient(150deg, rgba(244, 239, 239, 0.1), #eae2e4)";
  }};
  color: ${(props) => {
    return (props.row.week === 0 && Number(props.children) > 7) ||
      (props.row.week === props.row.lastWeek && Number(props.children) < 8)
      ? "rgb(0, 0, 0, 0.1)"
      : "rgb(0, 0, 0, 0.6)";
  }};

  &:hover {
    background-image: linear-gradient(150deg, white, rgba(244, 239, 239, 0.1));
  }

  @media (max-width: 1500px) {
    height: 35px;
    padding-bottom: 40px;
  }
`;

export type EachDatesProps = {
  today: {
    year: number;
    month: number;
    date: number;
  };
  row: {
    week: number;
    lastWeek: number;
  };
  day: number;
};

export interface DatesProps {
  year: number;
  month: number;
  setCurrentDate: (newDate: {
    year: number;
    month: number;
    date: number;
  }) => void;
}

export type LastDate = 28 | 29 | 30 | 31;

export const Day = styled.th`
  font-family: monospace;
  font-size: 25px;
  padding: 20px 0px 20px;
  width: 6.6vw;
  color: white;
  background-image: linear-gradient(200deg, rgba(130, 124, 124, 0.1), #f1bdca);
`;

export const DaysContainer = styled.thead`
  position: absolute;
  margin-bottom: 330px;
  width: auto;
  @media (max-width: 1500px) {
    margin-top: -80px;
  }
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 20px;
  height: 850px;
  width: 70vw;
  margin-left: 7vw;
  background: linear-gradient(120deg, rgba(125, 202, 220, 0.1), #e6cdcd);
  box-shadow: 2px 2px 4px #999;
  @media (max-width: 1500px) {
    width: 56vw;
    height: 830px;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

export const YearWrapper = styled.caption`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  margin-bottom: 650px;
  @media (max-width: 1500px) {
    margin-top: -80px;
  }
`;

export const Year = styled.span`
  font-family: monospace;
  font-size: 50px;
  color: white;
  text-shadow: 2px 2px 4px pink;
  padding-bottom: 100px;
  position: absolute;
`;

export const MonthWrapper = styled.caption`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  margin-bottom: 500px;
  @media (max-width: 1500px) {
    margin-top: -80px;
  }
`;

export const Month = styled.span`
  font-family: monospace;
  font-size: 45px;
  color: white;
  text-shadow: 2px 2px 4px pink;
  padding-bottom: 40px;
  position: absolute;
`;

export const Btn = styled.button`
  background: linear-gradient(200deg, rgba(125, 202, 220, 0.1), #e6cdcd);
  height: 45px;
  width: 45px;
  margin: 10px 13vw;
  border: rgba(0, 0, 0, 0) 2px solid;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface ICalendarProp {
  setCurrentDate: (newDate: {
    year: number;
    month: number;
    date: number;
  }) => void;
}
