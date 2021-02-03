import React, { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'

function Editor() {
	useEffect(() => {
		const editor = new EditorJS({
			holder: 'editorjs',
			tools: {
				header: {
					class: Header,
					inlineToolar: ['link'],
					shortcut: 'CMD+SHIFT+H',
				},
			},
			data: {
				
			},
			autofocus: true,
			placeholder: 'Let`s write an awesome article!',
			
		})	
	})
	
	return (
		<div id="editorjs" className="bg-white container mx-auto mt-10">
			
		</div>
	)
}

export default Editor