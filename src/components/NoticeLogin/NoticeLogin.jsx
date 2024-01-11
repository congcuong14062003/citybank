import { Link } from 'react-router-dom';
import './NoticeLogin.scss';
function NoticeLogin() {
    return (
        <div className="notice_login_container">
            <p>
                ĐỂ LẤY THÔNG TIN BANK CHUYỂN KHOẢN, VUI LÒNG <Link>ĐĂNG NHẬP</Link> HOẶC <Link>ĐĂNG KÝ NHANH</Link>
            </p>
        </div>
    );
}

export default NoticeLogin;
