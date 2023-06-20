import {
  ButtonRegister,
  ButtonList,
  Container,
  Content,
  Header,
} from "./Home.style";

export default function Home() {

  return (
    <Container>
      <Header>App Food</Header>
      <Content>
        <ButtonList>Produtos</ButtonList>
        <ButtonRegister>Categorias</ButtonRegister>
      </Content>
    </Container>
  );
}
