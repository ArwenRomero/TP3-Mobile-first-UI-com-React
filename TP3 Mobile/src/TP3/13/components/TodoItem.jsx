import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoItem = ({ task, onTaskDelete, onTaskUpdate, onTaskCompleteToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    onTaskUpdate(task, editText);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setEditText(event.target.value);
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Salvar</button>
        </>
      ) : null}

      {!isEditing ? (
        <>
          <span>{task.text}</span>
          <button onClick={handleEditClick}>Editar</button>
          <button onClick={() => onTaskDelete(task)}>Deletar</button>
          <button onClick={() => onTaskCompleteToggle(task)}>
            {task.completed ? 'Desconcluir' : 'Concluir'}
          </button>
        </>
      ) : null}
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onTaskCompleteToggle: PropTypes.func.isRequired,
};

export default TodoItem;
