import { connect } from 'react-redux';
import { setFilter, toggleAll, deleteInactive } from '../actions';
import TasksList from '../components/TasksList';


const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks.filter((task) => {
      if (state.filter === 'active') return task.active;
      if (state.filter === 'inactive') return !task.active;
      return true;
    }),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickToggleAll: () => {
      dispatch(toggleAll());
    },
    onClickClearInactive: () => {
      dispatch(deleteInactive());
    },
  };
};

const TasksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksList);

export default TasksListContainer;
