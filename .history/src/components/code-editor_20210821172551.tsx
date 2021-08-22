import MonacoEditor from "@monaco-editor/react";


const CodeEditor = () => {
  return <MonacoEditor theme="dark" language="javascript" height="500px" options={{
    wordWrap: 'on',
    minimap: {enabled: false},
  }} />
};


export default CodeEditor;