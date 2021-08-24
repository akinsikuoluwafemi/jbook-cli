import { ResizableBox } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({direction, children}) => {
  return (
    <ResizableBox width={200} height={200} >{children}</ResizableBox>
  )
};

export default Resizable;