import SideBar from './SideBar/SideBar';
import './DefaultLayout.scss';
import images from '../../assets/imgs';
import { Link } from 'react-router-dom';
function DefaultLayout({ children }) {
    return (
            <div className="container_content">
                <div className="support_container"><Link><img src={images.support} alt="" /></Link></div>
                <SideBar />
                <div className="content_right">
                    {children}
                </div>
            </div>
    );
}

export default DefaultLayout;
