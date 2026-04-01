const Field = (props) => {
    const {
        label,
        className='',
        id,
        type='text',
        value,
        onInput,
        ref,
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
                ref={ref}
            />
        </div>
    )
}

export default Field;