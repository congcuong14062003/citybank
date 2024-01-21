import { Link, useNavigate } from 'react-router-dom';
import images from '../../assets/imgs';
import './Signup.scss';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
function Signup() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/login');
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

                                    <div className="sign__group">
                                        <input
                                            type="password"
                                            className="sign__input"
                                            id="uPassword-confirm"
                                            name="uPassword-confirm"
                                            placeholder="Nhập lại mật khẩu"
                                            autoComplete="new-password"
                                        />
                                    </div>

                                    <PrimaryButton title="đăng ký" onClick={handleSignup} />
                                    <div className="sign__text_signup">
                                        <span className="">
                                            Đã có tài khoản <Link to="/login">Đăng nhập</Link>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
