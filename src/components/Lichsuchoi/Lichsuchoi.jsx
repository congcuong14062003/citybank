import { LichSuChoiIcon } from '../../assets/icons/icons';
import DashBox from '../DashBox/DashBox';
import './Lichsuchoi.scss';
function Lichsuchoi() {
    return (
        <DashBox title="Lịch sử chơi gần đây" icon={<LichSuChoiIcon />}>
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
    );
}

export default Lichsuchoi;
