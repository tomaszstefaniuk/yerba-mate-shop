import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  //title: state.app.title,
  //subtitle: state.loginData.logIn,
});

export default connect(mapStateToProps)(Home);
