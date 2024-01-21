import { DaiGiaTuanIcon } from '../../assets/icons/icons';
import DashBox from '../DashBox/DashBox';

function DaiGiaTuan() {
    return (
        <DashBox title="Đại gia tuần" icon={<DaiGiaTuanIcon />}>
            <table className="dashbox__table">
                <thead>
                    <tr>
                        <th>HẠNG</th>
                        <th>NICKNAME</th>
                        <th>TỔNG CƯỢC</th>
                        <th>PHẦN THƯỞNG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="dashbox__table-text">NO1</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">tttv2*** </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">4,500,001</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">2,000,000</div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="dashbox__table-text">NO2</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">thang*** </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">3,692,003</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">1,000,000</div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="dashbox__table-text">NO3</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">golai*** </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">142,010</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">700,000</div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="dashbox__table-text">NO4</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text"></div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">30,022</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">500,000</div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="dashbox__table-text">NO5</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">tuan8*** </div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">20,000</div>
                        </td>
                        <td>
                            <div className="dashbox__table-text">300,000</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </DashBox>
    );
}

export default DaiGiaTuan;
