import React, { useEffect, useState } from 'react';
import '../css/trading.css';
import Title from '../components/Title'
import Deal from '../components/Deal'
import { getWallet } from "../utils/wallet"
import { getCryptos } from "../utils/cryptos"
import { buyCrypto, sellCrypto } from "../utils/transaction";

export default function Trading () {


  const [wallet, setWallet] = useState([]);
  const [cryptos, setCryptos] = useState([]);

  const fetchData = async () => {
    const walletData = await getWallet();
    const cryptosData = await getCryptos();
    setWallet(walletData);
    setCryptos(cryptosData);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleTransaction = async (deal, type) => {
    try {      
      if (type === "buy") {
        await buyCrypto(deal);
      } else {
        await sellCrypto(deal);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="Trading">
        <header>
          <div>
            <label>Montant total du portefeuille en euros : </label>
            <h4>110000000 €</h4>
          </div>
        </header>
        <section>
          <Title value="Acheter" variant="2" color="#e25555"/>
          <Deal 
            buttonName="Acheter" buttonColor="secondary" 
            cryptos={cryptos} 
            onValidation={(deal, type) => handleTransaction(deal, type)}
          />
        </section>
        <section>
          <Title value="Vendre" variant="2" color="#91d66e"/>
          <Deal 
            buttonName="Vendre" buttonColor="primary" 
            cryptos={wallet} 
            isSelling onValidation={(deal, type) => handleTransaction(deal, type)}/>
        </section>
    </main>
  );
}