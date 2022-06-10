import React from "react";
import Topbar from "../../components/topbar/Topbar";
import styled from "styled-components";
import ProductList from "../../components/ProductList/ProductList";

let Container = styled.div`
  width: 100%;
  height: auto;
  margin: 20px;
  padding: 20px;
`;

const Home = () => {
  return (
    <>
      <Topbar />
      <Container>
        <ProductList />
      </Container>
    </>
  );
};

export default Home;
