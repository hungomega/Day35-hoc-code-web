const initState = {
    counter: 0,
    theme: "light",
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case "increase":
            return {
                ...state, // bảo lưu toàn bộ dữ liện cũ , ghi đè counter = state,.counter + 1
                counter: state.counter + 1, //ấy giá trị counter hiện tại cộng thêm 1 rồi gán lại cho counter.
            };
        case "setTheme":
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
}
