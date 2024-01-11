import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CommonEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align', 'color', 'background',
  ];

  return (
    <div style={{ height: "650px" }}>
      <ReactQuill
        style={{ height: "600px" }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value || ''}
        placeholder={'내용을 입력해주세요.'}
        onChange={(content, delta, source, editor) => onChange(editor.getHTML())}
      />
    </div>
  );
};

export default CommonEditor;
