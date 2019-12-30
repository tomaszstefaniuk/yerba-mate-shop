import React from 'react';
import styles from './HowToUseYerba.scss';


class HowToUseYerba extends React.Component {
  render() {
    return (
      <div className='how-to-use-yerba'>
        <h1>Jak przygotować yerba mate</h1>
        <h2>Co potrzebujemy?</h2>
        <p><b><em>Matero</em></b> - np. naczynie Palo Santo, które dodaje
          dodatkowy aromat do smaku yerby</p>
        <p><b><em>Bombilla</em></b> - aby pić matę bez fusów</p>
        <p><b><em>Yeba mate</em></b> - czyli nasz susz z ostrokrzewu
          paragwajskiego</p>
        <p><b><em>Woda</em></b> - w temperaturze 60-80 stopni</p>
        <h2>Jak przygotować</h2>
        <p>1. Wsypujemy yerbę do matero (<em>w ilości według uznania</em>) tak,
          aby zostawić miejsce na bombillę - w tym celu najlepiej trzymać matero
          pod kątem do momentu pierwszego zalania</p>
        <p>2. Zalewamy susz odrobiną zimnej wody</p>
        <p>3. Wkładamy bombillę</p>
        <p>4. Powoli zalewamy mate ciepłą wodą po czym odczekujemy około 5min</p>
        <img src="https://i.imgur.com/jO7KgMM.jpg" alt="Instrukcja zalania yerby"/>
        <h2>Na co zwrócić uwagę / wyjaśnienia</h2>
        <p><b><em>Temperatura wody</em></b> - Nigdy nie zalewaj mate temperaturą
          powyżej 80 stopni. Zepsuje to smak yerby oraz straci ona wiele cennych
          właściwości.<br /> Ponadto tak gorąca woda wpływa bardzo niekorzystnie
          na nasz organizm np. prowadzi do uszkodzeń termicznych nabłonka.</p>
        <p><b><em>Ustawienie bombilli</em></b> - nie mieszaj suszu rurką –
          sprawia to, że otwory zatykają się, a fusy wlatują do środka. Raz
          umiejscowiona bombilla ma tak zostać do ostatniego zalania</p>
        <p><b><em>Zahartowanie zimną wodą</em></b> - Dobrą praktyką jest wstępne
          zalanie suszu zimną wodą, takie zahartowanie go zapobiega przed utratą
          walorów odżywczych oraz zbyt szybkim uwalnianiem aromatu.</p>
      </div>
    );
  }
}


export default HowToUseYerba;
