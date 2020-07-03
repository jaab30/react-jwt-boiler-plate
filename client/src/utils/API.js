import axios from "axios";

export default {

    register(data) {
        return axios.post("/auth/register", data)
    },
    login(data) {
        return axios.post("/auth/login", data)
    },
    loadUser() {
        return axios.get("/auth/user")
    }

}