import React, { useEffect, useState } from 'react';
import '../css/cryptos.css';
import Title from '../components/Title';
import TabFollowedCryptos from '../components/tabs/TabFollowedCryptos';
import CustomizedButton from '../components/Button';
import { Link } from 'react-router-dom';
import { 
  getFollowedCryptos,
  unfollowCrypto
} from '../utils/followedCryptos'

export default function Cryptos () {

  const [cryptos, setCryptos] = useState([]);

  const fetchCryptos = async () => {
    const result = await getFollowedCryptos();
    setCryptos(result);
  }

  const removeCrypto = async (id) => {
    try {
      await unfollowCrypto(id);
      setCryptos(cryptos =>  cryptos.filter(crypto => crypto.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCryptos();
  }, [])

  return (
    <main className="Cryptos">
      <header>
        <div></div>
        <Link to={'/addcryptos'}>
          <CustomizedButton value="Ajouter une cryptomonnaie" color="blue"/>
        </Link>
      </header>
      <section>
        <Title value="Cryptos" variant="1"/>
        <article>
          <TabFollowedCryptos cryptosList={cryptos} unfollowCrypto={id => removeCrypto(id)}/>
        </article>
      </section>
    </main>
  );
}