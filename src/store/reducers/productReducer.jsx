const initState = {
    list: [],
};
const productReducer = (state = initState, action) => {
    console.log(state,action);
    
    switch (action.type) {
        case "product/set-list":
            return {
                ...state,
                list: action.payload, // dữ liệu được gửi kèm theo action khi gọi dispatch()
            };
        default:
            return state;
    }
};
export default productReducer;
