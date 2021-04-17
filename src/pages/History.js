import React, { useEffect, useState } from 'react';
import '../css/history.css';
import Title from '../components/Title';
import TabHistory from '../components/tabs/TabHistory';
import { getHistory } from "../utils/transaction";

export default function History () {

  const [history, setHistory] = useState([]);

  const fetchData = async () => {
    const data = await getHistory();
    setHistory(data);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main className="History">
        <section>
          <Title value="Historique" variant="1"/>
          <article>
            <TabHistory history={history}/>
          </article>
        </section>
    </main>
  );
}