import { useEffect, useState } from "react";

function Content() {
    useEffect(() => {
        console.log("Callback useEffect được gọi");
    }, []);
    return <h1>Content</h1>;
}

function UseState() {
    const [mounted, setMounted] = useState(false);
    // const [counter, setCounter] = useState(0);
    return (
        <div>
            <button
                onClick={() => {
                    setMounted(!mounted);
                }}
            >
                Toggle
            </button>
            {mounted && <Content />}
        </div>
    );
}
export default UseState;
