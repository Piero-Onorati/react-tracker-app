import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@material-ui/core";

const RadioSelect = ({setValue}) => {

    const handleValue = (e) =>{
        setValue(e.target.value)
    }
    return ( 
    <FormControl component="fieldset">
      <Typography variant="h5">Choose the Phase of Vaccine</Typography>
      <RadioGroup row aria-label="position" name="position" onChange={handleValue} >
        <FormControlLabel
          value="Pre-clinical"
          control={<Radio color="primary" />}
          label="Pre-clinical"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Phase I"
          control={<Radio color="primary" />}
          label="Phase I"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Phase I/II"
          control={<Radio color="primary" />}
          label="Phase I/II"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Phase II"
          control={<Radio color="primary" />}
          label="Phase II"
          labelPlacement="bottom"
        />
        <FormControlLabel 
          value="Phase III" 
          control={<Radio color="primary" />} 
          label="Phase III" 
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="All"
          control={<Radio color="primary" />}
          label="All"
          labelPlacement="bottom"
        />
      </RadioGroup>
    </FormControl>
  );
    
}
 
export default RadioSelect;