import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';



const CellList: React.FC = () => {
  const cells = useTypedSelector(({cells: {order, data}}) => {
    return order.map((id) => {
      return data[id]
    })
  })

  const renderedCells = cells.map(cell => (
    <>
      <AddCell/>
      <CellListItem key={cell.id} cell={cell}/>  
    </>
  ))

  return (
    <div>
      {renderedCells}
    </div>
  )
}

export default CellList;