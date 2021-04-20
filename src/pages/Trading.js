import React, { useEffect, useState } from 'react';
import '../css/trading.css';
import Title from '../components/Title'
import Deal from '../components/Deal'
import { getWallet } from "../utils/wallet"
import { getCryptos } from "../utils/cryptos"
import { buyCrypto, sellCrypto } from "../utils/transaction";
import { LinearProgress } from '@material-ui/core';

export default function Trading () {

  const [wallet, setWallet] = useState([]);
  const [cryptos, setCryptos] = useState([]);
  const [defaultCrypto, setDefaultCrypto] = useState({});

  const fetchData = async () => {
    const defaultBuyCrypto = sessionStorage.getItem("buyCrypto")
    const defaultSellCrypto = sessionStorage.getItem("sellCrypto")
    setDefaultCrypto({buy: defaultBuyCrypto, sell: defaultSellCrypto})
    sessionStorage.removeItem("buyCrypto");
    sessionStorage.removeItem("sellCrypto");

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

  const getWalletSum = (wallet) => {
    let sum = 0;
    for (const crypto in wallet) {
      sum += wallet[crypto].held * wallet[crypto].current_price;
    }
    return sum;
  }

  return (
    <main className="Trading">
        <header>
          <div>
            <label>Montant total du portefeuille en euros : </label>
            <h4>{getWalletSum(wallet)} €</h4>
          </div>
        </header>
        <section>
          <Title value="Acheter" variant="2" color="#e25555"/>
          {
            cryptos.length 
            ? <Deal 
                buttonName="Acheter" buttonColor="secondary" 
                cryptos={cryptos} 
                onValidation={(deal, type) => handleTransaction(deal, type)}
                defaultCrypto={defaultCrypto.buy ? defaultCrypto.buy : null }
              />
            : <LinearProgress className="ProgressBar" color="primary" />
          }
        </section>
        <section>
          <Title value="Vendre" variant="2" color="#91d66e"/>
          {
            wallet.length
            ? <Deal 
                buttonName="Vendre" buttonColor="primary" 
                cryptos={wallet} 
                isSelling onValidation={(deal, type) => handleTransaction(deal, type)}
                defaultCrypto={defaultCrypto.sell ? defaultCrypto.sell : null }
              />
            : <LinearProgress className="ProgressBar" color="primary" />
          }
          
        </section>
    </main>
  );
}