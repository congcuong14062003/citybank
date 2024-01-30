import { CaiDatBankIcon } from '../../assets/icons/icons';
import DashBox from '../../components/DashBox/DashBox';
import InputForm from '../../components/InputForm/InputForm';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import './CaiDatBank.scss';
function CaiDatBank() {
    return (
        <div className="caidatbank_container">
            <DashBox className="center_heading" title="cài đặt bank" icon={<CaiDatBankIcon />}>
                <div class="subpage-wrapper">
                    <form id="form-bank" method="post" action="">
                        <p class="text-center err" id="err-msg"></p>
                        <p>
                            <select
                                autocomplete="off"
                                class="sign__selectjs"
                            >
                                <option selected="selected" value="">
                                    Chọn ngân hàng nhận tiền
                                </option>
                                <option value="1">ABBANK - TMCP An Bình</option>
                                <option value="2">ACB - TMCP Á Châu</option>
                                <option value="3">NASBANK - TMCP Bắc Á</option>
                                <option value="4">BIDV - TMCP Đầu tư và Phát triển Việt Nam</option>
                                <option value="5">BAOVIET - TMCP Bảo Việt</option>
                            </select>
                        </p>

                            <InputForm placeholder="Nhập Số Tài Khoản" />

                            <InputForm placeholder=" Nhập Tên Chủ Tài Khoản" />
                            
                        <p>
                            <PrimaryButton title="cập nhật" />
                        </p>
                    </form>
                    <p class="text-center mt-4">
                        LƯU Ý: TÀI KHOẢN BANK CỦA BẠN TỰ ĐỘNG Ở CHẾ ĐỘ <span class="code-num">BẢO VỆ</span> SAU LẦN TRẢ
                        THƯỞNG THÀNH CÔNG ĐẦU TIÊN.
                    </p>
                </div>
            </DashBox>
        </div>
    );
}

export default CaiDatBank;
