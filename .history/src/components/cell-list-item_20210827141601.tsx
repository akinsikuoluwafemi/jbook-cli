import {} from '.'

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({cell}) => {
  return (
    <div>
      Cell List Item
    </div>
  )
}

export default CellListItem;