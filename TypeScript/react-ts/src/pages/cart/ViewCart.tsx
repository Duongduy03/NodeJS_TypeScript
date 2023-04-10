import React from "react";
import { Link } from "react-router-dom";
const ViewCart = () => {
  return (
    <div>
      <div className="content2">
        <div className="breadcrumb">
          <p className="breadcrumb-title">
            <a href="">Trang chủ</a> - Thông tin giỏ hàng
          </p>
        </div>
        <table className="table table-strip">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên đơn hàng</th>
              <th>Ảnh</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Số tiền</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input
                  type="number"
                  min={1}
                  step={1}
                  placeholder="Nhập số lượng"
                />
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCart;
