import { useState } from 'react';
import ChanLeTaiXiu from '../../components/ChanLeTaiXiu/ChanLeTaiXiu';
import Header from '../../components/Layout/DefaultLayout/Header/Header';
import './Home.scss';
import DashBox from '../../components/DashBox/DashBox';
import ThongTinBankNhan from '../../components/ThongTinBankNhan/ThongTinBankNhan';
import Lichsuchoi from '../../components/Lichsuchoi/Lichsuchoi';
import Lichsuthamgia from '../../components/Lichsuthamgia/Lichsuthamgia';
import DaiGiaTuan from '../../components/DaiGiaTuan/DaiGiaTuan';
import QuyDinhLuatChoi from '../../components/QuyDinhLuatChoi/QuyDinhLuatChoi';
import CopyRightFooter from '../../components/CopyRightFooter/CopyRightFooter';
function Home() {
    const [activeComponent, setActiveComponent] = useState(<ChanLeTaiXiu />);
    const handleComponentChange = (newComponent) => {
        setActiveComponent(newComponent);
    };
    return (
        <div className="home_conainer">
            <div class="row">
                <Header onTitleClick={handleComponentChange} />
                <div class="col-12 col-xl-6">{activeComponent}</div>
                <div class="col-12 col-xl-6">
                    <ThongTinBankNhan />
                </div>
                <div class="col-12">
                    <Lichsuchoi />
                    <Lichsuthamgia />
                    <DaiGiaTuan />
                    <QuyDinhLuatChoi />
                </div>
            </div>
            <CopyRightFooter />
        </div>
    );
}
export default Home;
