import { Doughnut} from 'react-chartjs-2';
import styles from './Chart.module.css';
import cx from 'classnames'
import { Typography } from "@material-ui/core";
import CountUp from 'react-countup';



const Chart = ({countriesData, country, data}) => {

  const doughnutChartTot = (
    <Doughnut
      data = {{
        labels: [
          'Cases',
          'Recovered',
          'Deaths'
        ],
        datasets: [{
          label: 'My First Dataset',
          data:[data.NewCases, data.NewRecovered,data.NewDeaths ],
          backgroundColor: [  
            '#3D5AFE',
            '#1DE9B6',
            '#FF1744'
          ],
          hoverOffset: 4
        }]
      }}
    />
      
  );

  // console.log(countriesData);
  // console.log(country);

  const doughnutChart = (
    <Doughnut
      data = {{
        labels: [
          'Cases',
          'Recovered',
          'Deaths'
        ],
        datasets: [{
          label: 'My First Dataset',
          data:[countriesData.TotalCases, parseInt(countriesData.TotalRecovered),countriesData.TotalDeaths ],
          backgroundColor: [
            '#3D5AFE',
            '#1DE9B6',
            '#FF1744'
          ],
          hoverOffset: 4
        }]
      }}
    />
  );

  return ( 
    <div className={styles.container}>

      {/* Doughnut Chart */}
      <div className={styles.doughnut_container}>
        { country ? doughnutChart : doughnutChartTot}
      </div>

      {/* Later small card that indicate new_infected, new_recovered and new_deaths */}
      <div className={styles.all_cards}>

        {/* New Infected */}
        {country ? <div className={cx(styles.card, styles.infected)}>
          <Typography>New Cases</Typography>
          <Typography variant="body2" color="textSecondary">
              {countriesData.NewCases ? 
              <CountUp start={0} end ={countriesData.NewCases} duration={1.5} separator={","}/>
              : 'No data yet...'}
          </Typography>
        </div> : ''}

        {/* New Recovered */}
        {country ? <div className={cx(styles.card, styles.recovered)}>
          <Typography >New Recovered</Typography>
          <Typography variant="body2" color="textSecondary">
          {countriesData.NewRecovered ? 
            <CountUp start={0} end ={countriesData.NewRecovered} duration={1.5} separator={","}/>
            : 'No data yet...'}
          </Typography>
        </div> : ''}

        {/* New Deaths */}
        {country ? <div className={cx(styles.card, styles.deaths)}>
          <Typography >New Deaths</Typography>
          <Typography variant="body2" color="textSecondary">
            {countriesData.NewDeaths ? 
            <CountUp start={0} end = {countriesData.NewDeaths} duration={1.5} separator={","}/>
            : 'No data yet...'}
          </Typography>    
        </div>: ''}
  
      </div> 

    </div>
  );
}
 
export default Chart;