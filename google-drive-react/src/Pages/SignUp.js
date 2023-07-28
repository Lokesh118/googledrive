// import { Card, CardHeader, Container, FormGroup, Input } from '@mui/material'
import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input } from 'reactstrap'
import { signUp } from '../services/userService'
import Login from './Login'

const SignUp = () => {

    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        reEnteredPassword:'',
    })

    // useEffect(() => {
    //     console.log(data);
    // },[data])

    const [error, setError] = useState({
        errors:{},
        isError:false
    })

    //handle change

    const handleChange = (event,property) => {
        setData({...data, [property]:event.target.value})
        // console.log(data);
    }

    //reseting the Form
    const resetData = () => {
        setData({
            name:'',
            email:'',
            password:'',
            reEnteredPassword:'',
        })
    }

    //submitting the form
    const submitForm = (event)=>{
        event.preventDefault();
        console.log(data);
        //data validate

        //call backend api for authentication
        signUp(data).then((response) => {
            console.log(response);
            console.log("success log");
        }).catch((error) => {
            console.log(error);
            console.log("error log");
        })
    }
    return (
        <div>
            {/* {JSON.stringify} */}
            <Container>
                
                <Card>
                    <CardHeader>
                        <h3>Welcome, Please Register</h3>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={submitForm}>
                            {/* Name Field */}
                            <FormGroup>
                                <Input type = "text" 
                                placeholder='Please enter your name' 
                                id = "name"
                                onChange={(e) => handleChange(e,'name')}
                                value = {data.name}/>
                            </FormGroup>
                            {/* Email Field */}
                            <FormGroup>
                                <Input type = "email" 
                                placeholder='Please enter your email' 
                                id = "email"
                                onChange={(e) => handleChange(e,'email')}
                                value = {data.email}/>
                            </FormGroup>
                            {/* password field */}
                            <FormGroup>
                                <Input type = "password" 
                                placeholder='Please enter your password' 
                                id = "password"
                                onChange={(e) => handleChange(e,'password')}
                                value = {data.password}/>
                            </FormGroup>

                            {/* re enter password */}
                            <FormGroup>
                                <Input type = "password" 
                                placeholder='Please re-enter your password' 
                                id = "password"
                                onChange={(e) => handleChange(e,'reEnteredPassword')}
                                value = {data.reEnteredPassword}/>
                            </FormGroup>

                            <Container className='text-center'>
                                <Button color = "dark">Register</Button>
                                <Button color = "Secondary" 
                                type = 'reset'
                                className='ms-2'
                                onClick={resetData}>Reset</Button>
                                <Button onClick={<Login />}>Login</Button>
                            </Container>
                        </Form>

                    </CardBody>
                </Card>
            </Container>
        </div>
  )
}

export default SignUp