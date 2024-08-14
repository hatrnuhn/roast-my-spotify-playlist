import axiosStatic from "axios";
import { BASE_URL } from "../constants";

const axios = axiosStatic.create({
    baseURL: BASE_URL
})

export default axios