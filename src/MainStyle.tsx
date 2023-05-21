import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
`;

export type CurrentDate = {
  year: number;
  month: number;
  date: number;
};
