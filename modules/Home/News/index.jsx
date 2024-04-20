import React from 'react'
import Header from './components/Header';
import Description from './components/Description.jsx';
import CardsContainer from './components/CardsContainer';

const index = () => {
  return (
    <div className='text-center p-10  '>
      <Header header="Restez informé" />
      <Description description="Découvrez les dernières nouvelles de CDN, nos événements à venir et les opportunités à ne pas manquer." />
      <CardsContainer />
    </div>
  );
}

export default index