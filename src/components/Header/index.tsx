import { Container, Navigation } from "./styles";
import LogoDRoy from "../../assets/LogoDRoy.png";

export function Header() {
  return (
    <Container>
      <img src={LogoDRoy} alt="logo-droy"></img>
      <Navigation>
        <ul>
          <li>
            <a href="#">Smash</a>
          </li>
          <li>
            <a href="#">Smoked</a>
          </li>
          <li>
            <a href="#">Sobremesas</a>
          </li>
          <li>
            <a href="#">Bebidas</a>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
}
