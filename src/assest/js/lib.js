function Render(obj, root) {
    const el = document.createElement(obj.tag)
    if(typeof obj.children === 'string') {
        const text = document.createTextNode(obj.children)
        el.appendChild(text)
    }else if(obj.children){
        obj.children.forEach(child => {
            Render(child,el)
        });
    }

    root.appendChild(el)
}

function Compiler(params) {
    // TODO 将模板编译为树形结构
    return {
        tag: 'div',
        children: [
            {
                tag: 'span',children: 'hello world'
            }
        ]
    }
}

/**
 * warn函数
 * @param {框架错误信息} params 
 */
function warn(params) {
    console.warn(params)
}