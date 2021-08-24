import { NativeSelect, FormControl  } from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchcountriesName} from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {

    const [ allCountries, setallCountries] = useState([]);

    // Read the Api: create ana array with the names of all countries
    useEffect(()=>{
        const fetchData = async () => {
            setallCountries(await fetchcountriesName())
        }
        fetchData()
        
    },[]);
    
    return ( 
        <div className={styles.container}>
            <FormControl>
                <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                    { allCountries.map((country, index)=> <option key={index} value={country}> {country}</option> )}
                </NativeSelect>
            </FormControl>
        </div>
     );
}
 
export default CountryPicker;