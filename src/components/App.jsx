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
// import React from 'react';
// import { ToDoList } from './ToDo/ToDoList';
// import { Component } from "react";
// import initialTodos from './toDo.json'
// export class App extends Component{
//    state={
//     toDos : initialTodos,
//     filter:''
//   }
//   render(){
//   return (
//     <div>
//       <ToDoList toDos={this.state.toDos}/>
//     </div>
//   );
// }
// };
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './ContactForm/Filter';
import ContactList from './ContactForm/ContactList';
import Notification from './ContactForm/Notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { contacts, name, number } = this.state;

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: `id-${Date.now()}`,
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter, name, number } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        {contacts.length === 0 ? (
          <Notification message="No contacts yet. Add some!" />
        ) : (
          <>
            <Filter value={filter} onChange={this.handleChange} />
            <ContactList contacts={contacts} filter={filter} onDelete={this.handleDelete} />
          </>
        )}
      </div>
    );
  }
}


