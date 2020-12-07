import styles from './MovieCard.module.css';

function MovieCard(props) {
    return(
        <div className={styles.Card}>
            {props.result.title}
            <img src={`https://image.tmdb.org/t/p/w200${props.result.poster_path}`} />
            
        </div>
    )
}

export default MovieCard;