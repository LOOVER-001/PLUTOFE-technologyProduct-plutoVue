var Pluto = (function(exports) {

    // Render函数
    exports.Render = (obj, root) => {
        const el = document.createElement(obj.tag)
        if(typeof obj.children === 'string') {
            const text = document.createTextNode(obj.children)
            el.appendChild(text)
        }else if(obj.children){
            obj.children.forEach(child => {
                exports.Render(child,el)
            })
        }

        root.appendChild(el)
    }

    // 编译函数
    exports.Compiler = function(params) {
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

    // warn函数
    exports.warn = function(params) {
        console.warn(params)
    }

    return exports
}({}))