import { Container, IconBackground, TitlesContainer, Topics } from "./styles";
import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";

export default function Introduce() {
  return (
    <Container>
      <div>
        <TitlesContainer>
          <h1>Encontre o lanche perfeito para qualquer hora do dia 🐮 </h1>
          <span>Com o D&apos;Roy você sempre come um lanche de qualidade.</span>
        </TitlesContainer>

        <Topics>
          <div>
            <IconBackground iconBackground="yellow-dark">
              <ShoppingCartSimple size={20} weight="fill" />
            </IconBackground>
            <p> Compra simples e segura </p>
          </div>

          <div>
            <IconBackground iconBackground="base-text">
              <Package size={20} weight="fill" />
            </IconBackground>
            <p> Embalagem mantém o lanche intacto </p>
          </div>

          <div>
            <IconBackground iconBackground="yellow">
              <Timer size={20} weight="fill" />
            </IconBackground>
            <p> Entrega rápida </p>
          </div>

          <div>
            <IconBackground iconBackground="purple">
              <Coffee size={20} weight="fill" />
            </IconBackground>
            <p> O lanche chega fresquinho até você! </p>
          </div>
        </Topics>
      </div>
    </Container>
  );
}
