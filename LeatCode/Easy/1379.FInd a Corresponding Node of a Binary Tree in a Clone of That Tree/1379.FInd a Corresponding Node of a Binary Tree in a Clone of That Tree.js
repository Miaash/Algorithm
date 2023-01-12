/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
// 원본트리와 복사된 이진트리가 주어졌을때 원본 target 노드와 동일한 위치의 clone트리의 노드를 반환해야 함
// dfs 깊이우선탐색을 이용해서 해결
// 중위 순회를 통해 트리를 탐색해 나가며 타겟과 일치 할 경우 clone 트리의 해당 노드를 반환해줍니다.
// solution 1) 함수표현식
function getTargetCopy(original, cloned, target) {
  const dfs = (node) => {
    if (node) {
      if (node.val === target.val) return node;
      return dfs(node.left) || dfs(node.right);
    }
    return null;
  };
  return dfs(cloned);
}

// solution 2)
var getTargetCopy = function (original, cloned, target) {
  function tra(o, c) {
    if (!o) return;
    if (o === target) return c;
    return tra(o.left, c.left) || tra(o.right, c.right);
  }
  return tra(original, cloned);
};
