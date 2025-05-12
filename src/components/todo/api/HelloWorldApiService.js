import axios from "axios";


// 1. 함수로 전달하기
// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

// 반복되는 url 
const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080' 
    }
)

// 2. 화살표 함수로 하는 간단한 방법
export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`)