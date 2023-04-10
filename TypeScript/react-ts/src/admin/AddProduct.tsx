import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICategory, IProduct } from "../interface/Interface";
import { Button, Form, Input, Select } from "antd";

interface IPropProduct {
  // products: IProduct[];
  categories: ICategory[];
  onAdd: (product: IProduct) => void;
}
const AddProduct = (props: IPropProduct) => {
  console.log(props.categories);

  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm<IProduct>();

  const onHandleAdd = (values: any) => {
    // values.name = values.name.trim();
    // values.price = values.price.trim();
    // values.image = values.image.trim();
    // values.description = values.description.trim();

    props.onAdd(values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h1>Add Product</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onHandleAdd}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Bạn chưa nhập tên sản phẩm!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            { required: true, message: "Bạn chưa nhập giá!" },
            { pattern: /^(?:\d*)$/, message: "Giá bạn nhập phải là số" },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Bạn chưa nhập link ảnh!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Bạn chưa nhập mô tả!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Select"
          name="categoryId"
          rules={[
            { required: true, message: "Bạn chưa chọn danh mục sản phẩm!" },
          ]}
        >
          <Select>
            {props.categories.map((cate) => {
              return (
                <Select.Option key={cate._id} value={cate._id}>
                  {cate.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name")} placeholder="Product Name" />
        <input type="text" {...register("price")} />
      
        <button type="submit">Add Product</button>
      </form> */}
    </div>
  );
};

export default AddProduct;
