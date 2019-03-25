import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import { deleteProduct } from '../../Redux/Actions/products';
import Button from '@material-ui/core/Button';

const styles = () => ({
  edit: {
    width: '12%',
    height: '15%',
  },
});

class Card extends React.PureComponent {
  deleteProduct = (id) => {
    if (window.confirm('Are you sure you wish to delete this item?'))
    {this.props._deleteProduct(id) }
   
  };
  

    render() {
        const props = this.props;
        console.log('render Card', props.id);
        const id= props.id;
        return (
            <div className="content-card">
                <h1>{props.name}</h1>
                <span>{props.description}</span>
                <img className="card-product-image" src={props.photoUrl} alt={props.name}/>
                <h5>Price {props.unitPrice} EUR</h5>
                <Button variant="outlined" color="primary" >Add to cart</Button>
                <Fab color="primary" aria-label="Edit" className={this.props.classes.edit } onClick={() =>props.handleClick(id)}>
                <EditIcon/>
                </Fab>
                <Fab color="secondary" aria-label="Delete" className={this.props.classes.edit } onClick={() =>this.deleteProduct(id)}>
                <DeleteIcon/>
                </Fab>
              </div>
        )
    }
}
Card.propTypes={
    name: PropTypes.string,
    handleClick: PropTypes.func,
    deleteProduct: PropTypes.func,
}
const mapStateToProps = () => ({

});
const mapDispatchToProps = (dispatch) => ({
  _deleteProduct: (id) => dispatch(deleteProduct(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Card));