// import { StickersList } from "./Sticker/StickersList";
// import { Component } from "react";
// import stickerData from "../components/stickerData.json";

// export class App extends Component {
//   state = {
//     label: '',
//   };

//   handleChange = (newLabel) => {
//     this.setState({
//       label: newLabel,
//     });
//   };

//   render() {
//     return (
//       <>
//         <StickersList
//           handleChange={this.handleChange}
//           stickerData={stickerData}
//         />
//       </>
//     );
//   }
// }
// import React from 'react';
// import ConferenceRegistration from './Regestration/ConferenceRegistration';

// export const App = () => {
//   return (
//     <div>
//       <ConferenceRegistration />
//     </div>
//   );
// };
import React from 'react';
import { ToDoList } from './ToDo/ToDoList';
import { Component } from "react";
import initialTodos from './toDo.json'
export class App extends Component{
   state={
    toDos : initialTodos,
    filter:''
  }
  render(){
  return (
    <div>
      <ToDoList toDos={this.state.toDos}/>
    </div>
  );
}
};


