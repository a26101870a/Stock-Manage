import { connect } from "react-redux";
import BuyList from "Components/MyStocks/BuyList";
import { increaseStockAmount, decreaseStockAmount } from "../../reducers/buyListSlice";
import { removeFromBuyList } from '../../reducers/buyListSlice';
import { removeFromStockList } from "../../reducers/pointerListSlice";

const mapStateToProps = (state) => ({
    buyList: state.buyList,
});

const mapDispatchToProps = {
    increaseStockAmount,
    decreaseStockAmount,
    removeFromBuyList,
    removeFromStockList
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyList);