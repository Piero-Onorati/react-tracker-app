import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import GridNews from '../components/GridNews/GridNews';
import styles from './News.module.css';

const News = () => {

    const healthNewsUrl= `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/1`;
    const vaxNewsUrl= `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-vaccine-news/0`;

    const headers = {
        headers: {
            'x-rapidapi-key': '40f947a984mshdf35e96691aba2bp14c52ejsnb99fd7fd89ac',
            'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }   
    }

    const [helthItems, setHelthItems] =  useState([]);
    const [vaxItems, setVaxItems] =  useState([]); 
    const [isLoaded, setIsLoaded ] = useState(true);

    // Read the Api and put the result into helthItems with setHelthItems
    useEffect(()=>{
        const fetchItem = async() =>{
            const result = await axios((healthNewsUrl), headers);
            setHelthItems(result.data.news);
        }

        fetchItem();

    }, []);

    // Read the Api and put the result into vaxItems with setVaxItems
    useEffect(()=>{
        const fetchItem = async() =>{ 
            const result = await axios((vaxNewsUrl), headers)
            setVaxItems(result.data.news);
            setIsLoaded(false);
        }

        fetchItem();

    }, []);

    // Merge the two array
    const items = [...vaxItems, ...helthItems];

    return (
        <div className={styles.container}>
            <GridNews items={items} isLoaded={isLoaded}/>
        </div>
    );
}
 
export default News;