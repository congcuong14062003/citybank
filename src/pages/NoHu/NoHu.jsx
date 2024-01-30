import { NohuIcon } from '../../assets/icons/icons';
import DashBox from '../../components/DashBox/DashBox';
import './NoHu.scss';
function NoHu() {
    return (
        <div className="nohu_container">
            <DashBox className="center_heading" title="NÔ HŨ - JACKPOT" icon={<NohuIcon />}>
                <div class="subpage-wrapper">
                    <div className="tong_choi_trong_ngay">
                        <p className="">SỐ TIỀN HIỆN TẠI TRONG HŨ ĐANG CHỜ BẠN!</p>
                    </div>
                   
                </div>
            </DashBox>
        </div>
    );
}

export default NoHu;
