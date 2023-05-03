import styles from './Tile.module.css';

function Tile(props) {
	function placeMoveHandler(event) {
		console.log(event.target.id);
	}

	return (
		<div id={props.id} onClick={placeMoveHandler} className={styles.tile}>
			<p>{props.move + ''}</p>
		</div>
	);
}

export default Tile;
