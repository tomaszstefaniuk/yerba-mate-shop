import {connect} from 'react-redux';
import LoginHeader from './LoginHeader';

const mapStateToProps = state => ({
  logIn: state.loginData.logIn,
});


export default connect(mapStateToProps)(LoginHeader);
