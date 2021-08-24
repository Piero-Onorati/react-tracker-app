import React from 'react';
import styles from './Home.module.css';
import { Cards, Chart, CountryPicker } from '../components';
import { fetchData, fetchcountriesData } from '../api';
import { Grid, Typography } from '@material-ui/core';
import LineChart from '../components/LineChart/LineChart';

class Home extends React.Component {
  state = { 
    data : {},
    countriesData :{},
    country:''
  }
  
  // import and visualize the data for the card component in the console log
  async componentDidMount(){
    const fetchedData = await fetchData();
    // console.log(fetchedData);

    // we assign fetchedData to data so we can send data as props to other comp
    this.setState({ data : fetchedData });
  }

  // Filter the Response of API depending on the COUNTRY chosen with the Country Picker component
  handleCountryChange = async (country) => {
    // console.log(country);
    const fetchData = await fetchcountriesData();
    const filterfetchData = fetchData.filter(el=> {return el.Country===country});
    // console.log(fetchData);
    // console.log(filterfetchData);
    this.setState({country:country});
    this.setState({countriesData:filterfetchData.shift() });
  }

  render() { 
    return ( 
      <div className={styles.container}>
      
        {/* row with 3 cards */}
        <Cards data={this.state.data}/>

        {/* Grid divided into 2 part: on left donut chart and on right line chart */}
        <Grid container alignItems='center'>

          {/* Country Picker + donut chart */}
          <Grid item md={6} xs={12} >
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart countriesData={this.state.countriesData} country={this.state.country} data={this.state.data} />
          </Grid>

          {/* Line Chart Past 6 months USA */}
          <Grid item md={6} xs={12} > 
            <Typography variant="h6" className={styles.line_chart_title}>
              Covid-19 stats for the past six months of USA
            </Typography>
            <LineChart />
          </Grid>

        </Grid>

      </div>
     );
  }
}
 
export default Home;
