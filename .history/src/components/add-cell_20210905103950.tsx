import './add-cell.css';
import { FC } from 'react';
import { useActions} from '../hooks/use-actions';


interface AddCellProps {
  nextCellId: string;
}

const AddCell: FC<AddCellProps> = ({nextCellId}) => {
 const {insertCellBefore} = useActions()

  return (
    <div>
      <button>code</button>
      <button></button>

    </div>
  )
}

export default AddCell;