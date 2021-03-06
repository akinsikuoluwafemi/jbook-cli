import {useRef } from 'react';
import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import prettier from 'prettier';
import parser from 'prettier/parser-babel';



interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}



const CodeEditor: React.FC<CodeEditorProps> = ({onChange, initialValue }) => {
  
  const editorRef = useRef<any>();

  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue())
    });
    monacoEditor.getModel()?.updateOptions({tabSize: 2})
  }

  const onFormatClick = () => {
    // get current value from editor
    const unformatted = editorRef.current.getModel().getValue();

    // format that value
    const formatted = prettier.f
    // set the formatted value back in the editor
  }
  
  return (
    <div>
        <button onClick={onFormatClick}>Format</button>
      <MonacoEditor
          editorDidMount={onEditorDidMount}
          value={initialValue}
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
    </div>
  ) 
};


export default CodeEditor;