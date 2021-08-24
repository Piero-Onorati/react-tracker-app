
import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import styles from './VaxCard.module.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Button, CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  card_header:{
    display:'flex'
  },
  avatar:{
    backgroundColor:(note)=>{
      if (note.phase === 'Pre-clinical') {
        return '#304FFE'
      }
      if (note.phase === 'Phase I') {
        return '#FF5252'
      }
      if (note.phase === 'Phase II') {
        return '#651FFF'
      }
      if (note.phase === 'Phase II/III') {
        return '#69F0AE'
      }
      return '#1DE9B6'
    },
    marginRight:20
  },
  phase:{
    backgroundColor:(note)=>{
      if (note.phase === 'Pre-clinical') {
        return '#82B1FF'
      }
      if (note.phase === 'Phase I') {
        return '#FF9E80'
      }
      if (note.phase === 'Phase II') {
        return '#B388FF'
      }
      if (note.phase === 'Phase II/III') {
        return '#B9F6CA'
      }
      return '#A7FFEB'
    }

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    color:'#141414',
    fontFamily:'Roboto'
  },
  pos: {
    marginBottom: 12,
  },
});

const VaxCard = ({item}) => {

  const classes = useStyles(item);
 
  return (
    <Card className={classes.root}>

      <CardContent>

        {/* Card HEADER: AVATAR + NAME OF DEVELOPER of VAX */}
        <div className={classes.card_header}>
          <Avatar className={classes.avatar}>
            {item.developerResearcher[0].toUpperCase()}
          </Avatar>
          <h4 className={classes.title} color="textSecondary" gutterBottom>
            {item.developerResearcher}
          </h4>
        </div>
        
        {/* Csrd BODY: NAME + TYPE of VAX */}
        <div className={styles.body_card}>  
          <h3 className={styles.vax_name}>NAME : {item.trimedName}</h3> 
          <Typography className={classes.pos} color="textSecondary">
            TYPE : {item.category}
          </Typography>
        </div>
        
        {/* BUTTON that indicate the PHASE od VAX */}
        <Button 
          variant="contained"
          disableRipple
          disableFocusRipple
          disableElevation
          className={classes.phase}
        >
          {item.phase}
        </Button>          
      
      </CardContent>
    
    </Card>
  );
}

export default VaxCard;
