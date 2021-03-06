import './resizable.css';
import { useEffect, useState} from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({direction, children}) => {
  let resizableProps: ResizableBoxProps;

  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth * 0.75);



  useEffect(() => {

    let timer: any;

    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
      }, 100);
      
    };
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);

    }
  }, []);

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      resizeHandles: ['e'],
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      width,
      height: Infinity,
      onResizeStop: (event, data) => {
        console.log(data)
        setWidth(data.size.width)
      }
    }
  } else {
    resizableProps = {
      resizeHandles: ['s'],
      maxConstraints: [Infinity, innerHeight * 0.9],
      minConstraints: [Infinity, 24],
      width:  Infinity,
      height:  300
    }
  }

  return (
    <ResizableBox {...resizableProps}  >{children}</ResizableBox>
  )
};

export default Resizable;