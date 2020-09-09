import React from 'react'
import NewsCard from '../Newscard/NewsCard';
import useStyles from './styles.js'
import {Grid,Grow,Typography} from '@material-ui/core';


const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const News = ({articles}) => {
    const classes=useStyles();
if(!articles.length){
    return(
        <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        
        {infoCards.map((info)=>(
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infocard}>
                <div className={classes.card} style={{backgroundColor:info.color}} >
                    <Typography variant='h5'>{info.title}

                    </Typography>

                    {info.info?<Typography variant="body2">
                    <strong>{info.title.split(' ')[2]}:<br/>
                    {info.info}
                    </strong>
                    </Typography>:null}
                    
                    <Typography variant='h6'>Try Saying:<br/><i>{info.text}</i></Typography>
                </div>

            </Grid>
            
        ))}
        
        </Grid>


</Grow>
    )
}

    return (
        <Grow in>
<Grid className={classes.container} container alignItems="stretch" spacing={3}>

        {articles.map((article,i)=>{
              return(
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                <NewsCard article={article} i={i}/>
                </Grid>
                )

            })}
</Grid>


    </Grow>
    )
}

export default News
