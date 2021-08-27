import { useTypedSelector } from '../hooks/use-typed-selector';



const CellList: React.FC = () => {
  const cells = useTypedSelector(({cells: {order, data}}) => {
    return order.map((id) => {
      console.log(typeof data[id])
      return data[id]
    })
  })
  return (
    <div>
      Cell List
    </div>
  )
}

export default CellList;