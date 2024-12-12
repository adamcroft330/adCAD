const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: 'javascript',
    lineNumbers: true,
    theme: 'default',
});

function initEditor(onChange) {
    editor.on('change', () => {
      onChange(editor.getValue());
    })
}
