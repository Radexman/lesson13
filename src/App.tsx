import { useState, useEffect } from 'react';

interface User {
	id: number;
	username: string;
}

function App() {
	const [count, setCount] = useState<number>(0);
	const [user, setUser] = useState<User[] | null>(null);

	useEffect(() => {
		console.log('Mountung');
		console.log('Users', user);

		return () => console.log('Unmounting');
	}, [user]);

	return (
		<div className='App'>
			<h2>Hello World</h2>
		</div>
	);
}

export default App;
