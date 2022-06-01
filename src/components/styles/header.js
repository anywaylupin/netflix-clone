import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${`https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/fd873ca8-2d92-4212-a5e2-82f07089566a/VN-en-20220523-popsignuptwoweeks-perspective_alpha_website_small.jpg`})
    center center / cover no-repeat;

  border-bottom: solid #222 9px;
`;
export const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 56px;
  height: 64px;
  padding: 8px 0 0;
`;
export const Logo = styled.span`
  font-size: 26px;
  font-weight: 700;

  & > a {
    text-decoration: none;
    color: #f65261 !important;
  }

  & > a:hover {
    text-decoration: none;
  }
`;
export const AuthLink = styled.span`
  display: block;
  width: 85px;
  height: fit-content;
  border: none;
  border-radius: 3px;
  padding: 7px 17px;
  font-size: 16px;
  background-color: #f65261;
  cursor: pointer;
  box-sizing: border-box;

  & > a {
    text-decoration: none;
    color: white;
  }

  &:hover {
    background-color: #f40612;
  }
`;
export const Text = styled.div`
  position: relative;
  width: 100%;
  padding: 75px 0;
  max-width: 950px;
  margin: 0 auto;
  margin-top: 85px;
  text-align: center;
  z-index: 1;

  @media (max-width: 549px) {
    margin-top: 35px;
    padding: 30px 0;
  }
`;
export const Title = styled.h1`
  max-width: 800px;
  font-size: 64px;
  line-height: 70.4px;
  margin: 0px auto;

  @media (max-width: 1449px) {
    max-width: 640px;
    font-size: 50px;
    line-height: 55px;
  }

  @media (max-width: 549px) {
    max-width: 440px;
    font-size: 28px;
    line-height: 30.8px;
  }
`;
export const SubTitle = styled.h2`
  max-width: 800px;
  font-size: 26px;
  font-weight: 400;
  margin: 16px auto;

  @media (max-width: 1449px) {
    max-width: 640px;
  }
  @media (max-width: 549px) {
    font-size: 18px;
  }
`;
