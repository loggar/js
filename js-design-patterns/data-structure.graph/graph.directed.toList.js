DirectedGraph.prototype.toList = function () {
  const nodes = Object.keys(this.adjacencies);
  const oneDistanceDestinations = [];
  const endNodes = [];
  const startNodes = [];
  const allStartEndPaths = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const adjs = this.adjacencies[node];
    Array.prototype.push.apply(oneDistanceDestinations, adjs);
    if (adjs.length < 1) {
      endNodes.push(nodes[i]);
    }
  }
  var uniqueOneDistanceDestinations = Array.from(
    new Set(oneDistanceDestinations)
  );
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!uniqueOneDistanceDestinations.includes(node)) {
      startNodes.push(node);
    }
  }
  for (let i = 0; i < startNodes.length; i++) {
    const node = startNodes[i];
    for (let j = 0; j < endNodes.length; j++) {
      const paths = this.findAllPath(node, endNodes[j]);
      for (let k = 0; k < paths.length; k++) {
        allStartEndPaths.push(paths[k]);
      }
    }
  }
  return allStartEndPaths;
};

DirectedGraph.factoryPrerequisiteRequired = function (
  graphBase,
  enrolledSubjects
) {
  const g = graphBase.graph;
  const v = graphBase.vertexDetails;
  const allStartEndPaths = g.toList();
  const allStartEndDetailPaths = allStartEndPaths.map(function (arr) {
    const tmp = [];
    for (let i = 0; i < arr.length; i++) {
      tmp.push(v[arr[i]]);
    }
    return tmp;
  });
  for (let i = 0; i < allStartEndDetailPaths.length; i++) {
    const p = allStartEndDetailPaths[i];
    for (let j = 0; j < p.length; j++) {
      p[j].passed = fn_grades.isPassedSubject(p[j].sbjIdx, enrolled);
    }
  }
  const allPathEndWithRequired = [];
  for (let i = 0; i < allStartEndDetailPaths.length; i++) {
    const p = allStartEndDetailPaths[i];
    for (let j = p.length - 1; j >= 0; j--) {
      if (p[j].requiredYn === "Y") {
        allPathEndWithRequired.push(p.slice(0, j + 1));
        break;
      }
    }
  }
};
