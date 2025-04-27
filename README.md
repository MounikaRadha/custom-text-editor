## walkthrough
- flow starts at index.html->main.jsx->app.jsx
- here we call a hook which adds event listner for key presses
- we handle 2 cases of key presses
- one is cmd+shift+8 for making selected text bold,cmd+shift+9 for italic
- another is key sequences
- when we press / ,we open the pallate so when user selects text,presses / and then b ,we make text as bold
- all the function handlers are defined in one central place
- they can be called either from this key board shortcut place or when user manually press the button in the top editing bar
- we take a div ,make it editable
- we select text and call document.exec command which would change the markup of the text


## resources
- https://vite.dev/guide/
- npm create vite@latest my-react-app -- --template react
- https://tailwindcss.com/docs/installation/using-vite
- https://stackoverflow.com/questions/60581285/execcommand-is-now-obsolete-whats-the-alternative