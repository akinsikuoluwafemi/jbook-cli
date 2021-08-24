import './resizable.css';
import { ResizableBox } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({direction, children}) => {
  
  
  return (
    <ResizableBox resizeHandles={['s']} maxConstraints={[Infinity, window.innerHeight * 0.9]} minConstraints={[Infinity, 30]}  width={Infinity} height={direction === 'vertical' ? 300 : Infinity} >{children}</ResizableBox>
  )
};

export default Resizable;