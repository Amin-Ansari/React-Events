//Components
import ContainerFluid from "./ContainerFluid";
import Container from "./Container";

const ResponsiveContainer = () => {
  const { children: containerInnerComponents } = props;
  return (
    <ContainerFluid>
      <Container>{containerInnerComponents}</Container>
    </ContainerFluid>
  );
};
