import React from 'react';
import './Header.css';

const Header = () => {
  return(
    <div class="container-fluid header-bg header-darken-overlay">

      <div class="row align-items-center header-title">
       <div class="col">
        <h1>Salus Check</h1>
       </div>
      </div>

      <div class="row header-subtitle">
       <div class="col">
        <h2>Veilig handelen met sanctielanden</h2>
       </div>
      </div>

      <div class="row justify-content-center">

       <div class="col-6">
         <p>Doet u handel met sanctielanden?
         Dan bent u verplicht om een check te doen op
         PEP- en sanctielijsten.
         Saluscheck verzorgt deze checks voor u waardoor
         u meer tijd over houdt en de risicos inperkt.
         </p>
       </div>

      </div>

    </div>
  )
};

export default Header;
