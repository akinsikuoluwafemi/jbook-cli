import { useState } from 'react';

import MDEditor from '@uiw/react-md-editor';

 
const TextEditor: React.FC = () => {
  const [editing, setEditing] = useState(false);
  
  if(editing)

  return (
    <div>
      <MDEditor.Markdown source={'# Header'}/>
    </div>
  )
}

export default TextEditor;