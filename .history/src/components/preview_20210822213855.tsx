import { FC } from 'react';


interface PreviewProps {
  code: string
}


const Preview: FC<PreviewProps>  = ({code}) => {
  return (
    <iframe/>
  )
}

export default Preview;