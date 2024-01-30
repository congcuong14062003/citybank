import './InputForm.scss';
function InputForm({ placeholder }) {
    return (
        <p>
            <input class="data__input" placeholder={placeholder} type="text" />
        </p>
    );
}

export default InputForm;
