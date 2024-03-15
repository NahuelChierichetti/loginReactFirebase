import React, { useState } from 'react';
import ContainerListPets from '../ContainerListPets/ContainerListPets';
import Perfil from '../Perfil/Perfil';
import NavbarLateral from '../NavbarLateral/NavbarLateral';

const Home = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 content-right">
          <ContainerListPets />
        </div>
        <div className="col-12">
          <NavbarLateral/>
        </div>
      </div>
    </div>
  );
}

export default Home;
