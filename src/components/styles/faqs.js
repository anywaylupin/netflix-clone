import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 70px 45px;
  border-bottom: solid #222 9px;
`;
export const Title = styled.h2`
  margin: 0px 0px 8px;
  text-align: center;
  font-size: 50px;
  line-height: 55px;

  @media (max-width: 949px) {
    font-size: 40px;
    line-height: 44px;
  }

  @media (max-width: 549px) {
      padding: 0px 5%;
    font-size: 26px;
    line-height: 28.6px;
  } ;
`;
export const List = styled.ul`
  width: 100%;
  max-width: 810px;
  list-style: none;
  font-size: 26px;
  margin: 52px auto;
  padding: 0;

  @media (max-width: 949px) {
    margin: 30px auto;
    font-size: 20px;
  }
  @media (max-width: 549px) {
    margin: 22.5px auto;
    font-size: 18px;
  } ;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  padding: 0;
`;
export const Question = styled.button`
  text-align: left;
  margin: 0 0 1px;
  padding: 20.8px 57.2px 20.8px 31.2px;
  color: #ffffff !important;
  background-color: #303030 !important;
  border: none;

  @media (max-width: 949px) {
    padding: 16px 44px 16px 24px;
  }

  @media (max-width: 549px) {
    padding: 14.4px 39.6px 14.4px 21.6px
  }
`;
export const Answer = styled.span`
  padding: 31.2px;
  background-color: #303030;

  @media (max-width: 949px) {
    padding: 24px;
  }
`;
