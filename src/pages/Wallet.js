import React, { useEffect, useState } from 'react';
import '../css/wallet.css';
import Title from '../components/Title';
import TabWallet from '../components/tabs/TabWallet';
import EvolutionChart from '../components/EvolutionChart';
import CustomizedButton from '../components/Button'
import { Link } from 'react-router-dom';


import {
  getWallet, getWalletEvolution
} from "../utils/wallet"
import { LinearProgress } from '@material-ui/core';

export default function Wallet () {

  const [wallet, setWallet] = useState([])
  const [evolution, setEvolution] = useState([])

  const getWalletState = async () => {
    const result = await getWallet();
    setWallet(result);
  }

  const getWalletEvolutionState = async () => {
    const result = await getWalletEvolution();
    setEvolution(result)
  }

  const getWalletSum = (wallet) => {
    let sum = 0;
    for (const crypto in wallet) {
      sum += wallet[crypto].held * wallet[crypto].current_price;
    }
    return sum;
  }

  useEffect(() => {
    getWalletState();
    getWalletEvolutionState();
  }, [])

  return (
    <main className="Wallet">
        <header>
          <div>
            <label>Montant total du portefeuille en euros : </label>
            <h4>{getWalletSum(wallet)} €</h4>
          </div>
          <Link to={'/declarecryptoswallet'} className="Link">
            <CustomizedButton value="Déclarer une cryptomonnaie" color="blue"/>
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
            <Title value="portefeuille" variant="3" color="#db2b2b"/>
          </div>
          <article>
            {
              evolution.length
              ? <EvolutionChart cryptoData={evolution}/>
              : <LinearProgress className="ProgressBar" color="primary" />
            }
          </article>
        </section>
        
    </main>
  );
}