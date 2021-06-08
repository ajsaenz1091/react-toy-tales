import React, { useState } from 'react';

const ToyCard = (props) => {


  const { id, image, name, likes } = props.toy

  const [toyLikes, setToyLikes] = useState(likes)

  const handleLikes = () => {
    setToyLikes(toyLikes + 1)
  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{toyLikes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {'<3'}</button>
      <button onClick={() => { props.handleDonateBtn(id) }} className="del-btn">Donate to GoodWill</button>
    </div>
  );

}

export default ToyCard;
