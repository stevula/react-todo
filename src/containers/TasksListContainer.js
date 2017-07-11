import { connect } from 'react-redux';
import { setFilter, toggleAll } from '../actions';
import TasksList from '../components/TasksList';


const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks.filter((t) => {
      if (state.filter === 'active') return t.active;
      if (state.filter === 'complete') return !t.active;
      return true;
    }),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickToggleAll: () => {
      dispatch(toggleAll())
    },
  };
};


const TasksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksList);

export default TasksListContainer;
