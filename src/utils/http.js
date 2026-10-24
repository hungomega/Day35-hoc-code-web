import axios from "axios";

const httpClient = axios.create({
    baseURL: "https://api01.f8team.dev/api",
});

// Hàm get dùng để gửi request GET lấy dữ liệu từ API
const get = async (path, config) => {
    // Gửi request GET đến API với đường dẫn path và cấu hình config
    const response = await httpClient.get(path, config);

    // Trả về phần dữ liệu thực tế từ response, không lấy toàn bộ response của Axios
    return response.data;
};

const post = async (path, data, config) => {
    const response = await httpClient.post(path, data, config);
    return response.data;
};
const put = async (path, config) => {
    const response = await httpClient.put(path, data, config);
    return response.data;
};
const patch = async (path, config) => {
    const response = await httpClient.patch(path, data, config);
    return response.data;
};

const del = async (path, config) => {
    const response = await httpClient.delete(path, config);
    return response.data;
};
const http = { get, post, put, patch,del };
export default http;
