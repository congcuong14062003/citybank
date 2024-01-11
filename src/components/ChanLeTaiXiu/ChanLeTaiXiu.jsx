import { ChanleTaixiuIcon } from '../../assets/icons/icons';
import DashBox from '../DashBox/DashBox';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './ChanLeTaiXiu.scss';
function ChanLeTaiXiu() {
    return (
        <DashBox icon={<ChanleTaixiuIcon />} title="chẵn lẻ - tài xỉu">
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
                                    <span id="nnclc">cuong1406 C</span>
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
        </DashBox>
    );
}

export default ChanLeTaiXiu;
