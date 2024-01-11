import HeadingTitle from '../HeadingTitle/HeadingTitle';
import './DashBox.scss';
function DashBox({ children, className, title, icon}) {
    return (
        <div class="dashbox">
            <HeadingTitle icon={icon} title={title} />
            <div class="dashbox__table-wrap">
                <div class="scroll-content">{children}</div>
            </div>
        </div>
    );
}

export default DashBox;
