import styles from './Board.module.css';
import Tile from './Tile';

function Board(props) {
	const drawTiles = props.boardState.map((tile, index) => <Tile key={index} id={index}></Tile>);

	return <div className={styles.board}>{drawTiles}</div>;
}

export default Board;
