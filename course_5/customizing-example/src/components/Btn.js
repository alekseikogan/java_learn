function Btn() {
    const clickHandler = () => {
        alert('Button clicked');
    }
    const mouseOverHandler = () => {
        console.log('Mouse over button');
    }
    return (
        <button onMouseOver={mouseOverHandler} onClick={clickHandler}>
            Click me
        </button>
    )
}
export default Btn;