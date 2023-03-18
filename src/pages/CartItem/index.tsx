import { useEffect } from "react";
import {
  CreditCardOutlined,
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Row,
  Col,
  Layout,
  Breadcrumb,
  Button,
  Table,
  Space,
  Divider,
  Statistic,
  Tooltip,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { ColumnType } from "antd/es/table";

import { ICartItem, useCartStore } from "@/stores/cart.store";
import { loadingStore } from "@/stores";
import { LoadingKeys } from "@/models";

const CartItem = () => {
  const {
    cart,
    getCart,
    updateQuantity,
    deleteItem,
    clearCart,
    createCashOrder,
  } = useCartStore();
  const { getLoading } = loadingStore();

  useEffect(() => {
    getCart({});
  }, []);

  const columns: any = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (id) => <span>{id}</span>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      align: "center",
      render: (price) => <span>{`${price}$`}</span>,
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
      align: "center",
    },
    {
      title: "Total",
      key: "total",
      align: "center",
      render: (record) => (
        <Space size="middle">
          <p>{`${record.price * record.quantity}$`}</p>
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (record) => (
        <Space size={1}>
          <Tooltip title="Decrement Quantity" placement="top">
            <Button
              type="link"
              onClick={() =>
                updateQuantity({
                  id: record.id,
                  data: {
                    quantity: record.quantity - 1,
                  },
                })
              }
              icon={<MinusOutlined />}
            />
          </Tooltip>

          <Tooltip title="Delete" placement="top">
            <Button
              type="link"
              onClick={() => deleteItem({ id: record.id })}
              danger
              icon={<DeleteOutlined />}
            />
          </Tooltip>

          <Tooltip title="Increment Quantity" placement="top">
            <Button
              type="link"
              onClick={() =>
                updateQuantity({
                  id: record.id,
                  data: {
                    quantity: record.quantity + 1,
                  },
                })
              }
              icon={<PlusOutlined />}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Layout>
        <Content className="site-layout-background">
          <Breadcrumb>Cart</Breadcrumb>
          <br></br>
          <Row justify="end">
            <Col>
              <Button
                type="default"
                onClick={() => clearCart({})}
                danger
                loading={getLoading(LoadingKeys.CLEAR_CART)}
              >
                <DeleteOutlined />
                &nbsp;
                <span>Delete Cart</span>
              </Button>
            </Col>
          </Row>
          <h2>
            Total Items <strong>({cart?.products?.length})</strong>
          </h2>
          <br></br>
          <Table
            rowKey={"id"}
            columns={columns}
            dataSource={cart?.products || []}
            pagination={false}
            loading={
              getLoading(LoadingKeys.UPDATE_ITEM_QUANTITY) ||
              getLoading(LoadingKeys.GET_CART)
            }
          />
          <Divider orientation="right">
            <p>Billing</p>
          </Divider>
          <Row justify="start">
            <Col md={12}></Col>
          </Row>
          <br></br>
          <Row justify="end">
            <Col>
              <Statistic
                title="Total (tax incl)."
                value={`$ ${
                  !cart?.products
                    ? 0
                    : Math.round(
                        cart?.products?.reduce(
                          (acc, item) =>
                            acc + Number(item.price) * item.quantity,
                          0
                        )
                      ).toFixed(2)
                }`}
                precision={2}
              />
              <Button
                style={{ marginTop: 16 }}
                type="primary"
                onClick={() =>
                  createCashOrder({
                    id: cart?.id,
                  })
                }
              >
                Pay now <CreditCardOutlined />
              </Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};
export default CartItem;
