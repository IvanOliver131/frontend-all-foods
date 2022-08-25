import styled from "styled-components";

export const Container = styled.section`
  max-width: 1180px;
  margin: auto;
  margin-top: 3rem;
`;

export const IntroContainer = styled.section`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "text image";
  @media (max-width: 1075px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "image image"
      "text   text";
  }
`;

export const TitlesContainer = styled.div`
  grid-area: text;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 2rem;
    font-weight: 800;
  }
  span {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 1rem;
  }
  @media (max-width: 1075px) {
    align-items: center;
    text-align: center;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
`;

export const Topics = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 325px);
  gap: 1rem;
  @media (max-width: 1075px) {
    justify-items: center;
  }
  div {
    display: flex;
    align-items: center;
  }
  p {
    color: ${(props) => props.theme["base-text"]};
    margin-left: 1rem;
  }
  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    justify-items: left;
  }
`;

interface IconBackgroundProps {
  iconBackground: "yellow-dark" | "yellow" | "base-text" | "purple";
}

export const IconBackground = styled.span<IconBackgroundProps>`
  background: ${(props) => props.theme[props.iconBackground]};
  color: ${(props) => props.theme.background};
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  grid-area: image;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    img {
      width: 80vw;
    }
  }
`;
