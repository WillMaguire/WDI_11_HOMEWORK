# Fullslack lib

Writing our own library of useful functions

```
Fullslack.VERSION;
```
returns "1.0"

```
var list = [1,2,3,4,5];
Fullslack.shuffle(list);
```

Returns a shuffled copy of the list

```
Fullslack.some(list, callback);
```

Looks through each value in the list, returning true if any of the values pass a truth test

```
Fullslack.map(list, callback);
```

Produces a new array of values by mapping each value in list through a transformation function

```
Fullslack.filter(list, callback);
```

Looks through each value in the list, returning an array of all the values that pass a truth test
