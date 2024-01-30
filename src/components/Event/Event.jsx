import { CloseBtn, DiemDanhIcon, FlagDiemDanh } from '../../assets/icons/icons';
import images from '../../assets/imgs';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import ModelEvent from '../ModelEvent/ModelEvent';
import TitleEvent from '../TitleEvent/TitleEvent';
import './Event.scss';
function Event({handleHiddenSuKien}) {
    return (
        <ModelEvent onClick={handleHiddenSuKien}>
            <div className="modal-body">
                <div className="row">
                    <div className="profile__content_event">
                        <ul className="nav nav-pills profile__tabs_event mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-event nav-link active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#event-vinhdanh"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                >
                                    VINH DANH
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-event nav-link"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#event-thele"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                    tabIndex="-1"
                                >
                                    THỂ LỆ
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div
                        id="event-vinhdanh"
                        className="tab-pane fade show active"
                        aria-labelledby="pills-home-tab"
                        role="tabpanel"
                    >
                        <div className="mb-4">
                            <div className="col-12 title-vinhdanh">
                                <TitleEvent title="🏆 Top đu dây THẮNG ngày 2023-11-25" date="2023-11-25" />
                            </div>
                            <div className="table-responsive mb-3">
                                <table className="table card-table table-vcenter text-nowrap table-bordered table-striped text-center">
                                    <thead className="badge-primary text-white">
                                        <tr>
                                            <th className="text-center text-white">TOP</th>
                                            <th className="text-center text-white">ID</th>
                                            <th className="text-center text-white">DÂY</th>
                                            <th className="text-center text-white">TỔNG CƯỢC</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>6468118****</td>
                                            <td>8</td>
                                            <td>100.000 ₫</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>6468118****</td>
                                            <td>6</td>
                                            <td>100.000 ₫</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>6468118****</td>
                                            <td>7</td>
                                            <td>100.000 ₫</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-12 user-event-info">
                                <div className="infor_detail">
                                    <div>Dây Của Bạn: </div>
                                    <span>0</span>
                                </div>
                                <div className="infor_detail">
                                    <div>Thứ Hạng Của Bạn: </div>
                                    <span>Không xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="col-12 title-vinhdanh">
                                <TitleEvent title="🏆 Top đu dây thua ngày 2023-11-25" date="2023-11-25" />
                            </div>
                            <div className="table-responsive mb-3">
                                <table className="table card-table table-vcenter text-nowrap table-bordered table-striped text-center">
                                    <thead className="badge-primary text-white">
                                        <tr>
                                            <th className="text-center text-white">TOP</th>
                                            <th className="text-center text-white">ID</th>
                                            <th className="text-center text-white">DÂY</th>
                                            <th className="text-center text-white">TỔNG CƯỢC</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>6468118****</td>
                                            <td>8</td>
                                            <td>100.000 ₫</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>6468118****</td>
                                            <td>6</td>
                                            <td>100.000 ₫</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>6468118****</td>
                                            <td>7</td>
                                            <td>100.000 ₫</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-12 user-event-info">
                                <div className="infor_detail">
                                    <div>Dây Của Bạn: </div>
                                    <span>0</span>
                                </div>
                                <div className="infor_detail">
                                    <div>Thứ Hạng Của Bạn: </div>
                                    <span>Không xác định</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="event-thele" className="tab-pane fade" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="col-12 title-vinhdanh">
                            <div>
                                <TitleEvent title="🏆  Đu dây Thắng dài nhất" />
                            </div>
                            <div className="title_vinh_danh_top">(Tổng cược tối thiểu 50k)</div>
                            <div className="top_vinhdanh">TOP 1: Thưởng 100k</div>
                            <div className="top_vinhdanh">TOP 2: Thưởng 50k</div>
                            <div className="top_vinhdanh">TOP 3: Thưởng 30k</div>
                        </div>
                        <div className="col-12 title-vinhdanh">
                            <div>
                                <TitleEvent title="🏆  Đu dây thua dài nhất" />
                            </div>
                            <div className="title_vinh_danh_top">(Tổng cược tối thiểu 50k)</div>
                            <div className="top_vinhdanh">TOP 1: Thưởng 100k</div>
                            <div className="top_vinhdanh">TOP 2: Thưởng 50k</div>
                            <div className="top_vinhdanh">TOP 3: Thưởng 30k</div>
                        </div>
                    </div>
                </div>
            </div>
        </ModelEvent>
    );
}

export default Event;
