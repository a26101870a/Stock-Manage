import { connect } from "react-redux";
import WatchList from "Components/MyStocks/WatchList";

const mapStateToProps = (state) => ({
    stockData: state.watchList,
});

export default connect(mapStateToProps)(WatchList);