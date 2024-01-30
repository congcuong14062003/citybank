import { LienKetTeleIcon } from '../../assets/icons/icons';
import DashBox from '../../components/DashBox/DashBox';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import './LienKetTeleGram.scss';
function LienKetTeleGram() {
    return (
        <div className="lienkettele_container">
            <DashBox className="center_heading" title="LIÊN KẾT TELEGRAM" icon={<LienKetTeleIcon />}>
                <div class="subpage-wrapper">
                    <p className="">TÀI KHOẢN CỦA BẠN CHƯA ĐƯỢC LIÊN KẾT TELEGRAM</p>
                    <div className="button-lienket">
                        <PrimaryButton title="liên kết ngay" />
                    </div>
                </div>
            </DashBox>
        </div>
    );
}

export default LienKetTeleGram;
