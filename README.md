<p align="center">
  <a href="http://logz.io">
    <img height="150px" src="https://logz.io/wp-content/uploads/2017/06/new-logzio-logo.png">
  </a>
</p>


# use-debounce
A react hook for debouncing an input with state variables in react. 

<p align="center">
  <a href="http://logz.io">
    <img height="150px" src="https://user-images.githubusercontent.com/8065975/63023470-dbeef100-bead-11e9-8434-5a5ab1796e92.gif">
  </a>
</p>

## Usage
[Simple demo](https://codesandbox.io/s/infallible-pond-u9w4z)  
[react-select demo](https://codesandbox.io/s/snowy-frost-06r5j)

```javascript
import React, { useState } from 'react';

const MyComponent() {
  const [value, setValue] = useState();
  const [debouncedValue, setDebouncedValue] = useState();

  useDebounce(value, setDebouncedValue);

  return (
    <div>
      <input onChange={({ target: { value } }) => setValue(value)} />
      
      {debouncedValue}
    </div>
  );
}
```

## Parameters

#### `value`
```js
value: any
```
Whenever this variable changes, the debounce method is triggered and the timer is started.

#### `operation`
```js
operation: (value, ...params) => {...}
```
If the debounce timer ended without interruption, we call `operation` with the freshest value of `value` (+ all the params passed as 4+ arguments.)

#### `delay`
```js
delay: number = 400
```
The debounce delay - after this amount of time `operation` will be called 
(without interruption of getting a new `value`).


#### `params`
```js
params: any {...params}
```
Additional arguments to be passed to your operation, will be spread in the order that were passed.
