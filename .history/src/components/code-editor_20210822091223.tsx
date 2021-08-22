import MonacoEditor, {EditorDidMount} from "@monaco-editor/react";
import prettier from 'prettier';
import parser from 'prettier/parser-babel';



interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}



const CodeEditor: React.FC<CodeEditorProps> = ({onChange, initialValue }) => {
  
  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    console.log(getValue());
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue())
    });
    monacoEditor.getModel()?.updateOptions({tabSize: 2})
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