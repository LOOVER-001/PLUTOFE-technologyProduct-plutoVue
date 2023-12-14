const obj = {
    tag: 'div',
    children: [
        {
            tag: 'span',children: 'hello world'
        }
    ]
}

Render(obj, document.body)
