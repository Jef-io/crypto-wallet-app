import React from 'react';
import '../css/cryptos.css';
import Title from '../components/Title';
import TabCryptos from '../components/tabs/TabCryptos';
import CustomizedButton from '../components/Button';

export default function Cryptos () {

  return (
    <main className="Cryptos">
      <header>
        <div></div>
        <CustomizedButton value="Ajouter une cryptomonnaie" color="blue"/>
      </header>
      <section>
        <Title value="Cryptos" variant="1"/>
        <article>
          <TabCryptos/>
          <CustomizedButton value="ajouter une cryptomonnaie" color="blue"/>
        </article>
      </section>
    </main>
  );
}