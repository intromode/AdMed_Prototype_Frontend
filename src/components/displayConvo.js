import React, {useEffect, useState} from 'react';
import {Container, Row, Form, Col, Button} from 'react-bootstrap';
import fetchBotsReply from '../actions/BotsReplyAction';



//this will turn into a component that gets the information from state, maps through, and displays
export default function displayConvo() {  
  const [conversation, setConversation] = useState([]);

  //this is technically the action 
  const chatBot = async data => {
    var result = await fetchBotsReply({userMsg: data});
    console.log(result)
    setConversation(conversation => [...conversation, result]);//where is conversation being originally set, how can it be passed if not exist
  }

  useEffect(() => {
    chatBot( "what are the adverse effects of chatex for mdd") //pass user input eventually
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