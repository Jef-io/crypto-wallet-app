import React from 'react';
import '../css/trading.css';
import Title from '../components/Title'
import Deal from '../components/Deal'

export default function Trading () {

  return (
    <main className="Trading">
        <header>
          <label>Montant total du portefeuille en euros : </label>
          <h4>110000000 €</h4>
        </header>
        <section>
          <Title value="Acheter" variant="2" color="#e25555"/>
          <Deal buttonName="Acheter" buttonColor="secondary"/>
        </section>
        <section>
          <Title value="Vendre" variant="2" color="#91d66e"/>
          <Deal buttonName="Vendre" buttonColor="primary"/>
        </section>
    </main>
  );
}