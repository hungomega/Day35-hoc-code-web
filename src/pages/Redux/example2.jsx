import { useEffect } from "react";
import http from "../../utils/http.js";
import { useDispatch, useSelector } from "react-redux";

function Example2() {
    // const [products,setProducts]
    const dispatch = useDispatch();
    const products = useSelector((state) => {
        // useSelector có nghĩa là lấy danh sách sản phẩm từ Redux Store để component Example2 sử dụng và hiển thị lên màn hìn
        return state.product?.list; // Trả về danh sách sản phẩm
    });
    useEffect(() => {
        (async () => {
            const response = await http.get("/products");
            dispatch({
                type: "product/set-list",
                payload: response.data.items,
            });
        })();
    }, []);
    return (
        <div>
            <h1>Redux Example 2</h1>
            <ul>
                {(products ?? []).map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Example2;
