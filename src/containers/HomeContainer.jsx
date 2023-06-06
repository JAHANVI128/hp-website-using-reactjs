import { connect } from "react-redux"
import { HomeComponent } from "../components/HomeComponent"
import { addToCart } from "../service/Actions/Action"

const mapStateToProps = state => ({
    cartData:state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:product => dispatch(addToCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);