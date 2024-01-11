import { Link } from 'react-router-dom';
import './CopyRightFooter.scss';
function CopyRightFooter() {
    return (
        <div className="copyright_footer">
            <p>
                Copyright 2023 © <Link to="">VIPBANK.VIN</Link>| All rights reserved
            </p>
        </div>
    );
}

export default CopyRightFooter;
