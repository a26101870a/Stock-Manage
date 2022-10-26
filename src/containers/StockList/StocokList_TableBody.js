import { connect } from "react-redux";
import Table from "Components/Dashboard/StocksList/Table/Body";

const mapStateToProps = (state) => ({
    pointerList: state.pointerList,
});

export default connect(mapStateToProps)(Table);