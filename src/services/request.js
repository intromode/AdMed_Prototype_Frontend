// export const request = () => {
//     return fetch(`http://localhost:5000/adMed/botConvo/botReply`)
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Unable to fetch the bots reply';
      
//       return json;
//     })
//   }










// export const request = (path, method, body) => {
//     // eslint-disable-next-line
//     return fetch(`${process.env.API_URL}${path}`, {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${getToken(store.getState())}`
//       },
//       body: body ? JSON.stringify(body) : null
//     })//better error message?
//       .then(res => ([res.ok, res.json()]))
//       .then(([ok, json]) => {
//         if(!ok) throw `unable to ${path}`;
        
//         return json;
//       });
//   };