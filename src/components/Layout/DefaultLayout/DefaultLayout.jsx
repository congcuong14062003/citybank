import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="container">
                <SideBar />
                <div className="content_right">
                    <Header />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
