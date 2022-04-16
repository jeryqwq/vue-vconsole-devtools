import be from './backend'
import injectString from './inject.txt'
// import hookString from './hook.txt'
// import { installHook } from '@back/hook'
// require('@back/hook')
// require('@back')
// installHook(window)
// injectHook(hookString)
// let file = `<div id='app'>GeeksForGeeks</div>`
let target;
let targetWindow;
const initPlugin = function(el) {
  target = el
  const script = target.contentWindow.document.createElement('script')
  script.text = injectString
  target.contentWindow.document.body.appendChild(script)
  targetWindow = target.contentWindow;
  be.initBackendWithTargetWindow(window,targetWindow);
  target.__vdevtools__injected = true
  const div = target.contentWindow.document.createElement("div") 
  div.setAttribute("id","app")
  target.contentWindow.document.body.appendChild(div)
  
}
export default {
  initPlugin
}
