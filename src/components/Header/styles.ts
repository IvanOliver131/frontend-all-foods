import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4rem;
  width: 100%;
  background: black;
  border-bottom: 1px solid orange;
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
    color: var(--text);
  }
`;
