import axios from "axios";
import { axiosConfig } from "../../config/http";

export const http = axios.create(axiosConfig);
