import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import {
  curveCatmullRom,
  line,
} from 'd3-shape';
import { scalePoint } from 'd3-scale';

// const datas = [
//     {
//       country: 'USA', hydro: 59.8, oil: 937.6, gas: 582, coal: 564.3, nuclear: 187.9,
//     }, {
//         country: 'China', hydro: 74.2, oil: 308.6, gas: 35.1, coal: 956.9, nuclear: 11.3,
//     }, {
//         country: 'Russia', hydro: 40, oil: 128.5, gas: 361.8, coal: 105, nuclear: 32.4,
//     }, {
//         country: 'Japan', hydro: 22.6, oil: 241.5, gas: 64.9, coal: 120.8, nuclear: 64.8,
//     }, {
//         country: 'India', hydro: 19, oil: 119.3, gas: 28.9, coal: 204.8, nuclear: 3.8,
//     }, {
//         country: 'Germany', hydro: 6.1, oil: 123.6, gas: 77.3, coal: 85.7, nuclear: 37.8,
//     }];

const datas = [
    {
        name: 'Portefeuille', montant: 59.8, date: 187.9,
    }, {
        name: 'BTC', montant: 74.2, date: 11.3,
    }
];

const Line = props => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendLabelStyles = theme => ({
  label: {
    marginBottom: theme.spacing(1),
    whiteSpace: 'nowrap',
  },
});
const legendItemStyles = () => ({
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
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);
const demoStyles = () => ({
  chart: {
    paddingRight: '30px',
  },
});

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      datas,
    };
  }

  render() {
    const { datas: chartData } = this.state;
    const { classes } = this.props;

    return (
      <Paper>
        <Chart
          datas={chartData}
          className={classes.chart}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />
            { datas.map((data) => 
                <LineSeries
                    name={data.name}
                    valueField="montant"
                    argumentField="date"
                    seriesComponent={Line}
                />
            )}
          {/* <LineSeries
            name="Hydro-electric"
            valueField="hydro"
            argumentField="country"
            seriesComponent={Line}
          />
          <LineSeries
            name="Oil"
            valueField="oil"
            argumentField="country"
            seriesComponent={Line}
          />
          <LineSeries
            name="Natural gas"
            valueField="gas"
            argumentField="country"
            seriesComponent={Line}
          />
          <LineSeries
            name="Coal"
            valueField="coal"
            argumentField="country"
            seriesComponent={Line}
          />
          <LineSeries
            name="Nuclear"
            valueField="nuclear"
            argumentField="country"
            seriesComponent={Line}
          /> */}
          <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
          
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

export default withStyles(demoStyles, { name: 'Demo' })(Demo);
