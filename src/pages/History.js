import React from 'react';
import '../css/history.css';
import Title from '../components/Title';
import TabHistory from '../components/TabHistory';

export default function History () {

  return (
    <main className="History">
        <Title value="Historique" variant="1"/>
        <section>
          <TabHistory/>
        </section>
        
    </main>
  );
}