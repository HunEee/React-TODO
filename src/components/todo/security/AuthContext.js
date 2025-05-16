import { createContext,useContext, useState } from "react";
import { excuteBasicAuthenticationService } from "../api/AuthenticationApiService"
import { apiClient } from "../api/ApiClient";

// 1. 컨텍스트 생성
export const AuthContext = createContext()

//useAuth 훅 사용
export const useAuth = () => useContext(AuthContext)

// 2. 생성한 컨텍스트를 다른 컴포넌트들과 공유
export default function AuthProvider({children}){

    //state를 context에 주입
    const [number, setNumber] = useState(10)
    // 인증여부 state
    const [isAuthenticated, setAuthenticated] = useState(false)
    // usrtname를 전달하기 위한 state
    const [username, setUsername] = useState(null)
    // 인증을 위한 토큰 
    const [token, setToken] = useState(null)

    //10초마다 상태를 변경
    // setInterval(함수, 시간)
    // 10초마다 함수를 호출
    //setInterval(() => setNumber(number+1),10000)

    //login 로직 - 하드코딩 버전
    // function login(username,password){
    //     if(username==='in28minutes'&&password==='dummy'){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }else{
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    // login 로직
    async function login(username,password){

        const baToken = 'Basic ' + window.btoa(username + ":"+ password)

        try{
            // 기본 인증 서비스(excuteBasicAuthenticationService) 가 실행될 때까지 기다렸다가 response를 리턴
            const response = await excuteBasicAuthenticationService(baToken)

            if(response.status==200){
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)

                //사용자가 로그인을 하면 모든 apiclient 호출에 이 헤더를 추가
                // 토큰을 헤더에 추가 -> 인터셉터 설정
                apiClient.interceptors.request.use(
                    (config) =>{
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = baToken
                        return config
                    }
                )

                return true
            }else{
                logout()
                return false
            }
        }catch(error) {
            logout()
            return false
        }  
    }


    function logout(){
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    // 자바스크립트에서 객체를 생성하는 방법
    const valueToBeShared = {isAuthenticated,login,logout, username,token}

    return(
        <AuthContext.Provider value={ valueToBeShared }>
            {children}
        </AuthContext.Provider>
    )

}