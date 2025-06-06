import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function LoginComponent(){

    const[username,setUsername] =useState('in28minutes')
    const[password,setPassword] =useState('')
    const[showErrorMessage,setShowErrorMessage] =useState(false)
    const navigate = useNavigate() // 다른 컴포넌트로 이동하는 훅 
    //로그인 인증 컨텍스트
    const authContext = useAuth()


    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    // authContext.login의 결과를 기다리고 웰컴페이지로 이동
    async function handleSubmit(){
        if(await authContext.login(username,password)){
            navigate(`/welcome/${username}`) // welcome 페이지로 이동
                                            // 파라미터를 넘길때 틱(esc 옆)을 사용 `
        }else{
            setShowErrorMessage(true)
        }
    }

    return(
        <div className="Login">
            <h1>Time to Login!</h1>
            {showErrorMessage &&<div className='errorMessage'>Authentication Faild, Please check your credentials.</div>}
            <div className="LoginForm">
                <div>    
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>  
                </div>   
            </div>
        </div>
    )
}
