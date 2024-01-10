import React from 'react';
import './ThongTinBankNhan.scss';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import { ThongTinBankNhanIcon } from '../../assets/icons/icons';
const ThongTinBankNhan = () => {
    return (
        <div className="dashbox" style={{ height: '487.4px' }}>
            <HeadingTitle title="thông tin bank nhận" icon={<ThongTinBankNhanIcon />} />
            <div className="dashbox__table-wrap dashbox__table-bank-infos">
                <div className="scroll-content">
                    <div className="scroll-content">
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
                                {/* Dữ liệu ngân hàng 1 */}
                                <tr>
                                    <td>
                                        <div className="dashbox__table-text">MB QUÂN ĐỘI</div>
                                    </td>
                                    <td>
                                        <div className="dashbox__table-text">
                                            <span>
                                                <span id="MB-0051220003939">0051220003939</span>
                                                <span>
                                                    &nbsp;
                                                    <a
                                                        href="javascript:void(0);"
                                                        data-id="MB-0051220003939"
                                                        data-msg="Đã copy:  MB QUÂN ĐỘI 0051220003939"
                                                        className="mncp copy-bt"
                                                    >
                                                        &nbsp;
                                                    </a>
                                                </span>
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
                                                {/* Biểu tượng SVG */}
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                {/* Dữ liệu ngân hàng 2 */}
                                <tr>
                                    <td>
                                        <div className="dashbox__table-text">VIETINBANK</div>
                                    </td>
                                    <td>
                                        <div className="dashbox__table-text">
                                            <span>
                                                <span id="VTB-104879126238">104879126238</span>
                                                <span>
                                                    &nbsp;
                                                    <a
                                                        href="javascript:void(0);"
                                                        data-id="VTB-104879126238"
                                                        data-msg="Đã copy:  VIETINBANK 104879126238"
                                                        className="mncp copy-bt"
                                                    >
                                                        &nbsp;
                                                    </a>
                                                </span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dashbox__table-text">H DUYEN NIE</div>
                                    </td>
                                    <td>
                                        <div className="dashbox__table-text">10.000</div>
                                    </td>
                                    <td>
                                        <div className="dashbox__table-text">500.000</div>
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
                                                {/* Biểu tượng SVG */}
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThongTinBankNhan;
