import React from 'react';

export default function TabCryptos ({
    history
}) {

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
                {history.map((deal, id) => (
                    <tr key={id}>
                        { deal.type === 'sell' 
                            ? <td style={textGreen}>vente</td>
                            : <td style={textRed}>achat</td>
                        }
                        <td>{deal.date.replace(/T1|.000Z/gi, " ")}</td>
                        <td>{deal.crypto_id}</td>
                        <td>{deal.ammount}</td>
                        <td>{deal.value} €</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}