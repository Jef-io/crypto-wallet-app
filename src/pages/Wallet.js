import React from 'react';
import '../css/wallet.css';
import Title from '../components/Title';
import TabWallet from '../components/TabWallet';

export default function Wallet () {

  return (
    <main className="Wallet">
        <header>
          <label>Montant total du portefeuille en euros : </label>
          <h4>110000000 €</h4>
        </header>
        <Title value="Portefeuille" variant="1"/>
        <section>
          <TabWallet/>
        </section>
        <div className="WalletEvolution">
          <Title value="Evolution" variant="2"/>
          <Title value="30 derniers jours" variant="3" color="#db2b2b"/>
        </div>
        
    </main>
  );
}