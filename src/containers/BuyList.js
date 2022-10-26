import { connect } from "react-redux";
import BuyList from "Components/MyStocks/BuyList";
import { increaseStockAmount, decreaseStockAmount } from "../reducers/buyListSlice";

const mapStateToProps = (state) => ({
    buyList: state.buyList,
});

const mapDispatchToProps = {
    increaseStockAmount,
    decreaseStockAmount,
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyList);