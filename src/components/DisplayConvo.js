import React, {useEffect, useState, PureComponent, Component} from 'react';
import {Container, Row, Form, Col, Button} from 'react-bootstrap';
import fetchBotsReply from '../actions/BotsReplyAction';
import { Scrollbars } from 'react-custom-scrollbars';

import './displayConvo.scss';

class DisplayConvo extends PureComponent {  
    state = {
    userMsg: '',
    botReply: '',
    isLoaded: false,
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
    <main >
      <div className="chat_window">
        <Container>
          <Form.Group className={"messages"}>
            {this.state.convo.map((reply, i) => (
              <Row key={i}>
                {console.log("HERE", reply.text.split(".").join(""))}
                <Form.Label column md={2} >Watson Assistant:</Form.Label>
                <Form.Label column md={10} style={{whiteSpace: "pre-line"}}>{reply.text.replace(/\[(.*?)\]/i, '').split(".").join("\n\n")}</Form.Label>
              </Row>
            ))}
          </Form.Group>
      </Container>
      <Container className="bottom_wrapper clearfix">
        <form >
          <div className="message_input_wrapper">
            <input className="message_input" placeholder="Type your message here..." type="text" name="userMsg" value={this.state.userMsg }onChange={this.onChange}></input>
          </div>
          <Form.Group className="send_message">
            <div className="icon"></div>
            <div onClick={this.onSubmit} className="text" >Send</div>
		      </Form.Group>
        </form>
      </Container>
      </div>
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