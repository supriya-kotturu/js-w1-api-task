# Copy by value Vs Copy by reference

<br/>

| COPY BY VALUE                                                              | COPY BY REFERENCE                                                                           |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **primitive datatypes** are copied "as a whole value"                      | **non-primitive datatypes** are copied by reference                                         |
| number, string, boolean, etc.                      for                         | objects                                                                                     |
| ![copy by value](images/../XHR-request/images/copyByVal.png)               | ![copy by reference](images/../XHR-request/images/copyByRef.png)                            |
| If any of the two variables is changed the change doesnt reflect the other | Any change to one object modifies the other, since they are sharing the same memory address |

<br/>

## Note

A variable assigned to an **object** stores not the object itself, but its “address in memory” – in other words “a reference” to it.

When we perform actions with the object, e.g. take a property `user.name`, the JavaScript engine looks at what’s at that address and performs the operation on the actual object.

<br>
<br>
<br>

# How to copy by value a composite data type (array + object)

Copying an object variable creates one more reference to the same object. How to create an independent copy, a clone of the object?

<br>

## Deepcopy for Objects

We need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them on the primitive level

![copy by itterating](images/copyCompositeDataType-1.png)

We have the same employee object with its respective keys and values

![copy by itterating - result](images/copyCompositeDataType-2.png)

<br/>

Now, lets try changing the value of one object

![modifying the copy](images/copyCompositeDataType-3.png)

As we can see, none of the properties of the original are getting disturbed

![modifying the copy - result](images/copyCompositeDaatType-4.png)


### Object.assign()

We can use the method Object.assign() which returns the deep copy of an object

![copy using Object.assign()](images/objAssign-1.png)

We can also clone nested object as follows

![copy nested object using Object.assign()](images/objAssign-2.png)


<br>

## Shallow copy for Arrays

The same itterative process can be used to copy Arrays as follows,

![copy list](images/listCopy-1.png)

We have the same elements with its respective to the original list

![copy list - result](images/listCopy-2.png)

Now, lets change the values for the object inside the copy 

![change list Object](images/listCopy-3.png)

As we can see, even the object in the original list is getting modified

![change list Object - result](images/listCopy-4.png)

## Spread Operator - For Deep copying both Objects and Arrays

To overcome this drawback, ES6 has introduced the spread operator `...` to perform deep copy of composite objects



