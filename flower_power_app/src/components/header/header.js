import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  add: {
    width: '2%',
    height: '2%',
  },
});
class Header extends React.PureComponent {
  addCard = () => {
    this.props.history.push('/add-product');
  }
  goHome = () =>{
    this.props.history.push('/')
  }
render(){
    console.log('render Header');
    return(
        <header className="App-header">
          
          <h4 className="rainbow" onClick={this.goHome}>Flower power app</h4>
          <Fab aria-label="Add" onClick={this.addCard} className={this.props.classes.add }>
          <AddIcon/>
          </Fab>
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart"/>
        
        </header>
    )
}
}
export default withStyles(styles)(Header);