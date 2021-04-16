import React, { useEffect, useState } from 'react';
import '../css/cryptos.css';
import Title from '../components/Title';
import TabFollowedCryptos from '../components/tabs/TabFollowedCryptos';
import CustomizedButton from '../components/Button';
import { Link } from 'react-router-dom';
import { 
  getFollowedCryptos
} from '../utils/followedCryptos'

export default function FollowedCryptos () {

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
      <header>
        <Link to={'/addfollowedcryptos'}>
          <CustomizedButton value="Ajouter une cryptomonnaie" color="blue"/>
        </Link>
      </header>
      <section>
        <Title value="Cryptos" variant="1"/>
        <article>
          <TabFollowedCryptos cryptosList={cryptos}/>
        </article>
      </section>
    </main>
  );
}