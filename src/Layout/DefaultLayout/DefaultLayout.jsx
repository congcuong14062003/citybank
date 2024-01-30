import SideBar from './SideBar/SideBar';
import './DefaultLayout.scss';
import images from '../../assets/imgs';
import { Link } from 'react-router-dom';
import CopyRightFooter from '../../components/CopyRightFooter/CopyRightFooter';
import { Fragment } from 'react';
function DefaultLayout({ children }) {
    return (
        <Fragment>
            <div className="container_content">
                {/* <div className="support_container"><Link><img src={images.support} alt="" /></Link></div> */}
                <SideBar />
                <div className="content_right">{children}</div>
            </div>
            <div className="footer_content">
                <CopyRightFooter />
            </div>
        </Fragment>
    );
}

export default DefaultLayout;
