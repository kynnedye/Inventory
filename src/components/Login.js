import React, {useState} from 'react'
import { Card,Nav, Container,Form , Button} from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'

export default function Login() {

    const [login, setLogin] = useState(true)

    const toggle = ()=>{
        setLogin(prev => !prev)
    }

    const LoginForm = ()=>{
        return(
            <Form>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" autoComplete="off" placeholder="Password" />
                    </Form.Group>
                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
        )
    }

    const SignupForm = () =>{
        return (
            
            <Form>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="Name.." />
              
            </Form.Group>   
            <Form.Group className="mb-3" controlId="lasttName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder=" Last Name.." />
              
            </Form.Group>   
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" autoComplete="off" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter Password" autoComplete="off"/>
            </Form.Group>
       
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        )
    }

    return (
        
        <Container className="d-flex flex-column align-items-center lg-container ">
                <Card className="login-card">
               <Card.Header >
               <Nav >
                    <Nav.Item  className="nav">
                             <Button className="btn" disabled={login ? true : false} className={login ? "accent" : "light"} onClick={toggle}>Login</Button>  
                    </Nav.Item>
                    <Nav.Item  className="nav">
                     <Button className={login ? "light" : "accent"} disabled={login ? false : true}  onClick={toggle}>Sign-up</Button>
                    </Nav.Item>
                 </Nav>   
               </Card.Header>
               <Card.Body>
                  
                    {login ? <LoginForm/> : <SignupForm/>}

                 
               </Card.Body>
           </Card>
        </Container>
       
       
    )
}
