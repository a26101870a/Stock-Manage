import { connect } from "react-redux";
import Table from "Components/Dashboard/StocksList/Table";
import { addToList, removeFromList } from "../reducers/pointerListSlice";

const mapStateToProps = (state) => ({
    pointerList: state.pointerList,
});

const mapDispatchToProps = {
    addToList,
    removeFromList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);