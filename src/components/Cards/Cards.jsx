
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
// 'cx' of 'classnames' plugin is used for add more class in the format. styles.className
import cx from 'classnames'
import styles from './Cards.module.css';
import Loader from "../Loader/Loader";

const Cards = ({data:{TotalCases,TotalRecovered, TotalDeaths, NewCases, NewRecovered, NewDeaths}}) => {
    
    if (!TotalCases) {
        <Loader/>  
    }
    return ( 
        <div className={styles.container}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>World Total Infected</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end ={TotalCases} duration={2.5} separator={","}/>
                        </Typography>
                        <Typography color="textSecondary">World New Cases</Typography>
                        <Typography variant="body2">
                            <CountUp start={0} end ={NewCases} duration={2.5} separator={","}/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>World Total Recovered</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end ={TotalRecovered} duration={2.5} separator={","}/>
                        </Typography>
                        <Typography color="textSecondary">World New Recovered</Typography>
                        <Typography variant="body2">
                            <CountUp start={0} end ={NewRecovered} duration={2.5} separator={","}/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>World Total Deaths</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end ={TotalDeaths} duration={2.5} separator={","}/>
                        </Typography>
                        <Typography color="textSecondary">World New Deaths</Typography>
                        <Typography variant="body2">
                            <CountUp start={0} end ={NewDeaths} duration={2.5} separator={","}/>
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}
 
export default Cards;