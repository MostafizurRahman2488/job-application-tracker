## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:

| Method                     | Selects                                       | Returns                 |
| -------------------------- | --------------------------------------------- | ----------------------- |
| `getElementById()`         | An element by **id**                          | A single element        |
| `getElementsByClassName()` | All elements with a **class**                 | A live `HTMLCollection` |
| `querySelector()`          | The **first** element matching a CSS selector | A single element        |
| `querySelectorAll()`       | **All** elements matching a CSS selector      | A static `NodeList`     |


Key Differences

* **`getElementById()`**

  * Selects an element using its unique **id**.
  * Returns only **one** element.

* **`getElementsByClassName()`**

  * Selects all elements with the specified class.
  * Returns a **live HTMLCollection**, which updates automatically if the DOM changes.

* **`querySelector()`**

  * Accepts any valid **CSS selector** (`#id`, `.class`, `div`, etc.).
  * Returns only the **first** matching element.

* **`querySelectorAll()`**

  * Accepts any valid **CSS selector**.
  * Returns a **static NodeList** containing all matching elements.
  * It does **not** update automatically when the DOM changes.

  -------------------------------------------------------------------------------------------------------------

***How do you create and insert a new element into the DOM?
Answer-2:

To create and insert a new element into the DOM, you use these steps:

1. Create the element using `document.createElement()`.
2. Add content or attributes to the element.
3. Insert it into the DOM using methods like `appendChild()`, `append()`, or `prepend()`.

--------------------------------------------------------------------------------------------------------------------------

### 3. What is Event Bubbling? And how does it work?
Answer-3:

**Event Bubbling** is a mechanism in JavaScript where an event starts from the **target (child) element** and then propagates **upward through its parent elements** until it reaches the `document`.




### Output when the button is clicked

```text
Button clicked
Parent clicked
```

### How it works

When you click the **button**:

1. The click event occurs on the **button** (target element).
2. The event then **bubbles up** to its parent `<div>`.
3. It continues bubbling up to `<body>`, `<html>`, and finally the `document`.

```
Button
   ↑
Parent Div
   ↑
Body
   ↑
HTML
   ↑
Document
```

### Why is Event Bubbling useful?

It allows you to use **Event Delegation**, where you attach a single event listener to a parent element instead of adding listeners to every child.


-------------------------------------------------------------------------------------------------------------------------
### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer-4:
Event Delegation is a technique where you attach one event listener to a parent element instead of adding event listeners to each child element. It works because of Event Bubbling.


Why is Event Delegation useful?
Improves Performance: Only one event listener is added instead of many.
Works with Dynamic Elements: Newly added child elements automatically work without adding new event listeners.
Cleaner Code: Less code to write and maintain.
Uses Event Bubbling: Events bubble from the child to the parent, allowing the parent to handle them.

--------------------------------------------------------------------------------------------------------------------------
### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?
Answer-5:

Both methods are used in JavaScript event handling, but they serve different purposes.

| Method              | Purpose                                                            |
| ------------------- | ------------------------------------------------------------------ |
| `preventDefault()`  | Prevents the browser's default action for an event.                |
| `stopPropagation()` | Stops the event from bubbling up (or capturing down) the DOM tree. |

### 1. `preventDefault()`

It prevents the browser from performing its default behavior.


---

### 2. `stopPropagation()`

It stops the event from propagating (bubbling) to parent elements.



**Output when the button is clicked:**

```text id="z5r4za"
Button clicked
```

The parent's event listener does **not** execute because the event propagation is stopped.

---




