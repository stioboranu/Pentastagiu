import React, { PureComponent } from "react";
import "./addCard.css";
import {connect} from 'react-redux'
import { saveProduct, resetProduct } from "../../Redux/Actions/products";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddCard extends PureComponent {
  
 
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      unitPrice: '',
      photoUrl: '',
    };
  }
  
  onSubmit = (e) =>{
    e.preventDefault();
    const newProduct = this.state;
    this.props._saveProduct(newProduct);
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }   

  onExit = () => {
    this.props._resetProduct();
    this.props.history.push('/');
  } 


  render() {
    return (
      
      <div className="content-card modal">
        <List>
          <ListItem>
            <TextField
                name="name"
                style={{ width: 300 }}
                label="Name"
                onChange={this.onChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
              <TextField
                name="description"
                style={{ width: 300 }}
                label="Description"
                onChange={this.onChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
            <TextField
                name="unitPrice"
                style={{ width: 300 }}
                label="Price"
                type="number"
                onChange={this.onChange}
               />
          </ListItem>
          <Divider/>
         <ListItem>
           <TextField
                name="photoUrl"
                style={{ width: 300 }}
                label="Photo Url"
                onChange={this.onChange}
               />
         </ListItem>
          </List>
          
          <Button variant="outlined" color="primary" onClick={this.onSubmit}
        disabled={this.state.name === '' || this.state.description === '' || this.state.unitPrice === ''} >
           Save
        </Button>&nbsp;&nbsp;
        <Button variant="outlined" color="primary" onClick={this.onExit}>
            Exit add product
          </Button>

      </div>
      
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, ownProps) => ({
  _saveProduct: (product) => dispatch(saveProduct(product, ownProps.history)),
  _resetProduct: () => dispatch(resetProduct()),
   
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddCard);