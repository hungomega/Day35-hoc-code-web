// import { useDispatch, useSelector } from "@/contexts/ReduxContext.jsx";
// import * as ReactRedux from "react-redux";

import { useDispatch, useSelector } from "react-redux";
// import useDispatch from "@/pages/Hooks/useDispatch";
// import useSelector from "@/pages/Hooks/useSelector";
export function Counter() {
    const dispatch = useDispatch(); // cài  là store.dispatch  , bắn đi 1 action tới reducer
    const counter = useSelector((state) => state.counter); // lấy giá trị counter từ state trong Redux store và gán vào biến counterr
    return (
        <div>
            <h2> {counter} </h2> <br />
            <button
                onClick={() => {
                    dispatch({
                        type: "increase",
                    });
                }}
            >
                Increase
            </button>
        </div>
    );
}

export function Theme() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    return (
        <div>
            <h2>Theme: {theme}</h2>
            <div>
                <button
                    onClick={() => {
                        dispatch({
                            type: "setTheme",
                            payload: "light",
                        });
                    }}
                >
                    {" "}
                    Light
                </button>
                <button
                    onClick={() => {
                        dispatch({
                            type: "setTheme",
                            payload: "dark",
                        });
                    }}
                >
                    Dark
                </button>
            </div>
        </div>
    );
}

function Redux() {
    return (
        <div>
            <h1>Redux Demo</h1>
            <Counter />
            <Theme />
        </div>
    );
}
export default Redux;
