//Components
import ContainerFluid from "./ContainerFluid";
import Container from "./Container";

const ResponsiveContainer = (props) => {
  const { children: containerInnerComponents } = props;
  return (
    <ContainerFluid>
      <Container>{containerInnerComponents}</Container>
    </ContainerFluid>
  );
};

export default ResponsiveContainer;
