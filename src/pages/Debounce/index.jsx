import { useEffect, useRef, useState } from "react";
import useDebounce from "../Hooks/useDebounce";

function Debounce() {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const keyword = useDebounce(searchValue, 600);

    console.log(keyword);
    useEffect(() => {
        fetch(`https://api01.f8team.dev/api/products`)
            .then((res) => res.json())
            .then((result) => {
                setProducts(result.data.items);
            });
    }, []);

    // Thao tác tìm kiêms
    useEffect(() => {
        if (!keyword) return;

        fetch(`https://api01.f8team.dev/api/products?q=${searchValue}`)
            .then((res) => res.json())
            .then((result) => {
                setProducts(result.data.items);
            });
    }, [keyword]);

    return (
        <>
            <div>
                <h1>Trang Debounce</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>

                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.id}.{product.title}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default Debounce;
