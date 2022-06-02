import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
`;

export const NavBar = styled.div`
  margin: 0 100px;
  border-bottom: solid #222 3px;

  & > button {
    padding: 20px;
    background-color: inherit;
    border: none;
    border-bottom: solid #000 2px;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  & > button:hover {
    border-bottom: solid #f65261 2px;
  }
  & > button.active {
    border-bottom: solid #f65261 2px;
  }

  @media (max-width: 679px) {
    display: none;
  }
`;

export const Item = styled.div`
  text-align: center;
  margin: 30px;
  width: 300px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
export const Cover = styled.img`
  width: 100%;
  margin: auto;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`;
export const Title = styled.div`
  text-align: left;
  color: white;
  font-weight: 600;
`;
export const Genre = styled.p`
  font-size: 14px;
  color: grey;
  font-weight: 500;
`;
export const Year = styled.span`
  font-size: 13px;
  border: solid #555555 1px;
  border-radius: 5px;
  padding: 5px 15px;
`;
export const Empty = styled.div``;