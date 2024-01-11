import React from 'react';
import './ThongTinBankNhan.scss';
import DashBox from '../DashBox/DashBox';
import { ThongTinBankNhanIcon } from '../../assets/icons/icons';
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
                            <button className="qrc catalog__btn catalog__btn--banned">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-qr-code-scan"
                                    viewBox="0 0 16 16"
                                >
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <NoticeLogin /> */}
        </DashBox>
    );
};

export default ThongTinBankNhan;
