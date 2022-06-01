import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  max-width: 450px;
  width: 100%;
  margin: auto;
  margin-bottom: 90px;
  padding: 60px 68px 40px;
`;
export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 28px;
`;
export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;
export const Input = styled.input`
  height: 40px;
  padding: 5px 20px;
  margin-bottom: 16px;
  background: #333;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  color: white;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;
export const Submit = styled.button`
  padding: 16px;
  margin: 0 0 12px;
  background: #F65261;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
export const Other = styled.div`
  color: #737373;
`;
export const Text = styled.div`
  margin: 16px 0 11px;
  font-weight: 500;
`;
export const TermsOfUse = styled.span`
  font-size: 13px;
`;
