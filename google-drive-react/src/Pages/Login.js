import React from 'react'
import {Container, Card, CardHeader, CardBody, FormGroup, Input, Form, Button} from 'reactstrap'

const Login = () => {
  return (
    <div>
      <Container>
            <Card>
                <CardHeader>
                    <h3>Welcome, Please Login</h3>
                </CardHeader>
                <CardBody>
                    <Form>
                        {/* Email Field */}
                        <FormGroup>
                            <Input type = "email" placeholder='Please Enter your Email' id = "email"/>
                        </FormGroup>
                        {/* password field */}
                        <FormGroup>
                            <Input type = "password" placeholder='Please Enter your password' id = "password"/>
                        </FormGroup>

                        <Container className='text-center'>
                            <Button color = "dark">Login</Button>
                            <Button color = "Secondary" type = 'reset'className='ms-2'>Reset</Button>
                            <Button onClick={<Login />}>SignUp</Button>
                        </Container>
                    </Form>

                </CardBody>
            </Card>
        </Container>
    </div>
  )
}

export default Login
