import BynarySearchTree from "./BinarySearchTree.mjs";
import Node from "./Node.mjs";

const binarySearchTree = new BynarySearchTree();

binarySearchTree.insert(new Node(1));
binarySearchTree.insert(new Node(2));
binarySearchTree.insert(new Node(3));
binarySearchTree.insert(new Node(4));
binarySearchTree.insert(new Node(5));
binarySearchTree.insert(new Node(6));

console.log("Print all nodes: ");
binarySearchTree.display();

console.log(`Search value 3: ${binarySearchTree.search(3)}`);
console.log(`Remove value 5`);
binarySearchTree.remove(5);

console.log("Print new modified nodes: ");
binarySearchTree.display();