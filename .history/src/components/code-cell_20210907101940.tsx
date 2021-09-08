import './code-editor.css';
import { useEffect} from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';


interface CodeCellProps {
  cell: Cell
}



const CodeCell: React.FC<CodeCellProps> = ({cell}) => {
  // console.log(cell);
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => {
    // console.log(state.bundles);
    // console.log(cell.id)
   return state.bundles[cell.id]
  });
  console.log(bundle);

  useEffect(() => {
    const timer = setTimeout( async ()  => {
      createBundle(cell.id, cell.content)
    }, 750);
    return () => {
      clearTimeout(timer);
    }
  },[cell.content, cell.id])
  

 

  
  
  return (
    <Resizable direction="vertical">
        <div style={{height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row'}}>
            <Resizable direction="horizontal">
              <CodeEditor initialValue={cell.content}
            onChange={(value) => {
              updateCell(cell.id, value)
                }}
            />
            </Resizable>
            
            
            
            {bundle && }

          </div>
    </Resizable>

  ) 
};



export default CodeCell;

