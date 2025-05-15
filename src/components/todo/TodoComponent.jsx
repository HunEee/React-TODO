import { useParams } from "react-router-dom"
import {retrieveTodoApi} from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { Field, Form, Formik } from "formik"

export default function TodoComponenet(){

    const{id} = useParams()

    const authContext = useAuth()
    const username = authContext.username

    // 필드영역역
    const[description, setDescription] = useState('')

    const[targetDate, setTargetDate] = useState('')
    

    // id값이 변경될때에만 새로고침 되도록
    useEffect(
        () => retrieveTodos(), [id]
    )

    function retrieveTodos(){
        retrieveTodoApi(username,id)
            .then(response => {
                console.log(response)
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            })
            .catch(error=>console.log(error))
    }

    function onSubmit(values){
        console.log(values)
    }

    return(
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description,targetDate}} 
                        enableReinitialize={true}
                        onSubmit={onSubmit}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <lebel>Description</lebel>
                                    <Field type="text" className="form-control" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <lebel>Target Date</lebel>
                                    <Field type="date" className="form-control" name="targetDate" ></Field>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form> 
                        )
                    }   
                </Formik>
            </div>
        </div>
    )
}