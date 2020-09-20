import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'


//addons
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'

import {Controlled as ControlledEditor} from 'react-codemirror2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt,faExpandAlt} from '@fortawesome/free-solid-svg-icons'

export default function Editor({displayName,language,value,onChange}) {

    const handleChange=(editor,data,value)=>{
            onChange(value);

    }
    const [open,setOpen]= useState(true)

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                    {displayName}
                <button onClick={()=>setOpen(e=>!e)}><FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} /></button>
            </div>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    autoCloseBrackets:true,
                    autoCloseTags:true,
                    lineWrapping:true,
                    lint:true,
                    theme:'material',
                    mode:language,
                    lineNumbers:true,
                
                }}
            />
        </div>
    )
}
