import { connect } from "react-redux";
import Table from "Components/Dashboard/StocksList/Table/Body";

const mapStateToProps = (state) => ({
    pointerList: state.pointerList.stockList,
});

export default connect(mapStateToProps)(Table);