import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import "./editCard.css";
import { connect } from "react-redux";
import { setNameProduct, setDescriptionProduct, setPriceProduct, setPhotoUrlProduct, setSaveProduct, resetProduct } from "../../Redux/Actions/products";


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class EditCard extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      dataById: {},
      name: this.props.product.name,
      description: this.props.product.description,
      unitPrice: this.props.product.unitPrice,
      photoUrl: this.props.product.photoUrl,
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }  

  onNameChange = () => {
    this.props._setNameProduct(this.state.name);
  }

  onDescriptionChange = () => {
    this.props._setDescriptionProduct(this.state.description);
  }

  onPriceChange = () => {
    this.props._setPriceProduct(this.state.unitPrice);
  }

  onPhotoUrlChange = () => {
    this.props._setPhotoUrlProduct(this.state.photoUrl);
  }

  onSave = () => {
    this.onNameChange();
    this.onDescriptionChange();
    this.onPriceChange();
    this.onPhotoUrlChange();
    this.props._setSaveProduct();
  }

  onExit = () => {
    this.props._resetProduct();
    this.props.history.push('/');
  }

  render() {console.log(this.props)
    return (
      <div className="content-card modal">
        <List className={this.props.classes.root}>
          <ListItem>
            <ListItemText primary="Name"/>
            <TextField
                name="name"
                className={this.props.classes.textField}
                value={this.state.name}
                onChange={this.onChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText primary="Description"/>
              <TextField
                ref="textField"
                name="description"
                className={this.props.classes.textField}
                value={this.state.description}
                onChange={this.onChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText primary="Price"/>
            <TextField
                name="unitPrice"
                className={this.props.classes.textField}
                type="number"
                value={this.state.unitPrice}
                onChange={this.onChange}
               />
          </ListItem>
          <Divider/>
         <ListItem>
           <ListItemText primary="Photo Url"/>
           <TextField
                name="photoUrl"
                className={this.props.classes.textField}
                value={this.state.photoUrl}
                onChange={this.onChange}
               />
         </ListItem>
       </List>
        
        
        <Button variant="outlined" color="primary" onClick={this.onSave}
        disabled={this.state.name === '' || this.state.description === '' || this.state.unitPrice === ''}>
           Save
        </Button>&nbsp;&nbsp;
      
        <Button variant="outlined" color="secondary" onClick={this.onExit}>
            Exit edit product
          </Button>
      </div>
    );
  }
}
EditCard.propTypes = {
  name: PropTypes.string,
  onNameChange: PropTypes.func,
  onDescriptionChange: PropTypes.func,
  onPriceChange: PropTypes.func,
  onPhotoUrlChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  product: state.products.product,
  ui: state.ui,
  products: state.products.products,
});
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    _setNameProduct: (name) => dispatch(setNameProduct(name)),
    _setDescriptionProduct: (description) => dispatch(setDescriptionProduct(description)),
    _setPriceProduct: (price) => dispatch(setPriceProduct(price)),
    _setPhotoUrlProduct: (photoUrl) => dispatch(setPhotoUrlProduct(photoUrl)),
    _setSaveProduct: () => dispatch(setSaveProduct(ownProps.history)),
    _resetProduct:() => dispatch(resetProduct()),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditCard));


