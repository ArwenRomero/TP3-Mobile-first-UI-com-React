import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, newTask, setNewTask, ident_AddTask, setTasks }) => {
  const handleTaskDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter(task => task.text !== taskToDelete.text);
    setTasks(updatedTasks);
  };

  const handleTaskUpdate = (oldTask, newTaskText) => {
    const updatedTasks = tasks.map(task => 
      task === oldTask ? { ...task, text: newTaskText } : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskCompleteToggle = (taskToToggle) => {
    const updatedTasks = tasks.map(task => 
      task === taskToToggle ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={ident_AddTask}>Adicionar</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onTaskDelete={handleTaskDelete}
            onTaskUpdate={handleTaskUpdate}
            onTaskCompleteToggle={handleTaskCompleteToggle}
          />
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  newTask: PropTypes.string.isRequired,
  setNewTask: PropTypes.func.isRequired,
  ident_AddTask: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TodoList;
