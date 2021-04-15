import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/"
})

const getRequest = async (route) => {
    return axiosInstance.get(route)
    .then((res) => {
        return res.data;
    })
    .catch((e) => {
        console.log(e)
        throw e;
    })
}

const postRequest = async (route, data) => {
    return axiosInstance.post(route, data)
    .then((res) => {
        return res.data;
    })
    .catch((e) => {
        console.log(e)
        throw e;
    })
}

const deleteRequest = async (route) => {
    return axiosInstance.delete(route)
    .then((res) => {
        return res.data;
    })
    .catch((e) => {
        console.log(e)
        throw e;
    })
}

export {
    getRequest,
    postRequest,
    deleteRequest
}