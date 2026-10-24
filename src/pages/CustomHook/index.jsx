import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter(counter + 1);
    return [counter, increase];
}

const CustomHook = () => {
    const [counter, increase] = Counter();
    return <button onClick={increase}> Btn {counter}</button>;
};
export default CustomHook;
