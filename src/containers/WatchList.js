import { connect } from "react-redux";
import WatchList from "Components/MyStocks/WatchList";

const mapStateToProps = (state) => ({
    buyList: state.buyList,
});

export default connect(mapStateToProps)(WatchList);