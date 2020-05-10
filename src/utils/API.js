import axios from "axios";

const API = "https://randomuser.me/api/?results=100";

export default {
    randomEMP : () => {
        return axios.get(API);
    }
};