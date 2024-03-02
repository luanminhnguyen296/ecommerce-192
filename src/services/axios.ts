import axios,{AxiosInstance} from "axios";

const Axios = axios.create({
   baseURL: import.meta.env.VITE_BASEURL_API
})
export default Axios