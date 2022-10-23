import { connect } from "react-redux";
import StockListTableItem from "Components/Dashboard/StocksList/Table/Body/Item";
import { addStock, removeStock } from "../reducers/watchListSlice";
import { addToList, removeFromList } from "../reducers/stockListSlice";

const mapDispatchToProps = {
    addStock,
    removeStock,
    addToList,
    removeFromList
}

export default connect(null, mapDispatchToProps)(StockListTableItem);