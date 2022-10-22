import { connect } from "react-redux";
import StockList from "Components/Dashboard/StocksList/TableItem";
import { addStock } from "../reducers/watchListSlice";

const mapDispatchToProps = {
    addStock,
}

export default connect(null, mapDispatchToProps)(StockList);