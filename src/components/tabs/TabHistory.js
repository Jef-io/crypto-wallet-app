import React from 'react';

export default function TabCryptos () {

    const deals = [
        {
            type:'vente',
            date:'8/04/2021',
            crypto:'BTC',
            montant:'1',
            euros:'58 000',
        },
        {
            type:'achat',
            date:'8/04/2021',
            crypto:'DOGE',
            montant:'1',
            euros:'1000',
        }
    ]

    const textGreen = {
        color:'#76cc4a',
        fontWeight:'bold'
    }

    const textRed = {
        color:'#db2b2b',
        fontWeight:'bold'
    }

    return (
        <table className="TabCryptos">
            <thead>
                <tr>
                    <th>Type de transaction</th>
                    <th>Date</th>
                    <th>Crypto</th>
                    <th>Montant</th>
                    <th>Valeur en euros<br/><small>Au moment de la transaction</small></th>
                </tr>
            </thead>
            <tbody>
                {deals.map((deal) => (
                    <tr>
                        { deal.type === 'vente' ?
                            <td style={textGreen}>{deal.type}</td>
                        : 
                            <td style={textRed}>{deal.type}</td>
                        }
                        
                        <td>{deal.date}</td>
                        <td>{deal.crypto}</td>
                        <td>{deal.montant}</td>
                        <td>{deal.euros}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}