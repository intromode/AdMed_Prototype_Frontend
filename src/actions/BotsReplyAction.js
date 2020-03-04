import { React } from 'react';
import propTypes from 'prop-types';


export const getBotsReply = () => {
  return fetch('http://localhost:5000/adMed/botConvo/botReply')
  .then(res => ([res.ok, res.json()]))
  .then(([ok, json]) => {
    if(!ok) throw 'Unable to fetch the bots reply';
    
    return json;
  })
  //.then structure the json file to have the sessionID and the bots reply 
}

export function FetchBotsReply() {
  //eventually we will dispatch the results into the redux store to save with return function(dispatch) and wrap the code within that 
  return getBotsReply()
  .then(res => console.log(res.text))
}

export function PostBotsReply(botsReply) {
  return (
    <>
    <p>{botReply}</p>
    </>
  )
}

PostBotsReply.propTypes = {
  botsReply: propTypes.string.isRequired
}
