import { NhiemVuNgayIcon,  } from '../../assets/icons/icons';
import DashBox from '../../components/DashBox/DashBox';
import './Nhiemvungay.scss';
function Nhiemvungay() {
    return (
        <div className="nhiemvu_container">
            <DashBox className="center_heading" title="nhiệm vụ ngày" icon={<NhiemVuNgayIcon />}>
                <div class="subpage-wrapper">
                    <div className="tong_choi_trong_ngay">
                        <p className="">TỔNG CHƠI TRONG NGÀY: </p>
                        <span className="">0</span>
                    </div>
                    <table className="dashbox__table">
                        <thead>
                            <tr>
                                <th>mốc chơi</th>
                                <th>thưởng</th>
                                <th>trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="dashbox__table-text">1,000,000</div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text">
                                        <span>
                                            <span id="MB-0051220003939">11,111</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text chua_dat">chưa đạt</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="dashbox__table-text">1,000,000</div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text">
                                        <span>
                                            <span id="MB-0051220003939">11,111</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text chua_dat">chưa đạt</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="dashbox__table-text">1,000,000</div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text">
                                        <span>
                                            <span id="MB-0051220003939">11,111</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text chua_dat">chưa đạt</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DashBox>
        </div>
    );
}

export default Nhiemvungay;
