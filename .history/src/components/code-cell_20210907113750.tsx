import './code-cell.css';
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
  // console.log(bundle);

 

  useEffect(() => {

    if (!bundle) {
      createBundle(cell.id, cell.content) //create the bundle and stop
      return;
    }


    const timer = setTimeout( async ()  => {
      createBundle(cell.id, cell.content)
    }, 750);
    return () => {
      clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cell.content, cell.id, createBundle])
  

 

  
  
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
            
            <div className="progress-wrapper">
        
        {
            !bundle || bundle.loading ? (
              <div className="progress-cover">
                <progress className="progress is-small is-primary" max="100">
                  Loading
                </progress>
              </div>
          )
            : <Preview code={bundle.code} err={bundle.err} />
        }
            </div>
            
            

          </div>
    </Resizable>

  ) 
};



export default CodeCell;

