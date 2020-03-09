import React, {useEffect, useState} from 'react';
import {Container, Row, Form, Col, Button} from 'react-bootstrap';
import fetchBotsReply from '../actions/BotsReplyAction';

function App() {
    
  const [conversation, setConversation] = useState([]);

  const chatBot = async data => {

    var result = await fetchBotsReply({userMsg: "what are the adverse effects of chatex"}); //shouldnt data just be 'data' here
    console.log(result)
    setConversation(conversation => [...conversation, result]);//where is conversation being originally set, how can it be passed if not exist

  }

  //when component mounts/updates, call the chatbot with Hello. Should just be for initial load?
  useEffect(() => {
    chatBot("Hello") 
  }, [])

  return (
    <main>
      <Container>
          <Form.Group >
            {conversation ? console.log("conversation", conversation): ''}
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