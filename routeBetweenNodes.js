// var graph = {
// 	'1': [4,2],
// 	'2': [1,5,3],
// 	'3': [2,4],
// 	'5': [2],
// 	'4': [1,3]
// }

// var routeBetweenNodes = function(obj, node1, node2) {
// 	var visited = [];
// 	result = false;
// 	function findNode(node1){
// 		console.log('visited ', node1)
// 		if(visited.indexOf(node1) === -1) {
// 			visited.push(node1);
// 		}
// 		if(node1 === node2){
// 			result = true;
// 			return;
// 		}
// 		for(var i=0; i < obj[node1].length; i ++) {
// 			if(visited.indexOf(obj[node1][i]) === -1){
// 				findNode(obj[node1][i])
// 			}
// 		}
// 	}
// 	findNode(node1)
// 	return result;
// }

// console.log(routeBetweenNodes(graph, 4, 5))


var routeBetween = function(graph, a, b, visited, result) {
	console.log(graph + " " + a + " " + b + " " + visited + " " + result + " ")
 var visited = visited || {}
 var result = result || false
 if (a === b) {
 		console.log('entered')
   result = true
 }
 if (!visited[a]){
   visited[a] = true
 }
 for (var i = 0; i < graph[a].length; i++) {
   if (!(graph[a][i] in visited)) {
     routeBetween(graph, graph[a][i], b, visited, result)
   }
 }
 return result
}

var graphData = {
 1: [2, 4, 5],
 2: [1, 3],
 3: [2, 4],
 4: [1, 3],
 5: [1]
}

console.log(routeBetween(graphData, 3, 5))

