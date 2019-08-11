/**
 *
 * @param value - The value to be debounced. When changes to this value stop for the set amount of time the operation will be executed.
 * @param operation - The operation to execute after the delay.
 * @param delay - The time in ms to wait for the operation execution.
 * @param params - Optional params to be passed to the callback operation.
 */
export declare const useDebounce: (value: any, operation: Function, delay?: number, ...params: any) => void;
