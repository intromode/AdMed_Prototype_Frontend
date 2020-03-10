import {Container, Row, Form, Col, Button} from 'react-bootstrap';
import { React } from 'react';


function GetUserInput() {
    //create onSubmit and onChange functionality
    return (
        <Container className="fixed-bottom">
        <Form.Group as={Row}>
        <Col md={10}>
            <Form.Control type="text" placeholder="Message..." />
        </Col>
        <Col md={2}>
            <Button block variant="primary" type="submit">
            Send
            </Button>
        </Col>
        </Form.Group>
        </Container>
    )
}

export default GetUserInput;



{/* <form onSubmit={onSubmit}>
<input type="text" name="userMsg" onChange={onChange}></input>
<button>Submit</button>
</form> */}