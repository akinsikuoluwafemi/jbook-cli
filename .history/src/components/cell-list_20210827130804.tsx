import { useTypedSelector } from '../hooks/use-typed-selector';



const CellList: React.FC = () => {
  useTypedSelector()
  return (
    <div>
      Cell List
    </div>
  )
}

export default CellList;