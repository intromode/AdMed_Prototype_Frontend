import React, {useEffect, useState, PureComponent, Component} from 'react';
import {Container, Row, Form, Col, Button} from 'react-bootstrap';
import fetchBotsReply from '../actions/BotsReplyAction';
import './DisplayConvo.css';



class DisplayConvo extends PureComponent {  
    state = {
    userMsg: '',
    botReply: '',
    convo: []
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  chatBot = async data => {
    var result = await fetchBotsReply({userMsg: data});
    console.log("result", result)
    this.setState({
      botReply: result,
      convo: [...this.state.convo, result]
    })
    console.log("convo", this.state)
    }


  onSubmit = event => {
    event.preventDefault();
    this.chatBot(this.state.userMsg)
  }

  render() {
    return (
      <main>
        <Container>
          <Form.Group>
            {this.state.convo.map((reply, i) => (
              <Row key={i}>
                <Form.Label column md={2} >Watson Assistant:</Form.Label>
                <Form.Label column md={10}>{reply.text}</Form.Label>
              </Row>
            ))
            }
          </Form.Group>
      </Container>
          <form onSubmit={this.onSubmit}>
          <input type="text" name="userMsg" value={this.state.userMsg }onChange={this.onChange}></input>
          <button>Send</button>
          </form>
      </main>
    );
  }
}
export default DisplayConvo;



{/* <div>
<ul>
  {this.state.convo.map((eachBotReply, i) => (
    <li key={i}>
      <h3>Watson Assistant:</h3>
      <p>{eachBotReply.text}</p>
    </li>
  ))}
</ul>
</div> */}