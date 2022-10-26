import { connect } from "react-redux";
import StockListTableItem from "Components/Dashboard/StocksList/Table/Body/Item";
import { addToBuyList, removeFromBuyList } from "../../reducers/buyListSlice";
import { addToStockList, removeFromStockList } from "../../reducers/pointerListSlice";

const mapDispatchToProps = {
    addToBuyList,
    removeFromBuyList,
    addToStockList,
    removeFromStockList
}

export default connect(null, mapDispatchToProps)(StockListTableItem);