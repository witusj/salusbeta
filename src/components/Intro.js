import React from 'react';
import './Intro.css';

const Intro = () => {
  return(
    <div class="container-fluid intro-bg">

      <div class="row intro-subtitle align-items-end">
       <div class="col">
        <h2>Wat zijn sanctielanden?</h2>
       </div>
      </div>

      <div class="row justify-content-center">

       <div class="col-6">
         <p>
         Sancties zijn bedoeld om het gedrag te beïnvloeden van
         landen of regimes, bedrijven en/of personen die oorlog voeren,
         mensenrechten schenden of een bedreiging vormen voor internationale
         vrede en veiligheid. De Verenigde Naties (VN), de Europese Unie (EU)
         en de Verenigde Staten (VS) beperken het betalings- en handelsverkeer
         met verschillende landen. Financiële instellingen moeten zich houden
         aan de wettelijke sancties. De onderliggende Nederlandse wetgeving is
         de Sanctiewet (SW).
         </p>
         <br/>
         <h5>Sanctielanden</h5>
         <p>Afghanistan, Wit-Rusland , Birma/Myanmar,
         Centraal-Afrikaanse Republiek, Cuba, Dem. Republic of Congo,
         Egypte, Eritrea, Guinee (Conakry), Guinee Bissau, Irak, Iran,
         Ivoorkust, Libanon, Liberia, Libië, Noord Korea, Oekraïne,
         Russische Federatie, Soedan, Somalië, Syrië, Tunesië, Zimbabwe,
         Zuid-Soedan
         </p>
       </div>

      </div>

    </div>
  )
};

export default Intro;
