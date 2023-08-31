import { styled } from "styled-components";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./components/Products";

const Container = styled.div`
  overflow: hidden;
`;

const App = () => {
  return (
    <Container>
      <Cart />
    </Container>
  );
};

export default App;
