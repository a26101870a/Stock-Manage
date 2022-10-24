import { connect } from "react-redux";
import WatchList from "Components/MyStocks/WatchList";

const mapStateToProps = (state) => ({
    toBuyList: state.toBuyList,
});

export default connect(mapStateToProps)(WatchList);