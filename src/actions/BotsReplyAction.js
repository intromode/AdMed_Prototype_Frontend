// import React, { useState, useEffect } from 'react';
// import propTypes from 'prop-types';

export default async (params) => {

    const data = {userMessage: params.userMsg};

    const result = await fetch('http://localhost:5000/adMed/botConvo/botReply',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
      }).then(res => {
        if(res.status >= 200 && res.status <= 299){
          return res.json();
        }else{
          console.log(res.statusText);
        }
      }).then((json) => {
        console.log(json)
        return json;
        // setConversation(conversation => [...conversation, json]);
      });
  //eventually we will dispatch the results into the redux store to save with return function(dispatch) and wrap the code within that 
      return result;
};

