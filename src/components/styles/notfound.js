import styled from "styled-components/macro";

export const Container = styled.section`
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${`https://images3.alphacoders.com/882/882548.jpg`}) center center /
      cover no-repeat;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  height: 64px;
  padding: 0 45px;
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
export const Content = styled.div`
  margin: 0px 8.45px;
  text-align: center;
  margin-top: 240px;
`;
export const Title = styled.h1`
  font-size: 4.3vw;
`;
export const Text = styled.p`
  font-size: 1.5vw;
  margin-bottom: 40px;
`;
export const AuthLink = styled.span`\
  background-color: white;
  border-radius: 3px;
  font-size: 1.3vw;
  font-weight: 600;
  cursor: pointer;
  padding: 0.8rem 2.4rem;

  & > a {
    text-decoration: none;
    color: black;
  }
  & > a:hover {
    text-decoration: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;
