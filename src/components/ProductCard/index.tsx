import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "antd";

import { useCartStore } from "@/stores/cart.store";
import { useAuthStore } from "@/stores/auth.store";
import { IProductItem, ROUTES } from "@/models";
import Image from "../Image";

import styles from "./index.module.scss";

interface IProductCardProps {
  product: IProductItem;
  loading?: boolean;
}
const ProductCard: FC<IProductCardProps> = ({ product, loading = false }) => {
  const navigate = useNavigate();

  const { currentUser } = useAuthStore();
  const { addToCart } = useCartStore();

  return (
    <Card
      hoverable
      cover={
        <Image
          alt={product.title}
          src={product.imageCover}
          preview={false}
          className={styles.productImage}
        />
      }
      className={styles.productCard}
      actions={[
        <Button
          type="primary"
          size="large"
          block
          onClick={() => {
            if (!currentUser) {
              return navigate(ROUTES.LOGIN);
            }
            addToCart({
              data: {
                productId: product.id,
              },
            });
          }}
          loading={loading}
        >
          Add to cart
        </Button>,
      ]}
    >
      <Card.Meta title={product.title} description={product.description} />

      {/* Design Price */}
      <div className={styles.productPrice}>
        <span className={styles.productPrice__value}>{product.price}</span>
        <span className={styles.productPrice__currency}>$</span>
      </div>
    </Card>
  );
};

export default ProductCard;
