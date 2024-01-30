import { LichSuChoiIconSideBar } from '../../assets/icons/icons';
import DashBox from '../../components/DashBox/DashBox';
import Lichsuchoi from '../../components/Lichsuchoi/Lichsuchoi';
function LichSuChoiPage() {
    return (
        <div className="lichsuchoi_container">
            <DashBox className="center_heading" title="LỊCH SỬ CHƠI CỦA BẠN" icon={<LichSuChoiIconSideBar />}>
                <table className="dashbox__table">
                    <thead>
                        <tr>
                            <th>Trò chơi</th>
                            <th>Đã chọn</th>
                            <th>MÃ GIAO DỊCH</th>
                            <th>Số tiền</th>
                            <th>KẾT QUẢ</th>
                            <th>TRẢ THƯỞNG</th>
                            <th>THỜI GIAN</th>
                            <th>sao kê</th>
                            <th>ghi chú</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </DashBox>
        </div>
    );
}

export default LichSuChoiPage;
