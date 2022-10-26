import { connect } from "react-redux";
import BuyList from "Components/MyStocks/BuyList";

const mapStateToProps = (state) => ({
    buyList: state.buyList,
});

export default connect(mapStateToProps)(BuyList);