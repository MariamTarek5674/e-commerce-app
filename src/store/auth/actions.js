import axios from "axios";

export function login({commit},{ username, password }) {
    return axios
        .post("https://fakestoreapi.com/auth/login", {
            username,
            password
        })
        .then((res) => {
            console.log("Login Success:", res.data.token); // Output the response
            localStorage.setItem('token',res.data.token)
        })
}
