import { useState } from 'react';

function Btn() {
    const mouseOverHandler = () => {
        console.log('Mouse over button');
    }

    const [count, setCount] = useState(0);

    return (
        <button onMouseOver={mouseOverHandler} onClick={() => setCount(count + 1)}>
            Click me! {count}
        </button>
    )
}
export default Btn;