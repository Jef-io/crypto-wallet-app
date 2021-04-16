import React, { useEffect, useState } from 'react';
import '../css/wallet.css';
import Title from '../components/Title';
import TabWallet from '../components/tabs/TabWallet';
import EvolutionChart from '../components/EvolutionChart';
import CustomizedButton from '../components/Button'
import { Link } from 'react-router-dom';


import {
  getWallet
} from "../utils/wallet"

export default function Wallet () {

  const [wallet, setWallet] = useState([])

  const getWalletState = async () => {
    const result = await getWallet();
    setWallet(result);
    console.log(result);
  }

  useEffect(() => {
    getWalletState();
  }, [])

  return (
    <main className="Wallet">
        <header>
          <div>
            <label>Montant total du portefeuille en euros : </label>
            <h4>110000000 €</h4>
          </div>
          <Link to={'/addcryptoswallet'} className="Link">
            <CustomizedButton value="Ajouter une cryptomonnaie" color="blue"/>
          </Link>
        </header>
        <section>
          <Title value="Portefeuille" variant="1"/>
          <article>
            <TabWallet wallet={wallet} />
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