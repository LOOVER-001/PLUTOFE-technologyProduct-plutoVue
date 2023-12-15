/**
 * Pluto：VuePluto全局变量
 */

const html =
'<div>'+
    '<span>hello world<span/>'+
'<div/>'

const obj = Pluto.Compiler(html)

Pluto.Render(obj, document.body)
