import './add-cell.css';
import { FC } from 'react';
import { useActions } from '../hooks/use-actions';


interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: FC<AddCellProps> = ({nextCellId, forceVisible}) => {
 const {insertCellAfter } = useActions()

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-buttons">
        <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(nextCellId, 'code')}> <span className="icon is-small"> <i className="fas fa-plus"/> </span> <span>Code</span></button>
        <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(nextCellId, 'text')}> <span className="icon is-small"> <i className="fas fa-plus"/> </span> <span>Text</span></button>
      </div>

      <div className="divider"></div>

    </div>
  )
}

export default AddCell;