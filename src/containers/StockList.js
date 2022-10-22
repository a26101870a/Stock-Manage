import { connect } from "react-redux";
import StockList from "Components/Dashboard/StocksList/TableItem";
import { addStock, removeStock } from "../reducers/watchListSlice";
import { addToList, removeFromList } from "../reducers/stockListSlice";

const mapDispatchToProps = {
    addStock,
    removeStock,
    addToList,
    removeFromList
}

export default connect(null, mapDispatchToProps)(StockList);