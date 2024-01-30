import { useEffect, useState } from 'react';
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
import Event from '../../components/Event/Event';
function Home() {
    const [activeComponent, setActiveComponent] = useState(<ChanLeTaiXiu />);
    const handleComponentChange = (newComponent) => {
        setActiveComponent(newComponent);
    };
    const [showDiemDanh, setShowDiemDanh] = useState(false);
    const [showSuKien, setShowSuKien] = useState(false);
    const handleShowDiemDanh = () => {
        setShowDiemDanh(!showDiemDanh);
    };
    const handleShowSuKien = () => {
        setShowSuKien(!showSuKien);
    }

    const handleOutsideClick = (e) => {
        // Kiểm tra xem có phải là click bên ngoài component DiemDanh không
        if (
            showDiemDanh &&
            e.target.closest('.diem_danh_container') === null
            
        ) {
            setShowDiemDanh(false);
        }
        if (
            showSuKien &&
            e.target.closest('.su_kien_container') === null
            
        ) {
            setShowSuKien(false);
        }

    
    };

    useEffect(() => {
        // Thêm sự kiện lắng nghe click bên ngoài khi component được mount
        document.addEventListener('click', handleOutsideClick);
        return () => {
            // Hủy sự kiện khi component bị unmount
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [showDiemDanh, showSuKien]);


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
            <div className="su_kien_container" onClick={handleShowSuKien}>
                <img src={images.sukien} alt="" />
            </div>
            {showDiemDanh && <DiemDanh handleHiddenDiemDanh={handleShowDiemDanh} />}
            {showSuKien && <Event  handleHiddenSuKien={handleShowSuKien}/>}
        </div>
    );
}
export default Home;
