import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.0.105:3333', /* for ios system */
    // or: http://localhost:3333 for android system
})