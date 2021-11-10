# Linked List

Linked list have a variable called **`head`** that points to the first item and one called **`tail`**, that points to the last item. Then each item in the linked list points to the next. The last item points to null that commonly called `null terminated`.

**Linked List vs Array**

- One of the things that array have that linked list don't, are indexes.
- Arrays are in contiguous places in memory, but linked lists aren't they can be all over the place.

## Big O

- **Push:** O(1)
- **Pop:** O(n) - because we have to start at the `head` and iterate through the entire list. To finally get to this point and set `tail`.
- **Unshift:** O(1)
- **Shift:** O(1)
- **Insert:** O(n) - because we have to start at the `head` and iterate through the entire list to be able to the point where we were going to insert it.
- **Remove:** O(n) - because once again, we have to iterate through the entire list.
- **Looking by index:** O(n) - because we have to iterate through the entire list.
- **Looking by value:** O(n) - because we have to iterate through the entire list.

## Useful link

- [Big-O Linked List vs Array](../assets/files/BigO.pdf)
