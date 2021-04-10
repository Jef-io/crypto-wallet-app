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
import { curveCatmullRom, line } from 'd3-shape';
import { scalePoint } from 'd3-scale';

const values = [
    {
      date: 'hier', portefeuille: 60, btc: 937.6, doge: 582,
    }, {
        date: 'ajd', portefeuille: 30, btc: 300, doge: 800,
    }, {
        date: 'demain', portefeuille: 80, btc: 600, doge: 600,
}];

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
    .curve(curveCatmullRom)}
/>
);

const EvolutionChart = () => {

    const data = values

    return (
        <Paper>
            <Chart data={data}>
                <ArgumentScale factory={scalePoint} />
                <ArgumentAxis />
                <ValueAxis />

                <LineSeries name="Portefeuille" valueField="portefeuille" argumentField="date" seriesComponent={Line}/>
                <LineSeries name="BTC" valueField="btc" argumentField="date" seriesComponent={Line}/>
                <LineSeries name="DOGE" valueField="doge" argumentField="date" seriesComponent={Line}/>
                
                <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
                <Animation />
            </Chart>
        </Paper>
    )
}

export default EvolutionChart;