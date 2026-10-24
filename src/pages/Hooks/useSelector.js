import store from "@/store/store";
import { useEffect, useState } from "react";

function useSelector(selector) {
    const [state, setState] = useState(() => {
        return selector(store.getState());
    });

    // khi subcribe state thay đổi  , state thay đổi thì cần set lại state mới
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const nextState = selector(store.getState());
            if (state !== nextState) setState(nextState);
        });
        return unsubscribe;
    }, [selector, state]);

    return state;
}

export default useSelector;
