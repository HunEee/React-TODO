import { apiClient } from "./ApiClient";

// Basic 토큰
export const excuteBasicAuthenticationService = (token) => apiClient.get(`/basicauth`
    // 인증 헤더 추가 -> 이게 없으면 restAPI를 못보냄
    ,
    {
        headers: {
            Authorization: token
        }
    }

)

// JWT 방식식
export const excuteJwtAuthenticationService 
    = (username, password) => apiClient.post(`/authenticate`,{username, password})
