function getElementsbyClassName(className, node, res){
	//create obj
	res = res || [];
	node = node || document.body;

	if(node.childNodes === 0) {
		return;
	}

	for(var i = 0; i < node.childNodes; i++) {
		if(node.childNodes[i].classList.contains(className)){
			res.push(node.childNodes[i]);
		} else {
			getElementsbyClassName(childNodes[i])
		}
	}
	return res;
}