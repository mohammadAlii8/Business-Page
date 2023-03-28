import React from "react";
import "./BannerStyles.css";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1 className="typed-out">استارتاپ گلکسی</h1>
            <h1>
              <span>سرمایه گذاری آنلاین</span>
            </h1>
            <p>
              محمدعلی میرزاخانی هستم ، موسس استارتاپ آنلاین گلکسی ، سرمایه گذاری
              با سود بالا. سود بالا فقط و فقط با گلکسی استارتاپ
            </p>
            <div className="used-by">
              <p>مشتریان ما</p>
              <div className="icons">
                <i>
                  <FaDatabase />
                  Staxx
                </i>
                <i>
                  <FaAsterisk />
                  Star AI
                </i>{" "}
                <i>
                  <FaAccusoft />
                  Accusoft
                </i>{" "}
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-txt">ورود</p>
                <div className="social-login">
                  <i>
                    <FaFacebook size={15} />
                  </i>
                  <i>
                    <FaTwitter size={15} />
                  </i>{" "}
                  <i>
                    <FaGithub size={15} />
                  </i>
                </div>
                <div className="divider">
                  <p>
                    <span>Or</span>
                  </p>
                </div>
                <form action="#">
                  <input type="text" placeholder="نام...." />
                  <input type="email" placeholder="ایمیل...." />
                  <input type="password" placeholder="رمزعبور...." />
                  <button>ثبت نام</button>
                </form>
              </div>
              <div className="form-footer">
                <p>
                  ناموسا قوانین
                  <span className="primary-color"> ناموسی مارا</span>
                  <span className="primary-color">قبول کنید</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
