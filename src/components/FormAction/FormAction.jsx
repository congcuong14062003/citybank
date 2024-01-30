import { Children } from 'react';
import images from '../../assets/imgs';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import './FormAction.scss';
function FormAction({children}) {
    return (
        <div className="row">
            <div className="col-12">
                <div className="sign__content">
                    <div className="background_login">
                        <img src={images.formSign} alt="" />
                        <img className="background_top" src={images.headerForm} alt="" />
                        <img className="logoVip" src={images.logoCityBank} alt="" />
                        {/* <form className="sign__form_login form_input" method="post" action="">
                            <div className="sign__group">
                                <p className="text-center err" id="err-msg"></p>
                            </div>

                            <div className="sign__group">
                                <input
                                    type="password"
                                    className="sign__input"
                                    id="uPass"
                                    name="uPass"
                                    placeholder="Mật khẩu hiện tại"
                                />
                            </div>
                            <div className="sign__group">
                                <input
                                    type="password"
                                    className="sign__input"
                                    id="uPass"
                                    name="uPass"
                                    placeholder="Mật khẩu mới"
                                />
                            </div>
                            <div className="sign__group">
                                <input
                                    type="password"
                                    className="sign__input"
                                    id="uPass"
                                    name="uPass"
                                    placeholder="Nhập lại mật khẩu mới"
                                />
                            </div>
                            <PrimaryButton title="cập nhật" />
                        </form> */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormAction;
