import { createContext,useContext, useState } from "react";

// 1. 컨텍스트 생성
export const AuthContext = createContext()

//useAuth 훅 사용
export const useAuth = () => useContext(AuthContext)

// 2. 생성한 컨텍스트를 다른 컴포넌트들과 공유
export default function AuthProvider({children}){

    //state를 context에 주입
    const [number, setNumber] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)

    //10초마다 상태를 변경
    // setInterval(함수, 시간)
    // 10초마다 함수를 호출
    //setInterval(() => setNumber(number+1),10000)

    // 자바스크립트에서 객체를 생성하는 방법
    const valueToBeShared = {number, isAuthenticated, setAuthenticated}

    return(
        <AuthContext.Provider value={ valueToBeShared }>
            {children}
        </AuthContext.Provider>
    )

}