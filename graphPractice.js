class graph {
	constructor(value) {
		this.value = value;
		this.next = null;

	}

	add(value){
		if(this.next === null) {
			this.next = new graph(value)
			return;
		}
		while(this.next !== null) {
			if(this.next.next === null) {
				this.next.next = new graph(value)
				return;
			}
			this = this.next
		}
	}
}

var newGraph = new graph(3);
// console.log(newGraph)
newGraph.add(4)
newGraph.add(5)
newGraph.add(6)
newGraph.add(7)


console.log('print', newGraph)
