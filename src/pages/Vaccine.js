import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import VaxCard from '../components/VaxCard/VaxCard';
import styles from './Vaccine.module.css';
import Masonry from "react-masonry-css";
import RadioSelect from '../components/RadioSelect/RadioSelect';
import Loader from '../components/Loader/Loader';

const Vaccine = () => {

    const vaccineUrl = `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-vaccines/Replicating%20viral%20vector`;

    const headers = {
        headers: {
            'x-rapidapi-key': '40f947a984mshdf35e96691aba2bp14c52ejsnb99fd7fd89ac',
            'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }   
    }

    const [items, setItems] =  useState([]);
    const [isLoaded, setIsLoaded ] = useState(true);
    const [value, setValue] = useState('');

    useEffect(()=>{
        const fetchItem = async() =>{
            const result = await axios((vaccineUrl), headers)
            // console.log(result.data); 
            if (value) {
                if (value === 'All') {
                    setItems(result.data);
                }else{setItems(result.data.filter((item)=>{ return item.phase === value}));
                }
            }else{
                setItems(result.data);
                setIsLoaded(false);
            }
        }

        fetchItem();

    }, [value]);

    const breackpoints = {
        default:4,
        1100:3,
        700:1
    }

    return isLoaded ? (
        <Loader/>
    ):( 
        <Container>
            <div className={styles.radioSelect}>
                <RadioSelect setValue={setValue}/>
            </div>
            <Masonry
                breakpointCols={breackpoints}
                className={styles.my_masonry_grid}
                columnClassName={styles.my_masonry_grid_column}
            >
                {items.map((item,index) => (
                    <Grid item key={index}>
                        <VaxCard item={item} />
                    </Grid>
                ))}
            </Masonry>
        </Container>
        
    );
}
 
export default Vaccine;