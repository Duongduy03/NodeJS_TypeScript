import React from "react";

const Bill = () => {
  return (
    <div>
      <div className="content2">
        <div className="breadcrumb">
          <div className="breadcrumb-title">
            <a href="">Trang chủ</a> - Thông tin đơn hàng
          </div>
        </div>
        <section className="section__info">
          <div className="section__info--menu">
            <div className="info--menu__img--box">
              <img src={""} alt="avatar" className="header__user--img" />
            </div>
          </div>

          <div className="section__info--display">
            <form action="">
              <div className="section__info--display--box">
                <label className="section__info--display--label">
                  Họ và tên:
                </label>
                <div className="section__info--display--textContent"></div>
              </div>
              <div className="section__info--display--box">
                <label className="section__info--display--label">Email:</label>
                <div className="section__info--display--textContent">
                  <div className="section__info--display--textContent"></div>
                </div>
              </div>
              <div className="section__info--display--box">
                <label className="section__info--display--label">
                  Số điện thoại:
                </label>
                <div className="section__info--display--textContent">
                  <div className="section__info--display--textContent"></div>
                </div>
              </div>
              <div className="section__info--display--box">
                <label className="section__info--display--label">
                  Mật khẩu:
                </label>
                <div className="section__info--display--textContent"></div>
              </div>
              <div className="section__info--display--box">
                <label className="section__info--display--label">
                  Ngày tạo:
                </label>
                <div className="section__info--display--textContent">
                  <div className="section__info--display--textContent"></div>
                </div>
              </div>
              <button className="btn btn-danger">Mua ngay</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bill;
