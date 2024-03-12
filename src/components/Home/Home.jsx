import React, { useState } from 'react';
import ContainerListPets from '../ContainerListPets/ContainerListPets';
import OfertasActivas from '../OfertasActivas/OfertasActivas';
import NavbarLateral from '../NavbarLateral/NavbarLateral';

const Home = ({ emailUsuario }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionMenu = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'inicio':
        return <ContainerListPets />;
      case 'ofertas-activas':
        return <OfertasActivas />;
      default:
        return <ContainerListPets />;
    }
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 content-right">
          {renderContent()}
        </div>
        <div className="col-12">
          <NavbarLateral handleOptionMenu={handleOptionMenu} emailUsuario={emailUsuario} />
        </div>
      </div>
    </div>
  );
}

export default Home;
