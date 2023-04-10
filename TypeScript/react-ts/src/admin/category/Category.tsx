import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryId } from "../../api/category";
import { ICategory, IProduct } from "../../interface/Interface";
import { Link } from "react-router-dom";
interface IProps {
  onRemove: (id: string | number) => void;
}
const Category = (props: IProps) => {
  const { id } = useParams();
  //   console.log(id);
  const [categories, setCategory] = useState<ICategory>();
  useEffect(() => {
    getCategoryId(String(id)).then(({ data }) => {
      setCategory(data);
      //   (data);
    });
  }, []);
  const removeProduct = (id: number | string) => {
    const conf = window.confirm("Bạn có chắc muốn xóa không ?");
    if (conf) {
      props.onRemove(id);
    }
  };
  console.log(categories?.products);
  const products = categories?.products;
  return (
    <div>
      {/* <button><a href="/admin/products/add">Add New Product</a></button> */}
      <h1>Danh mục sản phẩm {categories?.name}</h1>
      <br />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description </th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => {
            return (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <img src={product.image} width="100" />
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(product._id)}
                  >
                    Delete
                  </button>

                  <Link to={`/admin/products/update/${product._id}`}>
                    <button className="btn btn-warning">Update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
