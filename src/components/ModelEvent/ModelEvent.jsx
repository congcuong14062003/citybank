import { CloseBtn, FlagDiemDanh } from '../../assets/icons/icons';
import images from '../../assets/imgs';
import './ModelEvent.scss';
function ModelEvent({ children, flag, onClick, title }) {
    return (
        <div
            className="modal fade show"
            id="modalMuster"
            tabIndex="-1"
            aria-labelledby="modelTitleId"
            style={{ display: 'block', paddingLeft: '0px' }}
            aria-modal="true"
            role="dialog"
        >
            <div className="modal-dialog modal-lg modal-dialog-centered modal-attendance" role="document">
                <div className="modal-content">
                    <div className="div-flag-attendance">
                        <div className="img-backgroud-flag-attendance">
                            <img src={images.modalheader} alt="" />
                            <div className="icon_flag">
                                <FlagDiemDanh />
                            </div>
                        </div>
                    </div>
                    <div className="modal-header-attendance modal-header">
                        <button type="button" className="close close_diemdanh" onClick={onClick}>
                            <span aria-hidden="true" style={{ color: 'white' }}>
                                <CloseBtn />
                            </span>
                        </button>
                    </div>
                    {/* <div className="modal-body">
                        <div className="row mt-2 mb-2">
                            <div className="form-group">
                                <div className="row gutters-xs">
                                    <span className="col text-center">
                                        <button
                                            className="btn btn-success-gradient"
                                            id="btnMuster"
                                            data-bs-toggle="tooltip"
                                            data-placement="top"
                                            title=""
                                            data-original-title="Điểm danh"
                                        >
                                            <DiemDanhIcon /> ĐIỂM DANH HÀNG NGÀY
                                        </button>
                                        <p className="history_diemdanh">Lịch sử điểm danh tuần</p>
                                    </span>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="timeline-steps aos-init aos-animate"
                                    data-aos="fade-up"
                                    id="diemdanh-his"
                                >
                                    <div className="timeline-step">
                                        <div className="timeline-content">
                                            <div className="p-1 rounded-circle">
                                                <img
                                                    width="32"
                                                    height="32"
                                                    src="https://citybank.club/public/assets/img/not-attendance.png"
                                                    alt="fail"
                                                />
                                            </div>
                                            <p className="">T2</p>
                                        </div>
                                    </div>

                                    <div className="timeline-step">
                                        <div className="timeline-content">
                                            <div className="p-1 rounded-circle">
                                                <img
                                                    width="32"
                                                    height="32"
                                                    src="https://citybank.club/public/assets/img/attendance.png"
                                                    alt="true"
                                                />
                                            </div>
                                            <p className="">T3</p>
                                        </div>
                                    </div>

                                    <div className="timeline-step">
                                        <div className="timeline-content">
                                            <div className="p-1 rounded-circle">
                                                <img
                                                    width="32"
                                                    height="32"
                                                    src="https://citybank.club/public/assets/img/not-attendance.png"
                                                    alt="fail"
                                                />
                                            </div>
                                            <p className="">T4</p>
                                        </div>
                                    </div>

                                    <div className="timeline-step">
                                        <div className="timeline-content">
                                            <div className="p-1 rounded-circle">
                                                <img
                                                    width="32"
                                                    height="32"
                                                    src="https://citybank.club/public/assets/img/not-attendance.png"
                                                    alt="fail"
                                                />
                                            </div>
                                            <p className="">T5</p>
                                        </div>
                                    </div>

                                    <div className="timeline-step">
                                        <div className="timeline-content">
                                            <div className="p-1 rounded-circle">
                                                <img
                                                    width="32"
                                                    height="32"
                                                    src="https://citybank.club/public/assets/img/not-attendance.png"
                                                    alt="fail"
                                                />
                                            </div>
                                            <p className="">T6</p>
                                        </div>
                                    </div>

                                    <div className="timeline-step">
                                        <div className="timeline-content">
                                            <div className="p-1 rounded-circle">
                                                <img
                                                    width="32"
                                                    height="32"
                                                    src="https://citybank.club/public/assets/img/not-attendance.png"
                                                    alt="fail"
                                                />
                                            </div>
                                            <p className="">T7</p>
                                        </div>
                                    </div>

                                    <div className="timeline-step">
                                        <div className="timeline-content">
                                            <div className="p-1 rounded-circle">
                                                <img
                                                    width="32"
                                                    height="32"
                                                    src="https://citybank.club/public/assets/img/not-attendance.png"
                                                    alt="fail"
                                                />
                                            </div>
                                            <p className="">CN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row gutters-xs">
                                    <span className="col text-center">
                                        <button
                                            className="btn btn-warning-gradient"
                                            id="btnMusterWeek"
                                            data-bs-toggle="tooltip"
                                            data-placement="top"
                                            title=""
                                            data-original-title="Nhận thưởng tuần"
                                        >
                                            <i className="fa fa-gift"></i> NHÂN THƯỞNG TUẦN
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mb-3">
                            <table className="table card-table table-vcenter text-nowrap table-bordered table-striped text-center">
                                <thead className="badge-primary text-white">
                                    <tr>
                                        <th className="text-center text-white" colSpan="2">
                                            Điểm Danh
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mã phiên</td>
                                        <td>#2024-01-14</td>
                                    </tr>
                                    <tr>
                                        <td>Thưởng</td>
                                        <td>
                                            <span className="">100,000 - 200,000</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Thắng phiên trước</td>
                                        <td>hoan****</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive mb-3">
                            <table className="table card-table table-vcenter text-nowrap table-bordered table-striped text-center">
                                <thead className="badge-primary text-white">
                                    <tr>
                                        <th className="text-center text-white">Mã Phiên</th>
                                        <th className="text-center text-white">Tên đăng nhập</th>
                                        <th className="text-center text-white">Số tiền nhận</th>
                                    </tr>
                                </thead>
                                <tbody id="historyMuster">
                                    <tr>
                                        <td>
                                            <span className="">#2023-11-08</span>
                                        </td>
                                        <td>hoan****</td>
                                        <td>187,805</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="">#2023-11-07</span>
                                        </td>
                                        <td>lamt****</td>
                                        <td>182,448</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="">#2023-11-06</span>
                                        </td>
                                        <td>chob****</td>
                                        <td>199,892</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="">#2023-11-05</span>
                                        </td>
                                        <td>bigm****</td>
                                        <td>152,427</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="">#2023-11-04</span>
                                        </td>
                                        <td>duym****</td>
                                        <td>103,381</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="notice_diemdanh">
                            <ul>
                                <li> Điểm danh miễn phí hàng ngày.</li>
                                <li>
                                    Mỗi ngày sẽ có 1 phần quà random từ 100-200k cho 1 bạn may mắn nhất (Chỉ những ai
                                    điểm danh mới được)
                                </li>
                                <li>Điểm danh đủ 7 ngày + Tổng cược &gt;500k trong tuần thì nhận thưởng 20k</li>
                            </ul>
                        </div>
                    </div> */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModelEvent;
