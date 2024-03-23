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
// import React, { Component } from 'react';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './ContactForm/Filter';
// import ContactList from './ContactForm/ContactList';
// import Notification from './ContactForm/Notification';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//     name: '',
//     number: '',
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const { contacts, name, number } = this.state;

//     if (contacts.some((contact) => contact.name === name)) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     const newContact = {
//       id: `id-${Date.now()}`,
//       name,
//       number,
//     };

//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact],
//       name: '',
//       number: '',
//     }));
//   };

//   handleDelete = (id) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== id),
//     }));
//   };

//   render() {
//     const { contacts, filter, name, number } = this.state;

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm
//           name={name}
//           number={number}
//           onChange={this.handleChange}
//           onSubmit={this.handleSubmit}
//         />

//         <h2>Contacts</h2>
//         {contacts.length === 0 ? (
//           <Notification message="No contacts yet. Add some!" />
//         ) : (
//           <>
//             <Filter value={filter} onChange={this.handleChange} />
//             <ContactList contacts={contacts} filter={filter} onDelete={this.handleDelete} />
//           </>
//         )}
//       </div>
//     );
//   }
// }
// import React from 'react';
// import { ToDoList } from './ToDo/ToDoList';
// import styles from './App.module.css';
 
// export function App() {
//   return (
//     <div className={styles.appContainer}>
//       <h1>To-Do List</h1>
//       <ToDoList />
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import Modal from './Modal/Modal';
// import { Button } from './Modal/Button';

// export function App() {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Your App</h1>
//       <Button onClick={openModal}>Open Modal</Button>

//       {isModalOpen && (
//         <Modal>
//           <>
//             <h2>Modal Content</h2>
//             <p>XXXXXXXXXXXXXXXXXXXXX</p>
//             <Button onClick={closeModal}>Close Modal</Button>
//           </>
//         </Modal>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import Searchbar from './Search/Searchbar';
// import ImageGallery from './Search/ImageGallery';
// import Button from './Search/Button';
// import Loader from './Search/Loader';
// import Modal from './Search/Modal';


// const API_KEY = '39207240-5c487a84c917432aa28d0bb48';
// const BASE_URL = 'https://pixabay.com/api/';

// export const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     setImages([]);
//     setPage(1);
//   };

//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const handleImageClick = (largeImageURL) => {
//     setSelectedImage(largeImageURL);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };

//   useEffect(() => {
//     if (!searchQuery) return;

//     const fetchImages = async () => {
//       setIsLoading(true);

//       try {
//         const response = await fetch(
//           `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//         );

//         if (!response.ok) {
//           throw new Error('Failed to fetch images');
//         }

//         const data = await response.json();
//         setImages((prevImages) => [...prevImages, ...data.hits]);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchImages();
//   }, [searchQuery, page]);

//   return (
//     <div>
//       <Searchbar onSubmit={handleSearch} />
//       <ImageGallery images={images} onImageClick={handleImageClick} />
//       {isLoading && <Loader />}
//       {images.length > 0 && !isLoading && <Button onLoadMore={handleLoadMore} />}
//       {selectedImage && <Modal imageURL={selectedImage} onClose={handleCloseModal} />}
//     </div>
//   );
// };
// import React from 'react';
// import RegistrationForm from './RegistrationForm/RegistrationForm';

// export function App() {
//   return (
//     <div>
//       <RegistrationForm />
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import './App.module.css';
// import Section from './Feedback/Section';
// import Statistics from './Feedback/Statistics';
// import FeedbackOptions from './Feedback/FeedbackOptions';
// import Notification from './Feedback/Notification';

// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const options = ['good', 'neutral', 'bad'];
//   const [customFeedbacks, setCustomFeedbacks] = useState([]);
 
//   const handleLeaveFeedback = option => {
//     switch (option) {
//       case 'good':
//         setGood(prevState => prevState + 1);
//         break;
//       case 'neutral':
//         setNeutral(prevState => prevState + 1);
//         break;
//       case 'bad':
//         setBad(prevState => prevState + 1);
//         break;
//       default:
      
//         setCustomFeedbacks(prevState => [...prevState, option]);
//         break;
//     }
//   };

//   const countTotalFeedback = () => good + neutral + bad;

//   const countPositiveFeedbackPercentage = () => {
//     const total = countTotalFeedback();
//     return total > 0 ? Math.round((good / total) * 100) : 0;
//   };

//   const totalFeedback = countTotalFeedback();
//   const positivePercentage = countPositiveFeedbackPercentage();

//   return (
//     <div>
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback} />
//       </Section>

//       <Section title="Statistics">
//         {totalFeedback > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={totalFeedback}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     </div>
//   );
// };

// import React from 'react';
// import { Form } from './RegistrationForm/Form'; 
// import './App.module.css';

// export const App = () => {
//   return (
//     <div className="app">
//       <h1>Form App</h1>
//       <Form />
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import Clock from './Clock/Clock';
// import './App.module.css';

// export const App = () => {
//   const [showClock, setShowClock] = useState(true);

//   const toggleClock = () => {
//     setShowClock(prevShowClock => !prevShowClock);
//   };

//   return (
//     <div className="app">
//       <h1>React Clock App</h1>
//       <button onClick={toggleClock}>{showClock ? 'Hide Clock' : 'Show Clock'}</button>
//       {showClock && <Clock />}
//     </div>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactForm/ContactList';
// import Filter from './ContactForm/Filter';
// import styles from './App.module.css'; 


// export const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const storedContacts = JSON.parse(localStorage.getItem('contacts'));
//     if (storedContacts) setContacts(storedContacts);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = newContact => {
//     if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
//       alert(`${newContact.name} is already in contacts!`);
//       return;
//     }
//     setContacts(prevContacts => [...prevContacts, newContact]);
//   };

//   const deleteContact = id => {
//     setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
//   };

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={styles.app}>
//       <h1>Phonebook</h1>
//       <div className={styles.container}>
//         <ContactForm addContact={addContact} />
        
//         <h2>Contacts</h2>
//         <Filter filter={filter} setFilter={setFilter} />
//         <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
//       </div>
//     </div>
//   );
// };
import React, { createContext } from "react";
import ChildComponent from "./MyComponent/ChildComponent"; 

export const MyContext = createContext("default value");


export const App = () => {
  return (
    <div>
      <h1>Context Example</h1>
      <MyContext.Provider value="custom value">
        <ChildComponent />
      </MyContext.Provider>
    </div>
  );
};
 