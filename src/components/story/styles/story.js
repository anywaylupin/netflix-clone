import styled from "styled-components/macro"; //auto generate class names

//tag can be changed
export const Container = styled.section``;
export const Divider = styled.div`
  display: flex;
  border-bottom: 9px solid #222;
  color: white;
  overflow: hidden;
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  padding: 70px 45px;
  width: 100%;

  @media (max-width: 949px) {
    flex-direction: column;
  }
`;
export const Content = styled.div`
  width: 50%;

  @media (max-width: 949px) {
    width: 100%;
    text-align: center;
  }
`;
export const Title = styled.h2`
  font-size: 50px;
  line-height: 55px;
  margin: 0 0 8px;

  @media (max-width: 949px) {
    font-size: 40px;
    line-height: 44px;
  }
  @media (max-width: 549px) {
    font-size: 26px;
    line-height: 28.6px;
  }
`;
export const Text = styled.h3`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  margin: 19.5px 0px 6.5px;

  @media (max-width: 949px) {
    font-size: 20px;
    font-weight: 400;
    margin: 15px 0 5px;
  }
  @media (max-width: 549px) {
    font-size: 18px;
    margin: 13.5px 0px 4.5px;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
