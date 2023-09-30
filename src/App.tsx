import { useState, useEffect, useCallback, MouseEvent, KeyboardEvent } from 'react';

interface User {
	id: number;
	username: string;
}

type ClickEvent = {
	e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>;
};

function App() {
	const [count, setCount] = useState<number>(0);
	const [user, setUser] = useState<User[] | null>(null);

	useEffect(() => {
		console.log('Mountung');
		console.log('Users', user);

		return () => console.log('Unmounting');
	}, [user]);

	const addTwo = useCallback((e: ClickEvent): void => setCount((prev) => prev + 2), []);

	return (
		<div className='App'>
			<h1>{count}</h1>
			<button onClick={addTwo}>Add</button>
		</div>
	);
}

export default App;
