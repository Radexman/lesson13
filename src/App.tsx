// MouseEvent & KeyboardEvent need to be imported from react
import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from 'react';

// Interface for the user object passed in the state
interface User {
	id: number;
	username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
	if (n < 2) return n;
	return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

// Type for e parameter inside events that need to use event parameter
type ClickEvent = {
	e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>;
};

// States are inferred by TypeScript but can be defined explicitly
// It is good idea to create a union type for the data that will be fetched from outside
function App() {
	const [count, setCount] = useState<number>(0);
	const [user, setUser] = useState<User[] | null>(null);

	// useRef HTMLInputElement type
	const inputRef = useRef<HTMLInputElement>(null);

	// Optional chaining for useRef on input elements to chath null possibility
	console.log(inputRef?.current);
	console.log(inputRef?.current?.value);

	// useEffect does not require any TypeScript interferance
	useEffect(() => {
		console.log('Mountung');
		console.log('Users', user);

		return () => console.log('Unmounting');
	}, [user]);

	// Event Type is passed down here
	const addTwo = useCallback((e: ClickEvent): void => setCount((prev) => prev + 2), []);

	const result = useMemo<number>(() => fib(myNum), []);

	return (
		<div className='App'>
			<h1>{count}</h1>
			<button onClick={addTwo}>Add</button>
			<h2>{result}</h2>
			<input
				ref={inputRef}
				type='text'
			/>
		</div>
	);
}

export default App;
