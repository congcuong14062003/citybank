import { ChanleTaixiuIcon } from '../../assets/icons/icons';
import HeadingTitle from '../HeadingTitle/HeadingTitle';

function ChanLeTaiXiu() {
    return (
        <div id="cltx" className="game-details active">
            <HeadingTitle title="chẵn lẻ - tài xỉu" icon={<ChanleTaixiuIcon />} />(
            <div className="dashbox__table-wrap dashbox__table-wrap--1">
                <div className="scroll-content">
                    <div className="notice_content"><p>Với nội dung: G3 (nếu 2 số cuối và 3 số cuối mã giao dịch Bank có các số sau)</p></div>
                    <table className="dashbox__table">
                        <thead>
                            <tr>
                                <th>NỘI DUNG</th>
                                <th>SỐ CUỐI</th>
                                <th>TỶ LỆ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="dashbox__table-text">
                                        <span>
                                            <span id="nnclc">cuong1406 C</span> &nbsp;
                                            <a
                                                href="javascript:void(0);"
                                                data-id="nnclc"
                                                data-msg="Đã copy: nickname C"
                                                className="mncp copy-bt"
                                            >
                                                &nbsp;
                                            </a>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text">
                                        <code>2</code>
                                        <code>4</code>
                                        <code>6</code>
                                        <code>8</code>
                                    </div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text">x2.4</div>
                                </td>
                            </tr>
                            {/* Dữ liệu hàng 2 */}
                            <tr>
                                <td>
                                    <div className="dashbox__table-text">
                                        <span>
                                            <span id="nncll">cuong1406 L</span> &nbsp;
                                            <a
                                                href="javascript:void(0);"
                                                data-id="nncll"
                                                data-msg="Đã copy: nickname L"
                                                className="mncp copy-bt"
                                            >
                                                &nbsp;
                                            </a>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text">
                                        <code>1</code>
                                        <code>3</code>
                                        <code>5</code>
                                        <code>7</code>
                                    </div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text">x2.4</div>
                                </td>
                            </tr>
                            {/* Dữ liệu hàng 3 */}
                            <tr>
                                <td>
                                    <div className="dashbox__table-text">
                                        <span>
                                            <span id="nntxt">cuong1406 T</span> &nbsp;
                                            <a
                                                href="javascript:void(0);"
                                                data-id="nntxt"
                                                data-msg="Đã copy: nickname T"
                                                className="mncp copy-bt"
                                            >
                                                &nbsp;
                                            </a>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text">
                                        <code>5</code>
                                        <code>6</code>
                                        <code>7</code>
                                        <code>8</code>
                                    </div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text">x2.4</div>
                                </td>
                            </tr>
                            {/* Dữ liệu hàng 4 */}
                            <tr>
                                <td>
                                    <div className="dashbox__table-text">
                                        <span>
                                            <span id="nnclc21">cuong1406 X</span> &nbsp;
                                            <a
                                                href="javascript:void(0);"
                                                data-id="nnclc21"
                                                data-msg="Đã copy: nickname X"
                                                className="mncp copy-bt"
                                            >
                                                &nbsp;
                                            </a>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text">
                                        <code>1</code>
                                        <code>2</code>
                                        <code>3</code>
                                        <code>4</code>
                                    </div>
                                </td>
                                <td>
                                    <div className="dashbox__table-text">x2.4</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="subpage-wrapper">
                        <p>
                            <i className="small-notes">
                                Bill quá 5P chưa thanh toán, bạn hãy click vào icon chat ở góc phải màn hình để liên hệ
                                hỗ trợ (24/7), Tất cả các mã giao dịch chỉ được hỗ trợ trong ngày nha ae!
                            </i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChanLeTaiXiu;
