import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../assets/imgs';
function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
      // Xử lý logic đăng nhập ở đây
  
      // Sau khi đăng nhập thành công, chuyển hướng về trang chủ
      navigate('/');
    };
    return (
        <div className="sign-up section--bg">
            <img className="support_img" src={images.support} alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            <div className="background_login">
                                <img src={images.formSign} alt="" />
                                <img className="background_top" src={images.headerForm} alt="" />
                                <img className="logoVip" src={images.logoCityBank} alt="" />
                                <form className="sign__form_login form_input" method="post" action="">
                                    <div className="sign__group">
                                        <p className="text-center err" id="err-msg"></p>
                                    </div>
                                    <div className="sign__group">
                                        <input
                                            className="sign__input"
                                            id="uName"
                                            name="uName"
                                            placeholder="Tài khoản"
                                            type="text"
                                        />
                                    </div>

                                    <div className="sign__group">
                                        <input
                                            type="password"
                                            className="sign__input"
                                            id="uPass"
                                            name="uPass"
                                            placeholder="Mật khẩu"
                                        />
                                    </div>
                                    <button className="sign__btn" type="submit" onClick={handleLogin}>
                                        <span>ĐĂNG NHẬP</span>
                                    </button>
                                    <div className="sign__text_signup">
                                        <span className="">
                                            Chưa có tài khoản <Link to="/signup">Đăng ký</Link>
                                        </span>
                                    </div>
                                </form>
                                {/* end authorization form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
