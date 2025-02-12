export function addDebugger() {
  window.addEventListener('keypress', (event)=> {
    if(event.key == '`' || event.key == 'ё') debugger;
  })
}