export default class BynarySearchTree {
  root;

  constructor(){}

  insert(node) {
    this.root = this.insertHelper(this.root, node);
  }

  insertHelper(root, node) {
    const data = node.data;

    if (root == null) {
      root = node;
      return root;
    } else if (data < root.data) {
      root.left = this.insertHelper(root.left, node);
    } else {
      root.right = this.insertHelper(root.right, node);
    }

    return root;
  }

  display() {
    this.displayHelper(this.root);
  }

  displayHelper(root) {
    if (root !== null) {
      this.displayHelper(root.left);
      console.log(root.data);
      this.displayHelper(root.right);
    }
  }

  search(data) {
    return this.searchHelper(this.root, data);
  }

  searchHelper(root, data) {
    if (root === null) {
      return false;
    } else if (root.data === data) {
      return true;
    } else if (root.data > data) {
      return this.searchHelper(root.left, data);
    } else {
      return this.searchHelper(root.right, data);
    }
  }

  remove(data) {
    if (this.search(data)) {
      this.removeHelper(this.root, data);
    } else {
      console.log(`${data} could not be found`);
    }
  }

  removeHelper(root, data) {
    if (root === null) {
      return root;
    } else if (data < root.data) {
      root.left = this.removeHelper(root.left, data);
    } else if (data > root.data) {
      root.right = this.removeHelper(root.right, data);
    } else {
      if (root.left === null && root.right === null) {
        root = null;
      } else if (root.right !== null) {
        root.data = this.successor(root);
        root.right = this.removeHelper(root.right, root.data);
      } else {
        root.data = this.predecessor(root);
        root.left = this.removeHelper(root.left, root.data);
      }
    }

    return root;
  }

  successor(root) {
    root = root.right;
    while (root.left != null) {
      root = root.left;
    }
    return root.data;
  }

  predecessor(root) {
    root = root.left;
    while (root.right != null) {
      root = root.right;
    }
    return root.data;
  }
}
