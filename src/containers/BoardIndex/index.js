import { connect } from "react-redux";
import StockListTableItem from "Components/Dashboard/BoardIndex";
import { addToboardList, removeFromboardList } from "../../reducers/pointerListSlice";

const mapStateToProps = (state) => ({
    pointerList: state.pointerList.boardList,
});

const mapDispatchToProps = {
    addToboardList,
    removeFromboardList,
}

export default connect(mapStateToProps, mapDispatchToProps)(StockListTableItem);