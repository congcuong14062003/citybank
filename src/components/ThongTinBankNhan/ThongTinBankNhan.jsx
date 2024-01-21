import React from 'react';
import './ThongTinBankNhan.scss';
import DashBox from '../DashBox/DashBox';
import { QrcodeIcon, ThongTinBankNhanIcon } from '../../assets/icons/icons';
import images from '../../assets/imgs';
const ThongTinBankNhan = () => {
    return (
        <DashBox title="thông tin bank nhận" icon={<ThongTinBankNhanIcon />}>
            <table className="dashbox__table">
                <thead>
                    <tr>
                        <th>NGÂN HÀNG</th>
                        <th>TÀI KHOẢN</th>
                        <th>TÊN CTK</th>
                        <th>CƯỢC MIN</th>
                        <th>CƯỢC MAX</th>
                        <th>MÃ QR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="dashbox__table-text">MB QUÂN ĐỘI</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <span>
                                    <span id="MB-0051220003939">0051220003939</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">NGUYEN NGOC THUY AN</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">10.000</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">3.000.000</div>
                        </td>
                        <td>
                            <QrcodeIcon />
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <NoticeLogin /> */}
            <div className="sukien_hot">
                <img src={images.sukienhot} alt="" />
            </div>
        </DashBox>
    );
};

export default ThongTinBankNhan;
