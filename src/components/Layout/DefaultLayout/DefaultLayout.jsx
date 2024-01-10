import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import './DefaultLayout.scss';
function DefaultLayout({ children }) {
    return (
            <div className="container_content">
                <SideBar />
                <div className="content_right">
                    <Header />
                    {children}
                </div>
            </div>
    );
}

export default DefaultLayout;
