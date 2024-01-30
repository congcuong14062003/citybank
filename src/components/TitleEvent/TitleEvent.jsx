import './TitleEvent.scss';
function TitleEvent({ icon, title, date }) {
    return (
        <div className="title_event_container">
            <div className="icon_title">{icon}</div>
            <div className="title">{title}</div>
            {date && <div className="date_title">{date}</div>}
        </div>
    );
}

export default TitleEvent;
