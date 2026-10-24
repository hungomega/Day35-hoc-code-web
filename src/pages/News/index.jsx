import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

function News() {
    const [params, setParams] = useSearchParams();
    const [page, setPage] = useState(() => +params.get("page") ?? 1);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=50&_page=${page}`,
        )
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, [page]);

    //mỗi khi page thay đổi, gọi setParams để cập nhật tham số trên URL.
    useEffect(() => {
        setParams(page <= 1 ? "" : { page });
    }, [page, setParams]);

    console.log(posts);
    return (
        <div>
            <h1>News</h1>
            <ul>
                {posts.map((post, index) => (
                    <li key={post.id}>
                        <Link to={`/news/${post.id}`}>
                            {post.id}.{post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <h2>Pagination:</h2>
            <ul style={{ display: "flex" }}>
                {Array(2)
                    .fill()
                    .map((_, index) => {
                        const pageNum = index + 1;
                        return (
                            <li
                                key={index}
                                style={{
                                    border: "1px solid #333",
                                    background:
                                        page === pageNum ? "orange" : "#fff",
                                }}
                                onClick={() => {
                                    console.log("Tải trang:", pageNum);
                                    setPage(pageNum);
                                }}
                            >
                                {pageNum}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
export default News;
