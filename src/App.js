import './App.css';
import Navbar from './components/nav/Navbar';
import React from 'react';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import cardImage from './katie-zaferes.png';
import data from './data';

function App() {

const individualData = data.map(el => {
  return <Card
    key={el.id} 
    el={el}
    // title={el.title}
    // img={el.coverImg}
    // rating={el.stats.rating}
    // reviewCount={el.stats.reviewCount}
    // country={el.location}
    // price={el.price}
    // openSpots = {el.openSpots}
  />
})
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='card-group'>
      {individualData}
      </div>
      {/* <Card
      img={cardImage}
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life Lessons with katie"
      price={136}
      /> */}
    </div>
  );
}

export default App;
