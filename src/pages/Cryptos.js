import React from 'react';
import '../css/cryptos.css';
import Title from '../components/Title';
import TabCryptos from '../components/TabCryptos';
import CustomizedButton from '../components/Button';

export default function Cryptos () {

  return (
    <main className="Cryptos">
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