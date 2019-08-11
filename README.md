<p align="center">
  <a href="http://logz.io">
    <img height="150px" src="https://logz.io/wp-content/uploads/2017/06/new-logzio-logo.png">
  </a>
</p>


# use-debounce
A react hook for using a debouncing an input with state variables In react.

## Parameters

#### `Value`
```js
value: any
```
The "To be debounced Value". Whenever this value changes, the debounce method is triggered and the timer is started.

#### `Operation`
```js
operation: Function (value, ...params) =>{...}
```
The Callback operation to be performed after the specified delay in which the value remained stale.

#### `Delay`
```js
delay: number = 400
```
The debounce delay, after this amount of time that the value has remained stale, `Operation`


#### `Params`
```js
params: any {...params}
```
Additional parameters to be passed to your operation, will be spread in the order that were passed.
