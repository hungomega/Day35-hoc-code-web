import { memo, useState } from "react";
import Modal from "../../components/Modal";

const withCounter = (Component) => {
    const WrappedComponent = () => {
        const [counter, setCounter] = useState(0);
        return (
            <Component
                counter={counter}
                increase={() => setCounter(counter + 1)}
            />
        );
    };
    return WrappedComponent;
};

const MyComponent1 = withCounter(({ counter, increase }) => {
    return (
        <div>
            <button onClick={increase}>Increase {counter}</button>
        </div>
    );
});
const MyComponent2 = withCounter(({ counter, increase }) => {
    return (
        <div>
            <button onClick={increase}>Increase {counter}</button>
        </div>
    );
});
const HOC = memo(() => {
    // const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <h1>HOC</h1>
            <MyComponent1 />
            <MyComponent2/>
            {/* <Modal isOpen={isOpen}>
                <h1>Model Content</h1>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </Modal>
            <button onClick={() => setIsOpen(true)}>Open</button> */}
        </div>
    );
});

HOC.displayName = "HOC";

export default HOC;
