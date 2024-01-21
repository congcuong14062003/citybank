import { ChanleTaixiuIcon, CopyIcon } from '../../assets/icons/icons';
import DashBox from '../DashBox/DashBox';
import './ChanLeTaiXiu.scss';
function ChanLeTaiXiu() {
    return (
        <DashBox icon={<ChanleTaixiuIcon />} title="chẵn lẻ - tài xỉu">
            <div className="notice_content">
                <p>Với nội dung: G3 (nếu 2 số cuối và 3 số cuối mã giao dịch Bank có các số sau)</p>
            </div>
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
                                <span className="content_text">
                                    <span id="nnclc">cuong1406 C</span>
                                    <span className="content_icon_text">
                                        <CopyIcon />
                                    </span>
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

                    <tr>
                        <td>
                            <div className="dashbox__table-text">
                                <span className="content_text">
                                    <span id="nnclc">cuong1406 C</span>
                                    <span className="content_icon_text">
                                        <CopyIcon />
                                    </span>
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
                    <tr>
                        <td>
                            <div className="dashbox__table-text">
                                <span className="content_text">
                                    <span id="nnclc">cuong1406 C</span>
                                    <span className="content_icon_text">
                                        <CopyIcon />
                                    </span>
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
                    <tr>
                        <td>
                            <div className="dashbox__table-text">
                                <span className="content_text">
                                    <span id="nnclc">cuong1406 C</span>
                                    <span className="content_icon_text">
                                        <CopyIcon />
                                    </span>
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
                </tbody>
            </table>
            <div className="subpage_wrapper">
                <p>
                    Bill quá 5P chưa thanh toán , bạn hãy cick vào icon chat ở góc phải màn hình để liên hệ hỗ trợ (
                    24/7 ) , Tất cả các mã giao dịch chỉ được hỗ trợ trong ngày nha ae !
                </p>
            </div>
        </DashBox>
    );
}

export default ChanLeTaiXiu;
