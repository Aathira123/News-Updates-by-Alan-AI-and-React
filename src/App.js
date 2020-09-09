import React,{useEffect,useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import News from './Components/NewsCards/News'
import useStyles from './styles.js';
import x from './img/img1.gif';

const alanKey='233f3d66665061a3079fb4620be809de2e956eca572e1d8b807a3e2338fdd0dc/stage ';
const App=()=>{
    const classes=useStyles();
    const[newsArticles,setNews]=useState([])
    useEffect(()=>{
    alanBtn({
        key:alanKey,
        onCommand:({command,articles})=>{
            if(command==='newHeadlines'){
                setNews(articles);
                
                
            }

        }

    })

    },[])

    return(
        <div>
           <div className={classes.logoContainer}>
               <img src={x} className={classes.alanLogo} />
           </div>
            <News articles={newsArticles}/>
        </div>
    )
}
export default App;