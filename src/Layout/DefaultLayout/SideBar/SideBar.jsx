import './SideBar.scss';
import { CaiDatBankIcon, DoiMatKhauIcon, GiftcodeIcon, HomeIcon, LichSuChoiIcon, LichSuChoiIconSideBar, LienKetTeleIcon, LogoutIcon, NhiemVuNgayIcon, NohuIcon } from '../../../assets/icons/icons';
import Menu, { MenuItem } from './Menu';
import config from '../../../configs';
import images from '../../../assets/imgs';
function SideBar() {
    const dataMenu = [
        {
            to: config.routes.home,
            icon: <HomeIcon />,
            title: 'Trang chủ',
        },
        {
            to: config.routes.caidatbank,
            icon: <CaiDatBankIcon />,
            title: 'Cài đặt bank',
        },
        {
            to: config.routes.giftcode,
            icon: <GiftcodeIcon />,
            title: 'giftcode',
        },
        {
            to: config.routes.nhiemvungay,
            icon: <NhiemVuNgayIcon />,
            title: 'nhiemvungay',
        },
        {
            to: config.routes.nohu,
            icon: <NohuIcon />,
            title: 'nổ hũ',
        },
        {
            to: config.routes.lichsuchoi,
            icon: <LichSuChoiIconSideBar />,
            title: 'lịch sử chơi',
        },
        {
            to: config.routes.lienkettelegram,
            icon: <LienKetTeleIcon />,
            title: 'liên kết telegram',
        },
        {
            to: config.routes.doimatkhau,
            icon: <DoiMatKhauIcon />,
            title: 'đổi mật khẩu',
        },
    ];
    return (
        <div className="sidebar_container">
            <div className="logo_citybank">
                <img src={images.logoCityBank} alt="" />
            </div>
            <div className="user_account">
                <div className="infor_user">
                    <div className="avatar_user">
                        <img src={images.avataruser} alt="" />
                    </div>
                    <div className="profile_user">
                        <div className="name_user">Cường koi</div>
                        <div className="level_user">vip 10</div>
                    </div>
                </div>

                <div className="btn_logout">
                    <LogoutIcon />
                </div>
            </div>
            <Menu>
                {dataMenu &&
                    dataMenu.map((data, index) => (
                        <MenuItem to={data.to} key={index} icon={data.icon} title={data.title} />
                    ))}
            </Menu>
        </div>
    );
}

export default SideBar;
