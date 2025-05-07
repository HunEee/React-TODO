import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate,useParams,Link } from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <HeaderComponent />

            <BrowserRouter>
                <Routes>
                     <Route path='/' element={<LoginComponent />} /> 
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                   
                    <Route path='*' element={<ErrorComponent />}></Route>             
                </Routes>
            </BrowserRouter>

            <FooterComponent />
        </div>
    )
}

function LoginComponent(){

    const[username,setUsername] =useState('지훈')
    const[password,setPassword] =useState('')
    const[showSuccessMessage,setShowSuccessMessage] =useState(false)
    const[showErrorMessage,setShowErrorMessage] =useState(false)
    const navigate = useNavigate() // 다른 컴포넌트로 이동하는 훅 

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(username==='in28minutes'&&password==='dummy'){
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`) // welcome 페이지로 이동
                                            // 파라미터를 넘길때 틱(esc 옆)을 사용 `
        }else{
            console.log('Faild')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return(
        <div className="Login">
            <h1>Time to Login!</h1>
            {showSuccessMessage &&<div className='successMessage'>Authenticated Successfully</div>}
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



function WelcomeComponent(){
    const {username} = useParams() // 객체를 직접 받는 대신 객체의 값을 받음
    // console.log(params.username)
    console.log(username)
    return(

        <div className='welcomeComponent'>
            <h1>Welcome {username}</h1>
            <div className="Welcome">
                Manage Your todos - <Link to='/todos'>Go here</Link>
            </div>
        </div>
    )
}


function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h2>We are working really hard!</h2>
            <div>
                Apologies for the 404. Reach out to our team at 010_7933_GHIJ.
            </div>
        </div>
    )
}

function ListTodosComponent(){

    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [
                        {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
                        {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate:targetDate},
                        {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate}
                ]


    return(
        <div className="ListTodosComponent">
            <h2>Things You Want To do!</h2>
            <div>
               <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>Is done?</td>
                            <td>targetDate</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                     </tr>
                                )
                            )
                        }

                    </tbody>
               </table>
            </div>
        </div>
    )
}

function HeaderComponent(){
    return(
        <div className="Header">
            Header<hr />
        </div>
    )
}

function FooterComponent(){
    return(
        <div className="Footer">
           <hr /> Footer
        </div>
    )
}

function LogoutComponent(){
    return(
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>
                Thank you for using our App.
            </div>
        </div>
    )
}