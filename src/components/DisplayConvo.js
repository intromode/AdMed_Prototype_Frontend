import React, {useEffect, useRef, useState, PureComponent} from 'react';
import {Container, Row, Form, Col, Button} from 'react-bootstrap';
import fetchBotsReply from '../actions/BotsReplyAction';


import './displayConvo.scss';

class DisplayConvo extends PureComponent {  
    state = {
    userMsg: '',
    botReply: '',
    isLoading: false,
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
      isLoading: false,
      convo: [...this.state.convo, result.text.replace(/\[(.*?)\]/i, '').split(".").join("\n\n")]
    })
    
    console.log("state", this.state)
    }


  onSubmit = event => {
    event.preventDefault();
    this.setState({
      isLoading: true,
      convo: [...this.state.convo, this.state.userMsg]
    })
    this.chatBot(this.state.userMsg)
  }

  render() {
    return (
    <main >
      <div className="chat_window">
        <Container>
        {this.state.isLoading
        ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        : <Form.Group className={"messages"}>
            {this.state.convo.map((reply, i) => (
              <Row key={i}>
                {i%2 === 0 
                ? <Form.Label column md={2} >User:</Form.Label>
                : <Form.Label column md={2} >Watson Assistant:</Form.Label>}
                <Form.Label column md={10} style={{whiteSpace: "pre-line"}}>{reply}</Form.Label>
              </Row>
        ))}
          </Form.Group> }
      </Container>
      <Container className="bottom_wrapper clearfix">
        <form method="post" onSubmit={this.onSubmit}>
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
