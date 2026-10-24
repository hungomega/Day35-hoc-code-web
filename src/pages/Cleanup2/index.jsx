import { useEffect, useState } from "react";
import imgHung from "../../assets/img/hung.jpg";
const styles = {
    avatar: {
        width: 300,
        height: 300,
        borderRadius: "50%",
        objectFit: "cover",
        objectPosition: "right center",
    },
};
function Cleanup2() {
    // const [file, setFile] = useState(null);
    const [previewURL, setpreviewURL] = useState(null);

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewURL);
        };
    }, [previewURL]);

    const handleChange = (e) => {
        const img = e.target.files[0];
        const previewURL = URL.createObjectURL(img);
        console.log(previewURL);

        setpreviewURL(previewURL);
    };
    return (
        <div>
            <label>
                <input type="file" hidden onChange={handleChange} />
                <img
                    src={previewURL || imgHung}
                    alt=""
                    style={styles.avatar}
                />{" "}
            </label>
        </div>
    );
}
export default Cleanup2;
