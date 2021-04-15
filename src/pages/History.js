import React from 'react';
import '../css/history.css';
import Title from '../components/Title';
import TabHistory from '../components/tabs/TabHistory';

export default function History () {

  return (
    <main className="History">
        <section>
          <Title value="Historique" variant="1"/>
          <article>
            <TabHistory/>
          </article>
        </section>
    </main>
  );
}