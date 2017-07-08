import { connect } from 'react-redux';
import { deleteTask, toggleTaskActive } from '../actions';
import Task from '../components/Task';


const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickComplete: () => {
      dispatch(toggleTaskActive(ownProps.id));
    },
    onClickDelete: () => {
      dispatch(deleteTask(ownProps.id));
    },
  };
};

const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);

export default TaskContainer;
