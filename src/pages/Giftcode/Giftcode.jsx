import { GiftcodeIcon } from '../../assets/icons/icons';
import DashBox from '../../components/DashBox/DashBox';
import InputForm from '../../components/InputForm/InputForm';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import './Giftcode.scss';
function Giftcode() {
    return (
        <div className="giftcode_container">
            <DashBox className="center_heading" title="nhận giftcode" icon={<GiftcodeIcon />}>
                <div class="subpage-wrapper">
                    <form id="form-bank" method="post" action="">
                        <InputForm placeholder="Nhập số tài khoản" />
                        <p>
                            <PrimaryButton title="cập nhật" />
                        </p>
                    </form>
                    <p class="text-center mt-4">
                        LƯU Ý: HỆ THỐNG TỰ ĐỘNG KHÓA/CHẶN CÁC TÀI KHOẢN LẠM DỤNG HOẶC SỬ DỤNG CLONE ĐỂ NHẬP CODE.
                    </p>
                </div>
            </DashBox>
        </div>
    );
}

export default Giftcode;
