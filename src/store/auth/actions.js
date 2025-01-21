import axios from "axios";

export function login({commit},{ username, password }) {
    return axios
        .post("https://fakestoreapi.com/auth/login", {
            username,
            password
        })
        .then((res) => {
            localStorage.setItem('token',res.data.token)
        })
}
