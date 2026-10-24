import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function PostDetail() {
    const params = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, []);
    return (
        <div>
            <h1>PostDetail</h1>
            <div>{JSON.stringify(post)}</div>
        </div>
    );
}
export default PostDetail;
