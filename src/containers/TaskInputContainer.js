import { connect } from 'react-redux';
import { addTask } from '../actions';
import TaskInput from '../components/TaskInput';


const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEnter: (description) => {
      dispatch(addTask(description));
    },
  };
};

const TaskInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskInput);

export default TaskInputContainer;
