import { DoiMatKhauIcon } from '../../assets/icons/icons';
import DashBox from '../../components/DashBox/DashBox';
import FormAction from '../../components/FormAction/FormAction';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

function DoiMatKhau() {
    return (
        <div className="doimatkhau_container">
            <DashBox className="center_heading" title="đổi mật khẩu" icon={<DoiMatKhauIcon />}>
                <FormAction>
                    <form className="sign__form_login form_input" method="post" action="">
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
                    </form>
                </FormAction>
            </DashBox>
        </div>
    );
}

export default DoiMatKhau;
