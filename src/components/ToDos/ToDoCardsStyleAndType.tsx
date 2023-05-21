import styled from "styled-components";
import { CurrentDate } from "../../MainStyle";

export const TodaysDate = styled.h1`
  color: gray;
  font-size: 20px;
  margin-top: 40px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(120deg, rgba(125, 202, 220, 0.1), #e6cdcd);
  border-radius: 20px;
  width: 40vw;
  margin-right: 7vw;
  max-height: 855px;
`;

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 40px;
  margin-bottom: 0px;

  padding-bottom: 180px;
  height: auto;
`;

export const NewMemo = styled.textarea`
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  border: 1px inset white;
  padding: 15px;
  width: 18.5vw;
  outline: none;
  min-height: 100px;
  resize: none;
`;

export const Card = styled.li`
  border: 0px solid transparent;
  border-radius: 20px;
  background-image: linear-gradient(
    100deg,
    rgba(234, 217, 226, 0.201),
    #e9a1b3
  );
  margin: 10px;
  margin-left: -30px;
  padding-top: 40px;
  height: 110px;
  width: 21vw;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
  list-style: none;
  text-align: center;
  z-index: 999;
  box-shadow: 1px 1px 5px gray;
  word-wrap: break-word;
`;

export const Btn = styled.button`
  width: 8vw;
  border: none;
  border-radius: 15px;
  margin: 5px;
  height: 28px;
  color: gray;
  text-shadow: 1px 1px 1px white;
  box-shadow: 1px 1px 5px gray;
`;

export const AddBtn = styled.button`
  width: 20.2vw;
  background-image: white;
  border: none;
  height: 50px;
  padding: 15px 0 15px;
  margin-top: 10px;
  box-shadow: 1px 1px 5px gray;
  border-radius: 10px;
`;

export const UpdateInput = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  outline: none;
  color: gray;
  font-size: 18px;
  width: 300px;
`;

export const TodaysDateOnCard = styled.p`
  font-size: 15px;
`;

export type ToDo = {
  id: number;
  year: number;
  month: number;
  date: number;
  text: string;
};

export interface ICurrentDate {
  currentDate: CurrentDate;
}
