import React, { useEffect, useState } from "react"
import CustomizedButton from '../components/Button';
import { Link, useParams } from 'react-router-dom';
import Title from '../components/Title';
import EvolutionChart from '../components/EvolutionChart';
import { getCryptoEvolution } from "../utils/cryptos";
import { LinearProgress } from "@material-ui/core";


const CryptoDetails = () => {

    const { id } = useParams();

    const [cryptoData, setCryptoData] = useState([]);

    const getCryptoData = async () => {
        const result = await getCryptoEvolution(id);
        setCryptoData(result);
    }

    useEffect(() => {
        getCryptoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main>
            <Link to={'/cryptos'} className="Link">
                <CustomizedButton value="Retour" color="blue"/>
            </Link>
            <Title value={id} variant="1"/>
            <Title value="30 derniers jours" variant="3" color="#db2b2b"/>
            <section>
                {
                    cryptoData.length 
                    ? <EvolutionChart isCryptoHistory={true} cryptoData={cryptoData} />
                    : <LinearProgress className="ProgressBar" color="primary"/>
                }
            </section>
        </main>
    )
}

export default CryptoDetails;