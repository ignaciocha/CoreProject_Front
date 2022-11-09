// import React from 'react'
// import SockJS from 'sockjs-client'
// import StompJs from '@stomp/stompjs';

// const Notifications = () => {

//     const client = new StompJs.Client({
//         broketURL: '/api/ws',
//         connectHeaders: {
//             login: 'user_id',
//             passcode: 'user_pw'
//         },
//         debug: function(str){
//             console.log(str);
//         },
//         reconnectDelay: 5000, //자동 재연결
//         heartbeatIncoming: 4000,
//         heartbeatOutgoing: 4000
//     });

//     client.onConnect = function(frame) {

//     }

//     client.onStompError = function(frame) {
//         console.log('Broker reported error: ' +frame.headers['message']);
//         console.log('Additional details' + frame.body)
//     }

//     client.activate();
//     // client.deactivate();

//     client.publish({
//         destination: '/topic/general',
//         body: 'Hello World!',
//         headers: {priority: '9'},
//     });

//     const subscription = client.subscribe('/queue/test', callback)
//   return (
//     <div>Notifications</div>
//   )
// }

// export default Notifications