//import './styles.scss'

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import {FaBold, FaCode, FaHeading, FaItalic, FaListOl, FaListUl, FaQuoteLeft, FaRedo, FaStrikethrough, FaUnderline, FaUndo} from "react-icons/fa";
import Underline from '@tiptap/extension-underline';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="menu-bar"> 
    <div>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <FaUnderline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <FaStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        <FaCode />
      </button>
      
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <FaHeading />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <FaQuoteLeft />
      </button>
      </div>
      <div> 
      <button onClick={() => editor.chain().focus().undo().run()}>

        <FaUndo /> 
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <FaRedo />
      </button>
      </div>
    </div>
  );
};
//export default
 const TipTap = ({setDesc}) => {
  const editor = useEditor({
    extensions: [
      StarterKit, Underline
    ],
    content: ``,
    onUpdate: ({editor}) => {
        const html = editor.getHTML()
        setDesc(html);
    }
  })

  return (
    <div className='text-editor'>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
export default TipTap;