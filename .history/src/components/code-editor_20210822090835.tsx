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

    </div>
  ) 
};


export default CodeEditor;