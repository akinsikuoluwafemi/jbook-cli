import './resizable.css';
import { useEffect} from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({direction, children}) => {
  let resizableProps: ResizableBoxProps;

  useEffect(() => {
    const listener = () => {
      console.log(window)
    }
  }, []);

  if (direction === 'horizontal') {
    
    resizableProps = {
      className: 'resize-horizontal',
      resizeHandles: ['e'],
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