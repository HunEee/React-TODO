import { apiClient } from "./ApiClient";

// 1. 함수로 전달하기
// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

// 2. 화살표 함수로 하는 간단한 방법
export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`
    // 인증 헤더 추가 -> 이게 없으면 restAPI를 못보냄
    // 인터셉터로 호출할때마다 토큰을 헤더에 넣어줄 필요가 없어짐짐
    // ,
    // {
    //     headers: {
    //          Authorization: token
    //     }
    // } 
    // 아래는 하드코딩 방법
    // ,
    // {
    //     headers: {
    //         Authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
    //     }
    // }
)

// export const excuteBasicAuthenticationService = (token) => apiClient.get(`/basicauth`
//     // 인증 헤더 추가 -> 이게 없으면 restAPI를 못보냄
//     ,
//     {
//         headers: {
//             Authorization: token
//         }
//     }

// )