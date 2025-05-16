import {useParams,Link,resolvePath } from 'react-router-dom'
import { useState } from 'react'
//import axios from 'axios'
//axios를 위한 임포트트
import {  retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

export default function WelcomeComponent(){
    
    const {username} = useParams() // 객체를 직접 받는 대신 객체의 값을 받음
    // console.log(params.username)
    console.log(username)

    const authContext = useAuth()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi(){
        console.log("called")

        //axios 를 이용해 REST API를 호출
        //  then 문: REST API가 호출에 성공하면 successfulResponse 함수를 호출
        //  catch 문: error 이 발생하면 errorResponse 함수 호출
        //  finally 문: 성공여부와 관련없이 실행되는 코드
        // axios.get('http://localhost:8080/hello-world')
        //     .then((response) => successfulResponse(response))
        //     .catch((error)=>errorResponse(error))
        //     .finally(()=>console.log('cleanup'))

        // retrieveHelloWorldBean().then((response) => successfulResponse(response))
        //                         .catch((error)=>errorResponse(error))
        //                         .finally(()=>console.log('cleanup'))

        retrieveHelloWorldPathVariable('Ranga',authContext.token)
            .then((response) => successfulResponse(response))
            .catch((error)=>errorResponse(error))
            .finally(()=>console.log('cleanup'))

    }

    function successfulResponse(response){
        console.log(response)
        // 스프링 컨트롤러에 return 값을 response에 담음
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return(

        <div className='welcomeComponent'>
            <h1>Welcome {username}</h1>
            <div className="Welcome">
                Manage Your todos - <Link to='/todos'>Go here</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>
                    Call Hello World REST API
                </button>
                <div className="text-info">{message}</div>
            </div>
        </div>
    )
}