import './resizable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({direction, children}) => {
  let resizableProps: ResizableBoxProps;

  if (direction === 'horizontal') {
    
    resizableProps = {
      
    }
  } else {
    resizableProps = {
      resizeHandles: ['s'],
      maxConstraints: [Infinity, window.innerHeight * 0.9],
      minConstraints: [Infinity, 30],
      width:  Infinity ,
      height:  300
    }
  }

  return (
    <ResizableBox  >{children}</ResizableBox>
  )
};

export default Resizable;