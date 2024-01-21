import { LichSuChoiIcon } from '../../assets/icons/icons';
import DashBox from '../DashBox/DashBox';
import './Lichsuthamgia.scss';
function Lichsuthamgia() {
    return (
        <DashBox title="Lịch sử tham gia" icon={<LichSuChoiIcon />}>
            <table className="dashbox__table">
                <thead>
                    <tr>
                        <th>NICKNAME</th>
                        <th>TIỀN CƯỢC</th>
                        <th>TIỀN NHẬN</th>
                        <th>LOẠI GAME</th>
                        <th>KEYWORD</th>
                        <th>KẾT QUẢ</th>
                        <th>THỜI GIAN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="dashbox__table-text">golai5cu</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">10,000</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">19,200</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <span>CLTX2</span>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <code>tt</code>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <span className="gstatus win">Win</span>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">2024-01-10 22:11:45</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="dashbox__table-text">tuan8386</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">10,000</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">19,200</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <span>CLTX2</span>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <code>tc</code>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <span className="gstatus win">Win</span>{' '}
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">2024-01-10 22:11:42</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="dashbox__table-text">golai5cu</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">14,299</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">27,596</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <span>CLTX2</span>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <code>tt</code>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <span className="gstatus win">Win</span>{' '}
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">2024-01-10 18:48:40</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="dashbox__table-text">golai5cu</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">10,000</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">19,299</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <span>CLTX2</span>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <code>tc</code>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <span className="gstatus win">Win</span>{' '}
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">2024-01-10 18:46:36</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="dashbox__table-text">golai5cu</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">13,999</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">33,596</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <span>CLTX</span>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <code>t</code>
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">
                                <span className="gstatus win">Win</span>{' '}
                            </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">2024-01-10 18:42:19</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </DashBox>
    );
}

export default Lichsuthamgia;
