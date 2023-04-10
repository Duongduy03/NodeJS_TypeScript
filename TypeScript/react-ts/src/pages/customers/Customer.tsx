import React from "react";
import { Link, Outlet } from "react-router-dom";
import { isAuthenticate } from "../../utils/localStorage";

const user = isAuthenticate();
interface Iprops {
  onLogOut: () => void;
}
const Customer = (props: Iprops) => {
  // location.reload();
  document
    .getElementById("btn-logout")
    ?.addEventListener("click", () => props.onLogOut());
  return (
    <div>
      <div className="content2">
        <div className="breadcrumb">
          <div className="breadcrumb-title">
            <a href="">Trang chủ</a> - Thông tin cá nhân
          </div>
        </div>
        <section className="section__info">
          <div className="section__info--menu">
            <div className="info--menu__img--box">
              <img
                src="./src/images/toi.jpg"
                alt="avatar"
                className="header__user--img"
              />
            </div>
            <div className="info--menu__username--box">
              <div className="info--menu__username"></div>
            </div>

            <div className="info--menu__function">
              <div className="info--menu__function--box">
                <a href="" className="info--menu__function--link">
                  <div className="info--menu__function--img--box">
                    <img
                      src="./src/images/information.png"
                      alt=""
                      className="info--menu__function--img"
                    />
                  </div>
                  <div className="info--menu__function--label">
                    Chỉnh sửa thông tin cá nhân
                  </div>
                </a>
              </div>
              <div className="info--menu__function--box">
                <Link to="viewcart" className="info--menu__function--link">
                  <div className="info--menu__function--img--box">
                    <img
                      src="./src/images/shopping-cart.png"
                      alt=""
                      className="info--menu__function--img"
                    />
                  </div>
                  <div className="info--menu__function--label">
                    Quản Lý đặt hàng
                  </div>
                </Link>
              </div>
              <div className="info--menu__function--box">
                <a href="" className="info--menu__function--link">
                  <div className="info--menu__function--img--box">
                    <img
                      src="./src/images/wallet.png"
                      alt=""
                      className="info--menu__function--img"
                    />
                  </div>
                  <div className="info--menu__function--label">Ví của tôi</div>
                </a>
              </div>
            </div>

            <div className="info--menu__logout">
              <button className="info--menu__logout--link" id="btn-logout">
                <div className="info--menu__logout--img--box">
                  <img
                    src="./src/images/shutdown.png"
                    alt=""
                    className="info--menu__logout--img"
                  />
                </div>
                <div className="info--menu__logout--label">Đăng xuất</div>
              </button>
            </div>
          </div>
          <div className="section__info--display">
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
              <label className="section__info--display--label">Mật khẩu:</label>
              <div className="section__info--display--textContent"></div>
            </div>
            <div className="section__info--display--box">
              <label className="section__info--display--label">Ngày tạo:</label>
              <div className="section__info--display--textContent">
                <div className="section__info--display--textContent"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Customer;
