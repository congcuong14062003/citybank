import { useState } from 'react';
import ChanLeTaiXiu from '../../components/ChanLeTaiXiu/ChanLeTaiXiu';
// import Header from '../Layout/DefaultLayout/Header/Header';
import './Home.scss';
import ThongTinBankNhan from '../../components/ThongTinBankNhan/ThongTinBankNhan';
import Lichsuchoi from '../../components/Lichsuchoi/Lichsuchoi';
import Lichsuthamgia from '../../components/Lichsuthamgia/Lichsuthamgia';
import DaiGiaTuan from '../../components/DaiGiaTuan/DaiGiaTuan';
import QuyDinhLuatChoi from '../../components/QuyDinhLuatChoi/QuyDinhLuatChoi';
import CopyRightFooter from '../../components/CopyRightFooter/CopyRightFooter';
import images from '../../assets/imgs';
import DiemDanh from '../../components/DiemDanh/DiemDanh';
import Header from '../../Layout/DefaultLayout/Header/Header';
function Home() {
    const [activeComponent, setActiveComponent] = useState(<ChanLeTaiXiu />);
    const handleComponentChange = (newComponent) => {
        setActiveComponent(newComponent);
    };
    const [showDiemDanh, setShowDiemDanh] = useState(false);
    const handleShowDiemDanh = () => {
        setShowDiemDanh(!showDiemDanh);
    };
    return (
        <div className="home_conainer">
            <div className="row">
                <Header onTitleClick={handleComponentChange} />
                <div className="col-12 col-xl-6">{activeComponent}</div>
                <div className="col-12 col-xl-6">
                    <ThongTinBankNhan />
                </div>
                <div className="col-12">
                    <Lichsuchoi />
                    <Lichsuthamgia />
                    <DaiGiaTuan />
                    <QuyDinhLuatChoi />
                </div>
            </div>
            <CopyRightFooter />
            <div className="diem_danh_container" onClick={handleShowDiemDanh}>
                <img src={images.diemdanh} alt="" />
            </div>
            {showDiemDanh && <DiemDanh handleHiddenDiemDanh={handleShowDiemDanh} />}
        </div>
    );
}
export default Home;
