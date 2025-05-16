import { apiClient } from "./ApiClient";

export const excuteBasicAuthenticationService = (token) => apiClient.get(`/basicauth`
    // 인증 헤더 추가 -> 이게 없으면 restAPI를 못보냄
    ,
    {
        headers: {
            Authorization: token
        }
    }

)