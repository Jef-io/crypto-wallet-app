import React from "react"

import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { curveMonotoneX, line } from 'd3-shape';
import { scalePoint } from 'd3-scale';

const legendStyles = theme => ({
root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
},
label: {
    marginBottom: theme.spacing(1),
    whiteSpace: 'nowrap',
},
item: {
    flexDirection: 'column-reverse',
},
});
  
const legendRootBase = ({ classes, ...restProps }) => (
<Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
<Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
<Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const Label = withStyles(legendStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendStyles, { name: 'LegendItem' })(legendItemBase);

const Line = props => (
<LineSeries.Path
    {...props}
    path={line()
    .x(({ arg }) => arg)
    .y(({ val }) => val)
    .curve(curveMonotoneX)}
/>
);

const EvolutionChart = ({
    cryptoData,
    isCryptoHistory
}) => {

    const mainCryptos = [
        'bitcoin', 'dogecoin', 'ethereum', 'sushi'
    ]

    return (
        <Paper>
            <Chart data={cryptoData}>
                <ArgumentScale factory={scalePoint} />
                <ArgumentAxis />
                <ValueAxis />
                {
                    isCryptoHistory
                    ? <LineSeries name="Valeur €" valueField="price" argumentField="date" seriesComponent={Line}/> 
                    : <LineSeries name="Portefeuille €" valueField="price" argumentField="date" seriesComponent={Line}/>
                }
                { !isCryptoHistory
                    ? mainCryptos.map((crypto, id) =>
                        <LineSeries key={id} name={crypto} valueField={crypto} argumentField="date" seriesComponent={Line}/>
                    )
                    : null
                }
                {/* <LineSeries name="BitCoin" valueField="bitcoin" argumentField="date" seriesComponent={Line}/> 
                <LineSeries name="Eth" valueField="ethereum" argumentField="date" seriesComponent={Line}/> 
                <LineSeries name="Doge" valueField="dogecoin" argumentField="date" seriesComponent={Line}/> 
                <LineSeries name="Sushi" valueField="sushi" argumentField="date" seriesComponent={Line}/>  */}
                
                <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
                <Animation />
            </Chart>
        </Paper>
    )
}

export default EvolutionChart;