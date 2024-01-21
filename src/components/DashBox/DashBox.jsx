import { useEffect, useRef } from 'react';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './DashBox.scss';
function DashBox({ children, className, title, icon }) {
    const classes = `dashbox ${className}`;
    return (
        <div className={classes}>
            <HeadingTitle icon={icon} title={title} />
            <div className="dashbox__table-wrap">
                <div className="scroll-content">{children}</div>
            </div>
            
        </div>
    );
}

export default DashBox;
