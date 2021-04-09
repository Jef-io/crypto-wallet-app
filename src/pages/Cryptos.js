import React from 'react';
import '../css/cryptos.css';
import Title from '../components/Title';
import TabCryptos from '../components/TabCryptos';
import CustomizedButton from '../components/Button';

export default function Cryptos () {

  return (
    <main className="Cryptos">
        <Title value="Cryptos" variant="1"/>
        <section>
          <TabCryptos/>
          <CustomizedButton value="ajouter une cryptomonnaie" color="blue"/>
        </section>
        
    </main>
  );
}