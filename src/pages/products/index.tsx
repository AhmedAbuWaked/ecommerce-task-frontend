import { useEffect } from "react";
import { Col, Row } from "antd";

import { Page } from "@/components";
import { LoadingKeys } from "@/models";
import { loadingStore, useProductsStore } from "@/stores";
import Container from "./../../components/container/index";
import ProductCard from "@/components/ProductCard";

const ColLayout = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 6,
  xl: 6,
  xxl: 6,
};

const Products = () => {
  const { getLoading } = loadingStore();
  const { products, getProducts } = useProductsStore();

  useEffect(() => {
    getProducts({});
  }, []);

  return (
    <Page isLoading={getLoading(LoadingKeys.GET_PRODUCTS)}>
      <Container>
        <Row gutter={[16, 16]} justify={"space-between"}>
          {products?.map((product) => (
            <Col {...ColLayout} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Page>
  );
};

export default Products;
