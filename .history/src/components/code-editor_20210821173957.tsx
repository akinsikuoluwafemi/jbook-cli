import MonacoEditor from "@monaco-editor/react";

interface CodeEditorProps {
  initial
}


const CodeEditor = () => {
  return <MonacoEditor
    value="const a = 1;"
    theme="dark"
    language="javascript"
    height="500px" options={{
    wordWrap: 'on',
    minimap: { enabled: false },
    showUnused: false,
    folding: false,
    lineNumbersMinChars: 3,
    fontSize: 16,
    scrollBeyondLastLine: false,
    automaticLayout: true,
  }} />
};


export default CodeEditor;