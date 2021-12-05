# Tree

- A linked list is actually a form of a tree. It's just a tree that doesn't fork.
- A binary tree is going to have tow arrows, so this is going to look.
- A binary tree have a left and right arrow. There's no rule that a tree has to be binary, you could have it point to three items or 10 items or however many you want.

## Terminology

- **Full tree:** every item either points to two nodes or zero nodes.
- **Perfect tree:** every line is completely filled all the way across.
- **Complete tree:** every item either points to one nodes or two node or zero nodes.

So a perfect tree will always be full. It will always be complete.

- **Parent:** Every child node has one and only one parent. You can't have more than one parent in a tree.
- **Children:** Child node can also be parents of two nodes.
- **Leaf:** A node that doesn't have any children is called a leaf.
- **Siblings:** Two children, because they have the same parent, are also called siblings.

## Binary Search Trees (BST)

I want to point out here is that all of the items to the rigth of the `head` are greater than `head`. All of the items to the left are less than. And then also if you look at another node, everything to the left of it is going to be less than and everything to the right is going to greater than. This is structure of binary search trees.

### Big O

**Number of all tree nodes:** 2 ^ number of levels - 1
For example:
**One node:** 2 ^ 1 - 1 = 1
**Two node in level two:** 2 ^ 2 - 1 = 3
**Level three:** 2 ^ 3 - 1 = 3
**Level four:** 2 ^ 4 - 1 = 15

The minus one is irrelevant, so i'm just going to remove this and will say this is approximately: `2 ^ number of levels`

O(log n) is very efficient. and the term that we used with O of log n was divide and conquer.
