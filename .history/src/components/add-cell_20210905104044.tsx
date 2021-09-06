import './add-cell.css';
import { FC } from 'react';
import { useActions } from '../hooks/use-actions';
im


interface AddCellProps {
  nextCellId: string;
}

const AddCell: FC<AddCellProps> = ({nextCellId}) => {
 const {insertCellBefore} = useActions()

  return (
    <div>
      <button onClick={() => insertCellBefore(nextCellId)}>Code</button>
      <button>Text</button>

    </div>
  )
}

export default AddCell;