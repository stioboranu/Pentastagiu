import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../card/card';
import './content.css';
import { connect } from "react-redux";
import { startEditProduct } from '../../Redux/Actions/ui';


class Content extends Component {
  
  handleClick = (id) => {
    this.props._startEditProduct(id);
    this.props.history.push(`/product/${id}`);
  }
    render() {
        return(
          <div className="content">
          <br/><br/><br/>
              {this.props.products.map(item =>
                      <CardProduct key={item.id} {...item}  
                      handleClick={this.handleClick} 
                      product={this.props.product}/>)}
          </div>
        )
    }
}
Content.propTypes = {
    handleClick: PropTypes.func,
    product: PropTypes.any,
}
const mapStateToProps = (state) => ({
  products: state.products.products,
  ui: state.ui,
  product: state.products.product
});
const mapDispatchToProps = (dispatch) => ({
  _startEditProduct: (id) => dispatch(startEditProduct(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
