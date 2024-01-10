import { NavLink } from 'react-router-dom';
import images from '../../../../../assets/imgs';

function MenuItem({ to, icon, title, className }) {
    const classes = `menu_items ${className}`;
    return (
        <NavLink className={classes} to={to}>
            <div className="light_active_item">
                <img src={images.LightActive} alt="" />
            </div>
            <div className="icon_items">{icon}</div>
            <span className='title_items'>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
