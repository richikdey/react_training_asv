import React from 'react';
import ReactDOM from 'react-dom'

import FirstFriend from './FirstComponent';
import SecondFriend from './SecondComponent';
import Name from './components/Name';
import Comment from './comment/comment';
import LifeCycleComponent from './LifecycleComponent/LifeCycleComponent';
import FormComponent from './FormComponent/FormComponent';
import ControlledComponent from './ControlledComponent/ControlledComponent';
import RemoteData from './APIComponent/RemoteData';


var position = document.getElementById("rootcomponent")
// var position2 = document.getElementById("container2")
 var position3 = document.getElementById("lifecycle")

// ReactDOM.render(
//     <div>
//   <FirstFriend location = "Chennai">Richik</FirstFriend> 
//   <Name fcolor="black">R</Name>
//   <Name fcolor="blue">I</Name>
//   <Name fcolor="grey">C</Name> 
//   <Name fcolor="yellow">K</Name>
//   </div> ,position)

//   ReactDOM.render(
//      <SecondFriend proffesion="Developer">Rickz</SecondFriend>,position2)



    //  ReactDOM.render(
    //      <div>
    //          <Names1 first="Richik"></Names1>
    //          <CommentText>SuperMan</CommentText>
    //          <Action/>
    //      </div>,position2)
    //   ReactDOM.render(
    //     <div>
    //         <Names1 first="Rick"></Names1>
    //         <CommentText>BatMan</CommentText>
    //         <Action/>
    //     </div>,position)
   ReactDOM.render(
    <div>
        <Comment/>
    </div>,position)
   
    ReactDOM.render(
    <div>
        <LifeCycleComponent></LifeCycleComponent>
        <FormComponent></FormComponent>
        <ControlledComponent></ControlledComponent>
        <RemoteData></RemoteData>
    </div>,position3)
