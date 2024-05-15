const graph = {
    A: { B: 1, C: 4 },      // Node A is connected to Node B with a weight of 1 and Node C with a weight of 4
    B: { A: 1, C: 2, D: 5 },  // ... and so on for other nodes
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

// findShortestPathAll will find shortest path between start node
// to all other nodes
const findShortestPathAll = (start) => {
  const distances = {};
  
  const allNodes = Object.keys(graph);
  const totalNodesCount = allNodes.length;
  
  for(const node of allNodes) {
    distances[node] = Infinity;
  }
  
  distances[start] = 0;
  
  let visitedNodes = new Set();
  
  while(allNodes.length > 0) {
    // first sort the allNodes by distance 
    allNodes.sort((a,b) => distances[a] - distances[b]);
    const closestNode = allNodes.shift();
    
    visitedNodes.add(closestNode);
    
    for(let neighbor in graph[closestNode]) {
      if (!visitedNodes.has(neighbor)) {
        let newDistance = distances[closestNode] + graph[closestNode][neighbor]
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
        }
      }
    }
  }
  
  console.log(distances);
  
  
}

findShortestPathAll("A");
