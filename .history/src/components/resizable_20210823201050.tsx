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
      minConstraints: [window.innerWidth * 0.2, Infinity],
      maxConstraints: [window.innerWidth * 0.75, Infinity],
      width:  window.innerWidth * 0.75,
      height:  Infinity
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