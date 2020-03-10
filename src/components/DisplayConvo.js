import React, {useEffect, useState, PureComponent, Component} from 'react';
import {Container, Row, Form, Col, Button} from 'react-bootstrap';
import fetchBotsReply from '../actions/BotsReplyAction';



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
        <div>
          <ul>
            {this.state.convo.map((eachBotReply, i) => (
              <li key={i}>
                <h3>Watson Assistant:</h3>
                <p>{eachBotReply.text}</p>
              </li>
            ))}
          </ul>
        </div>

          <form onSubmit={this.onSubmit}>
          <input type="text" name="userMsg" value={this.state.userMsg }onChange={this.onChange}></input>
          <button>Send</button>
          </form>
      </main>
    );
  }
}
export default DisplayConvo;

// {/* <Container>
// <Form.Group>
//   {/* {conversation ? console.log("conversation", conversation): ''} */}
//   {Object.keys(this.state.convo).map((item, i) => (
//     <Row key={i}>
//       {console.log("item", item, i)}
//       {/* update to have columns for both user and bot replies */}
//       <Form.Label column md={2} >Watson Assistant:</Form.Label>
//       <Form.Label column md={10} >{this.state.convo[item].text}</Form.Label>
//     </Row>
//   ))
//   }
// </Form.Group> */}
// </Container>
