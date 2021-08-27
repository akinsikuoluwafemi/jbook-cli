
interface CellListItemProps {
  cell: string{}
}

const CellListItem: React.FC<CellListItemProps> = ({cell}) => {
  return (
    <div>
      Cell List Item
    </div>
  )
}

export default CellListItem;