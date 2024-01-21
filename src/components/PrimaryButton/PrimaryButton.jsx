import './PrimaryButton.scss';
function PrimaryButton({ title, className, onClick }) {
    return (
        <div className="button_primary">
            <button class="sign__btn" type="submit" onClick={onClick}>
                <span>{title}</span>
            </button>
        </div>
    );
}

export default PrimaryButton;
