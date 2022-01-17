import React from 'react'
import { Container, Col , Row } from 'react-bootstrap'


export default function Library() {
    return (
        <>
         <h1 className="text-center text-white mb-4 bg-info border-bottom">Your Library </h1>
        <Container className="w-100 text-center mt-5">
           
        <Row className="mb-5">
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      </>
    )
}
