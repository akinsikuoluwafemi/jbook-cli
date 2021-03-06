import { useActions } from '../hooks/use-actions';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({id}) => {
  
  const { moveCell, deleteCell } = useActions();
  

  return (
    <div>
      <button className="button is-primary is-small" onClick={() => moveCell(id, 'up')}>
        <span className="icon">
          <i className="fas fa-arrow-up"/>
        </span>
      </button>
      <button className="button is-primary is-small" onClick={() => moveCell(id, 'down')}>
         <span className="icon">
          <i className="fas fa-arrow-down"/>
        </span>
      </button>
      <button onClick={() => deleteCell(id)}>
        <span className="icon">
          <i className="fas fa-arrow-down"/>
        </span>
      </button>
    </div>
  )
}

export default ActionBar;