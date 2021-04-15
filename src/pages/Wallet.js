import React from 'react';
import '../css/wallet.css';
import Title from '../components/Title';
import TabWallet from '../components/tabs/TabWallet';
import EvolutionChart from '../components/EvolutionChart';

export default function Wallet () {

  return (
    <main className="Wallet">
        <header>
          <label>Montant total du portefeuille en euros : </label>
          <h4>110000000 €</h4>
        </header>
        <section>
          <Title value="Portefeuille" variant="1"/>
          <article>
            <TabWallet/>
          </article>
        </section>
        <section className="WalletEvolution">
          <div>
            <Title value="Evolution" variant="2"/>
            <Title value="30 derniers jours" variant="3" color="#db2b2b"/>
          </div>
          <article>
              <EvolutionChart/>
          </article>
        </section>
        
    </main>
  );
}