# Cracking the Coding Interview Notes


## Big O

Used to describe the runtime and space complexity of an algorithm.

**Big O, Big Theta, Bit Omega**

In academics, there are actually three "Bigs". In software development, usually only Big O is of importance.

- **Big O** Describes the upper bound on the time.
- **Big Omega** Describes the lower bound on the time.
- **Big Theta** It means both Big O and Big Ω. That is, an algorithm is Θ(N) if it is both O(N) and Ω(N).

**Best Case, Worst Case, and Expected Case**

These are the three ways the runtime for an algorithm can be described.

## Facts

- Recursive algorithms take at least O(n) space, where n i sthe depth of the recursive call.
- All recursive algorithms _can_ be implemented iteratively.

## Interview Questions

### Arrays and Strings

1.1 **Is Unique**

- Implement an algorithm to determine if a string has all unique characters.

1.2 **Check Permutations**

- Given two strings, write a method to decide if one is a permutation of the other.

1.3 **URLify**

- Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

1.4 **Palindrome Permutation**

- Given a string, write a function to check if it is a permutation of a palindrome.

1.5 **One Away**

- There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

1.6 **String Compression**

- Implement a method to perform basic string compression using the counts of repeated characters. For example, the string `aabcccccaaa` would become `a2b1c5a3`. If the compressed string would not become smaller, your method should return the original string.

1.7 **Rotate Matrix**

- Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

1.8 **Zero Metrix**

- Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

1.9 **String Rotation**

- Assume you have a method `isSubstring` which checks if one word is a substring of another. Given two strings, `s1` and `s2`, write code to check if `s2`, is a rotation of `s1` using only one call to `isSubstring` (e.g., "waterbottle" is a rotation of "erbottlewat").

### Linked Lists

2.1 **Remove Dups**

- Write code to remove duplicates from an unsorted linked list.
- How would you solve this problem if a temporary buffer is not allowed?

2.2 **Return Kth to Last**

- Implement an algorithm to find the kth to last element of a singly linked list.

2.3 **Delete Middle Node**

- Implement an algorithm to delete a node in the middle (not necessarily the exact middle) of singly linked list, given only access to that node.

2.4 **Partition**

- Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained with the list, the values of x only need to be after the elements less than x. The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

2.5 **Sum Lists**

- You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

2.6 **Palindrome**

- Implement a function to check if a linked list is a palindrome.

2.7 **Intersection**

- Given two (singly) linked lists, determine if the two lists intersect. Returen the intersecting node. Note that the intersection is defined based on reference, not value.

2.8 **Loop Detection**

- Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
