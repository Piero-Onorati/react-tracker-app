import { useState } from "react";
import { useEffect } from "react";
import { fetchPastSix } from "../../api";
import { Line} from 'react-chartjs-2';
import styles from './LineChart.module.css'

const LineChart = () => {

    const [ PastSixData, setPastSixData ] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            setPastSixData(await fetchPastSix())
        }
        fetchData();
        
    },[]);

    const lineChart = (
        PastSixData.length ? (
        <Line
            data={{  
                labels:PastSixData.map(({date})=> date),
                datasets:[
                    {
                        data:PastSixData.map(({new_cases})=> new_cases),
                        label:'Infected',
                        borderColor:'#304FFE',
                        backgroundColor:'#C5CAE9',
                        fill:true,
                        tension: 0.1
                    }, 
                    {
                        data:PastSixData.map(({new_deaths})=> new_deaths),
                        label:'Deaths',
                        borderColor:'#D50000',
                        backgroundColor:'#FF8A80',
                        fill:true,
                        tension: 0.1
                    }
                ] 
            }}
        />): null
    );
    return ( 
        <div className={styles.container}>
            {lineChart}
        </div>
    );
}
 
export default LineChart;