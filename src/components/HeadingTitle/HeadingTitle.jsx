import './HeadingTitle.scss';
function HeadingTitle({ title, icon, className }) {
    return (
        <div className="dashbox__title">
            <h3>
                {icon}
                {title}
            </h3>
        </div>
    );
}

export default HeadingTitle;
