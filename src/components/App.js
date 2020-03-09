import React, {useEffect, useState} from 'react';
import {Container, Row, Form, Col, Button} from 'react-bootstrap';
import fetchBotsReply from '../actions/BotsReplyAction';

function App() {
  //bot reply component here
  //probably dont need a fn here just the jsax
    
  const [conversation, setConversation] = useState([]);

  const chatBot = async data => {

    var result = await fetchBotsReply({userMsg: "Hello"});
    console.log(result)
    setConversation(conversation => [...conversation, result]);

  }

  useEffect(() => {
    chatBot("Hello")
  }, [])

  return (
    <main>
      <Container>
          <Form.Group >
            {conversation ? console.log(conversation): ''}
            {Object.keys(conversation).map((item, i) => (
              <Row key={i}>
                {console.log(item)}
                <Form.Label column md={2} >User</Form.Label>
                <Form.Label column md={10} >{conversation[item].text}</Form.Label>
              </Row>
            ))
            }
          </Form.Group>
      </Container>
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
    </main>
  );
}

export default App;