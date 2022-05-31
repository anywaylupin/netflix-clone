import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 949px) {
  }
`;
export const Title = styled.h3`
  text-align: center;
  font-size: 19.2px;
  font-weight: 400;
  margin: 0px auto;
  padding: 0px 5% 20px;

  @media (max-width: 949px) {
    font-size: 23px;
    padding: 0px 10%;
    margin-bottom: 10px;
  }
`;

export const Field = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 949px) {
    flex-direction: column;
    align-items: center;
  } ;
`;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: none;
  padding: 10px;
  height: 65px;
  box-sizing: border-box;
  @media (max-width: 1449px) {
    height: 60px;
  }
`;
export const Button = styled.button`
  height: 65px;
  font-size: 30px;
  letter-spacing: 0.1px;
  margin-left: 2px;
  padding: 0 30px;

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1449px) {
    height: 60px;
  }

  @media (max-width: 949px) {
    font-size: 20px;
    height: 40px;
    margin-top: 10px;
    padding: 0px 30px;
  }
`;
