import axios from 'axios';

const globalUrl ="https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world";
const pastSixUrl ='https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA';
const countries = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/';

// FUNCTIONS FOR READING THE API

// ----------- FUNCTIOONS FOR HOME PAGE -----------//

// Get the global data for infected, recovered and death of COVID-19
export const fetchData = async () =>{
    try {
        // const response = await axios.get((globalUrl), {headers: {
        //     'x-rapidapi-key': '40f947a984mshdf35e96691aba2bp14c52ejsnb99fd7fd89ac',
        //     'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        //  }});;
        // return response.data[0];


        const response = await axios.get((globalUrl), {headers: {
            'x-rapidapi-key': '40f947a984mshdf35e96691aba2bp14c52ejsnb99fd7fd89ac',
            'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
            }});

        const modifiedData ={
            TotalCases: response.data[0].TotalCases,
            TotalRecovered: response.data[0].TotalRecovered,
            TotalDeaths: response.data[0].TotalDeaths,
            NewCases: response.data[0].NewCases,
            NewRecovered: response.data[0].NewRecovered,
            NewDeaths: response.data[0].NewDeaths, 
        };
        return modifiedData;

    } catch (error) {
        console.log(error);
    }
};

// Get the data of last six month in USA for the LINE-CHART graphic
export const fetchPastSix = async () =>{
   try {
    const response = await axios.get((pastSixUrl), {headers: {
        'x-rapidapi-key': '40f947a984mshdf35e96691aba2bp14c52ejsnb99fd7fd89ac',
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }});
    return response.data;
       
   } catch (error) {
    console.log(error);
   }
    
};

// Get all the name of Countries for the options of the select
export const fetchcountriesName = async () =>{
    try {
     const response = await axios.get((countries), {headers: {
         'x-rapidapi-key': '40f947a984mshdf35e96691aba2bp14c52ejsnb99fd7fd89ac',
         'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }});

        const allCountries = response.data.map((el)=> el.Country);
     
        return allCountries;
        
    } catch (error) {
     console.log(error);
    }
     
};

// Get the global data for infected, recovered and death of COVID-19 for each country
 export const fetchcountriesData = async () =>{
    try {
     const response = await axios.get((countries), {headers: {
         'x-rapidapi-key': '40f947a984mshdf35e96691aba2bp14c52ejsnb99fd7fd89ac',
         'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }});
     
        return response.data;
        
        
    } catch (error) {
     console.log(error);
    }
     
};

