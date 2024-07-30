import { connect } from "react-redux";
import {action} from "./action/action";

const App = (props) => {
  return (
    <div>
      <h4>the count is {props.increment}</h4>
      <button onClick={props.action}>Click Me</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
  increment : state.increment
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: () => dispatch(action()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
