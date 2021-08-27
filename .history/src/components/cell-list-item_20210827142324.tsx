import {Cell } from '../state';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({cell}) => {
  return (
    <div>
      {cell.}
    </div>
  )
}

export default CellListItem;