import styles from './App.module.css';
import Card from './Components/UI/Card';
import Board from './Components/Board/Board';
import { useState } from 'react';

function App() {
	const [board, setBoard] = useState(new Array(9).fill(''));

	return (
		<div className={styles.container}>
			<div className={styles['app-container']}>
				<Card className={'header'}>Tic Tac Toe</Card>
				<Card className={'game-container'}>
					<Board boardState={board}></Board>
				</Card>
				<Card className={'history-container'}>Go back to move</Card>
			</div>
		</div>
	);
}

export default App;
