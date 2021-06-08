import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  const { toys, handleDonateBtn } = props

  const renderToyCards = () => {
    return toys.map((toy, idx) => {
      return <ToyCard handleDonateBtn={handleDonateBtn} key={idx} toy={toy} />
    })
  }

  return (
    <div id="toy-collection">
      {renderToyCards()}
    </div>
  );
}

export default ToyContainer;
