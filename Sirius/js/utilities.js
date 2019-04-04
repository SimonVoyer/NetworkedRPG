//source: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
const clearChildren = node => {
	while (node.firstChild){
		node.removeChild(node.firstChild);
	}
}