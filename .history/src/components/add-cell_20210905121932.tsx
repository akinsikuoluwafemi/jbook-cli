import './add-cell.css';
import { FC } from 'react';
import { useActions } from '../hooks/use-actions';


interface AddCellProps {
  nextCellId: string | null;
}

const AddCell: FC<AddCellProps> = ({nextCellId}) => {
 const {insertCellBefore} = useActions()

  return (
    <div className="add-cell">
      <div className="add-buttons">
        <button className="button is-rounded is-primary" onClick={() => insertCellBefore(nextCellId, 'code')}>Code</button>
        <button onClick={() => insertCellBefore(nextCellId, 'text')}>Text</button>
      </div>

      <div className="divider"></div>

    </div>
  )
}

export default AddCell;