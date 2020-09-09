import {makeStyles} from '@material-ui/core/styles';
import {amber} from '@material-ui/core/colors';
export default makeStyles({
    media:{
        height:250
        
        },
    border: {
        border: 'solid',
      },
      fullHeightCard: {
        
      },
      card: {
        height: '100%',
        display: 'flex',
        flexWrap:'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid green',
      },
      activeCard: {
        borderBottom: '10px solid #22289a',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
        padding: '0 16px',
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
    

})