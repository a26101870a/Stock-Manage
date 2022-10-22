import { connect } from "react-redux";
import StockList from "Components/Dashboard/StocksList/TableItem";
import { addStock, removeStock } from "../reducers/watchListSlice";

const mapDispatchToProps = {
    addStock,
    removeStock,
}

export default connect(null, mapDispatchToProps)(StockList);