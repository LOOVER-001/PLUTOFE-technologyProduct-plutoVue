const html =
'<div>'+
    '<span>hello world<span/>'+
'<div/>'

const obj = Compiler(html)

Render(obj, document.body)
