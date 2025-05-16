import {useEffect, useState } from "react"
import {retrieveAllTodosForUsernameApi, deleteTodoApi} from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

export default function ListTodosComponent(){

    const today = new Date()

    //AuthContext 에서 받아오는 username를 세팅하기 위해
    const authContext = useAuth()
    const username = authContext.username

    // 특정 함수에서 페이지 이동을 위함
    const navgate = useNavigate()

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    // 리스트를 가져오기 위한 state
    const[todos,setTodos] = useState([])
    // 삭제 알림을 위한 state
    const[message,setMessage] = useState(null)

    // const todos = [
    //                     // {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
    //                     // {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate:targetDate},
    //                     // {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate}
    //             ]

    // ,[] 을 붙여야 로드할때 렌더링함 
    useEffect(() => refreshTodos(),[])

    // 전체 Todo 리스트 API
    function refreshTodos(){
        retrieveAllTodosForUsernameApi(username)
            .then(response => {
                console.log(response)
                setTodos(response.data)   
            })
            .catch(error=>console.log(error))
    }

    // delete API
    function deleteTodo(id){
        console.log('clicked'+id)
        deleteTodoApi(username,id)
            .then(
                () => {
                    setMessage(`Delete of todo with id = ${id} successful`)
                    refreshTodos()
            })
            .catch(error => console.log(error))
    }

    //update API
    function updateTodo(id){
        console.log('clicked'+id)
        // 수정 페이지 이동
        navgate(`/todo/${id}`)
    }

    function addNewTodo(){
        navgate('/todo/-1')
    }


    return(
        <div className="container">
            <h1>Things You Want To Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
               <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is done?</th>
                            <th>TargetDate</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={()=>updateTodo(todo.id)}>Update</button></td>
                                     </tr>
                                )
                            )
                        }

                    </tbody>
               </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo} >Add New Todo</div>
        </div>
    )
}