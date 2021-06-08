import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


const App = () => {

  const [toys, setToys] = useState([])
  const [display, setDisplay] = useState(false)

  const handleClick = () => {
    let newBoolean = !display
    setDisplay(newBoolean)
  }

  useEffect(
    () => {
      fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(toysData => setToys(toysData))
    }, []
  )

  const handleDonateBtn = (id) => {
    const updatedToys = toys.filter((toy) => {
      return toy.id !== id
    })
    setToys(updatedToys)
  }

  const addNewToy = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const src = e.target.image.value;

    const newToy = {
      name: name,
      image: src,
      likes: 0,
    }

    const configObj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    }

    fetch('http://localhost:5000/toys', configObj)
      .then(res => res.json())
      .then(toyData => setToys(prevState => [...prevState, toyData]))
  }

  return (
    <>
      <Header />
      { display
        ?
        <ToyForm addNewToy={addNewToy} />
        :
        null
      }
      <div className="buttonContainer">
        <button onClick={handleClick}> Add a Toy </button>
      </div>
      <ToyContainer handleDonateBtn={handleDonateBtn} toys={toys} />
    </>
  );

}

export default App;
