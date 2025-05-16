import { useNavigate, useParams } from "react-router-dom"
import {createTodoApi, retrieveTodoApi, updateTodoApi} from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import moment from "moment" //{named export}가 아니라 default export임(중괄호 안붙인다.)


export default function TodoComponenet(){

    const{id} = useParams()

    const authContext = useAuth()
    const username = authContext.username

    // 필드영역역
    const[description, setDescription] = useState('')

    const[targetDate, setTargetDate] = useState('')
    
    //수정완료하고 리스트 페이지로 이동하기 위한 navigate
    const navigate = useNavigate()

    // id값이 변경될때에만 새로고침 되도록
    useEffect(
        () => retrieveTodos(), [id]
    )

    function retrieveTodos(){
        if(id != -1){
            retrieveTodoApi(username,id)
                .then(response => {
                    console.log(response)
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                })
                .catch(error=>console.log(error))
        }
    }

    function onSubmit(values){
        console.log(values)

        const todo = {
            id: id, 
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        console.log(todo)

        if(id == -1 ){
            createTodoApi(username,todo)
                .then(response => {
                    navigate('/todos')
                })
                .catch(error=>console.log(error))

        }else{
            updateTodoApi(username,id,todo)
                .then(response => {
                    navigate('/todos')
                })
                .catch(error=>console.log(error))
        }

    }

    // 검증
    function validate(values){
        let errors ={
            // description: "Enter a valid Description",
            // targetDate: "Enter a valid target date"
        }

        if(values.description.length<5) {
            errors.description = '최소 5글자 이상 입력하세요'
        }
        
        if(values.targetDate == null || values.targetDate=='' || !moment(values.targetDate).isValid()) {
            errors.targetDate = '목표날짜를 입력하십시오'
        }    

        console.log(values)
        return errors
    }

    return(
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description,targetDate}} 
                        enableReinitialize={true}
                        onSubmit={onSubmit}
                        validate = {validate}
                        // 제출 버튼이 누르고 검증
                        validateOnChange ={false} 
                        validateOnBlur = {false}
                >
                    {
                        (props) => (
                            <Form>

                                <ErrorMessage 
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />

                                
                                <ErrorMessage 
                                    name="targetDate"
                                    component="div"
                                    className="alert alert-warning"
                                />

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