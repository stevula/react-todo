import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Filter from '../components/Filter';


const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter));
    },
  };
};

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);

export default FilterContainer;
