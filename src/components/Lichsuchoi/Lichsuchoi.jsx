import { LichSuChoiIcon } from '../../assets/icons/icons';
import DashBox from '../DashBox/DashBox';
import './Lichsuchoi.scss';
function Lichsuchoi() {
    return (
        <DashBox title="Lịch sử chơi gần đây" icon={<LichSuChoiIcon />}>
            <table className="dashbox__table">
                <thead>
                    <tr>
                        <th>MÃ GIAO DỊCH</th>
                        <th>MÃ GIAO DỊCH CHUYỂN ĐỔI</th>
                        <th>TIỀN CƯỢC</th>
                        <th>KEYWORD</th>
                        <th>KẾT QUẢ</th>
                        <th>TRẢ THƯỞNG</th>
                        <th>THỜI GIAN</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </DashBox>
    );
}

export default Lichsuchoi;
