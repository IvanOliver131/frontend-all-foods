import { Container, Navigation } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Logo</h1>
      <Navigation>
        <ul>
          <li>
            <a href="#">Comida</a>
          </li>
          <li>
            <a href="#">Bebida</a>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
}
