import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 100px -80px;
  gap: 50px;
`;
export const Cover = styled.img`
  border-radius: 5px;

  @media (max-width: 949px) {
    display: none;
  }
`;
export const Info = styled.div``;
export const Frame = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: -20px;
  line-height: 50px;
`;
export const Title = styled.h2`
  font-size: 40px;

  @media (max-width: 949px) {
    font-size: 30px;
  }
`;
export const Rating = styled.div`
  border: solid #fab40a 2px;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  padding: 5px;
  line-height: 50px;
  font-size: 30px;
  color: #fab40a;

  @media (max-width: 649px) {
    display: none;
  }
`;
export const Time = styled.div`
  font-size: 30px;
  color: #f65261;
  @media (max-width: 949px) {
    font-size: 20px;
  }
`;
export const Favorite = styled.div`
  border: solid #f65261 2px;
  border-radius: 50%;
  text-align: center;
  width: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #f65261;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    background-color: #f65261;
    color: black;
  }
`;
export const Description = styled.div`
  height: 100px;
  overflow: auto;
  line-height: 1.3;
`;
export const Search = styled.div`
  transition: 0.2s;
  cursor: pointer;
  & > i {
    color: #f65261;
  }
  &:hover {
    transform: scale(1.2);
  }
`;
