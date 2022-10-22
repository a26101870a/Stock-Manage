import { connect } from "react-redux";
import Table from "Components/Dashboard/StocksList/Table";
import { addToList, removeFromList } from "../reducers/stockListSlice";

const mapStateToProps = (state) => ({
    toBuyList: state.stockList,
});

const mapDispatchToProps = {
    addToList,
    removeFromList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);