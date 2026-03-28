const Field = (props) => {
    const {
        label,
        className='',
        id,
        type='text',
        value,
        onInput
    } = props;

    return (
        <div className={`field ${className}`}>
            <label
                className="field__label"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="field__input"
                id={id}
                type={type}
                value={value}
                placeholder=" "
                autoComplete="off"
                onInput={onInput}
            />
        </div>
    )
}

export default Field;