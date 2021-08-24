import './resizable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({direction, children}) => {
  let resizableProps: ResizableBoxProps;

  if (direction === 'horizontal') {
    
    resizableProps = {
      resizeHandles: ['s'],
      maxConstraints: [Infinity, Infinity],
      minConstraints: [window.in, Infinity],
      width:  Infinity ,
      height:  300
    }
  } else {
    resizableProps = {
      resizeHandles: ['s'],
      maxConstraints: [Infinity, window.innerHeight * 0.9],
      minConstraints: [Infinity, 24],
      width:  Infinity ,
      height:  300
    }
  }

  return (
    <ResizableBox {...resizableProps}  >{children}</ResizableBox>
  )
};

export default Resizable;