import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 9rem;
  width: 100%;
  background: #483026;
  color: #f3ede1;
  border-bottom: 1px solid orange;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    gap: 1rem;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #f3ede1;
  }
`;
