import { connect } from 'react-redux';
import GenerateView from '../components/GenerateView';

const mapStatetoProps = state => ({
  page: state.get('genPage'),
});

const mapDispatchtoProps = () => ({});

const GenerateContainer = connect(
  mapStatetoProps,
  mapDispatchtoProps,
)(GenerateView);

export default GenerateContainer;
