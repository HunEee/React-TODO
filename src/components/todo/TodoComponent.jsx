import { useParams } from "react-router-dom"
import {retrieveTodoApi} from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"

export default function TodoComponenet(){

    const{id} = useParams()

    const authContext = useAuth()
    const username = authContext.username

    // 필드영역역
    const[description, setDescription] = useState('')

    // id값이 변경될때에만 새로고침 되도록
    useEffect(
        () => retrieveTodos(), [id]
    )

    function retrieveTodos(){
        retrieveTodoApi(username,id)
            .then(response => {
                console.log(response)
                setDescription(response.data.description)
            })
            .catch(error=>console.log(error))
    }

    return(
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                description: {description}
            </div>
        </div>
    )
}