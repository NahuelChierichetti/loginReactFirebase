import React, { useState } from 'react';
import Usuarios from '../Usuarios/Usuarios';
import OfertasActivas from '../OfertasActivas/OfertasActivas';
import NavbarLateral from '../NavbarLateral/NavbarLateral';

const Home = ({ emailUsuario }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionMenu = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'usuarios':
        return <Usuarios />;
      case 'ofertas-activas':
        return <OfertasActivas />;
      default:
        return <h2 className='text-center'>Hola</h2>;
    }
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-2">
          <NavbarLateral handleOptionMenu={handleOptionMenu} emailUsuario={emailUsuario} />
        </div>
        <div className="col-md-10 content-right">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Home;
