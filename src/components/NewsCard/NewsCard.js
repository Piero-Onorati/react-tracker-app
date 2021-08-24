import React from "react";
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, makeStyles, StylesProvider, Typography } from "@material-ui/core";
import LinkTwoToneIcon from '@material-ui/icons/LinkTwoTone';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import { ExternalLink } from 'react-external-link';
import { format } from 'date-fns';
import cx from 'classnames';

const useStyles = makeStyles((theme)=>{
    return{
        root: {
            maxWidth: 345,
        },
        card_header:{
            padding: theme.spacing(2)
        },
        subtitle:{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
        },
        pos: {
            marginBottom: 12,
            marginTop:15
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
            backgroundColor: 'grey' 
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
            }),
          },
          expandOpen: {
            transform: 'rotate(180deg)',
        },
    
    }
})

const NewsCard = ({item}) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const classes = useStyles();
    return ( 
        <div>
            <Card className={classes.root} elevation={1}>

                <div className={ classes.card_header}>

                    {/* TITLE of the NEWS */}
                    <Typography variant="h5" component="h2">
                        {item.title}
                    </Typography>

                    <div className={classes.subtitle}>
                        {/* DATE of the NEWS */}
                        <Typography className={classes.pos} color="textSecondary">
                            { format(new Date(item.pubDate), 'do MMMM Y')}
                        </Typography>

                        {/* BUTTON LINK -> READ MORE */}
                        <ExternalLink href={item.link} >
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                Read 
                            </Button>          
                        </ExternalLink>
                    </div>
     
                </div>

                {/* NEWS IMAGE */}
                <CardMedia
                    className={classes.media}
                    image={item.urlToImage}
                />

                {/* BOTTOM PART with SOCIAL ICONS + EXPAND */}
                <CardActions disableSpacing>

                    {/* Fovourite */}
                    <IconButton aria-label="add to favorites">
                        <FavoriteTwoToneIcon />
                    </IconButton>

                    {/* Share */}
                    <IconButton aria-label="share">
                        <ShareTwoToneIcon />
                    </IconButton>

                    {/* Expand button */}
                    <IconButton
                        className={cx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreTwoToneIcon />
                    </IconButton>

                </CardActions>
                
                {/* CONTENT that appear when click the expan-button */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {item.content}
                        </Typography>
                    </CardContent>
                </Collapse>
                
            </Card>
        </div>
     );
}
 
export default NewsCard;