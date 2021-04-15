import React, { useEffect, useState } from 'react';
import '../css/cryptos.css';
import Title from '../components/Title';
import TabFollowedCryptos from '../components/tabs/TabFollowedCryptos';
import CustomizedButton from '../components/Button';
import { Link } from 'react-router-dom';
import { 
  getFollowedCryptos
} from '../utils/followedCryptos'

export default function Cryptos () {

  const [cryptos, setCryptos] = useState([]);

  const fetchCryptos = async () => {
    const result = await getFollowedCryptos();
    setCryptos(result);
}

useEffect(() => {
    fetchCryptos();
}, [])

  useEffect(() => {

  })

  
  return (
    <main className="Cryptos">
        <section>
          <Title value="Cryptos" variant="1"/>
          <article>
            <TabFollowedCryptos cryptosList={cryptos}/>
          </article>
        </section>
        <section>
          <article>
            <Link to={'/addcrypto'}>
              <CustomizedButton value="ajouter une cryptomonnaie" color="blue"/>
            </Link>
          </article>
        </section>
    </main>
  );
}