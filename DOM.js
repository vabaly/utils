// DOM => HTML
function DOMToHTML (node) {
    let result = ''
    const rawContent = Array.from(node.childNodes).reduce((result, node) => {
        result += node.outerHTML
        return result
    }, result)

    return rawContent.replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

// HTML => DOM
function HTMLToDOM (doc) {
    // HTML 字符串处理
    let validDoc = doc.replace(/[\n\t\v\f]/g, '')
    let div = document.createElement('div')
    div.innerHTML = validDoc
    return div
}

// 除去 DOM 子树中无属性、无子元素、无内容的标签
function cleanNode (node) {
    /**
     * 是否是自己想要的节点
     * @param {Object} node 节点
     * 
     * @return {boolean} 是或否
     */
    function isValidNode (node) {
        // 1. 文本节点留下
        return node.nodeType === Node.TEXT_NODE ||
            // 2. 元素节点则需要进一步处理
            node.nodeType === Node.ELEMENT_NODE && (
                // 2.1 有子节点的留下
                node.childNodes.length ||
                // 2.2 有属性的留下
                node.attributes.length
            )
    }

    if (node.hasChildNodes()) {
        Array.from(node.childNodes).forEach(childNode => {
            if (!isValidNode(childNode)) {
                node.removeChild(childNode)
            } else {
                cleanNode(childNode)
            }
        })
    }
}

