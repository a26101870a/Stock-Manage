import { connect } from "react-redux";
import BuyList_Item from "Components/MyStocks/Item";
import { increaseStockAmount, decreaseStockAmount } from "../../reducers/buyListSlice";
import { removeFromBuyList } from '../../reducers/buyListSlice';
import { removeFromStockList } from "../../reducers/pointerListSlice";

const mapDispatchToProps = {
    increaseStockAmount,
    decreaseStockAmount,
    removeFromBuyList,
    removeFromStockList
}

export default connect(null, mapDispatchToProps)(BuyList_Item);