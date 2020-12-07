import styles from './MovieCard.module.css';

function MovieCard(props) {
    return(
        
        <div className={styles.Card}>

            <img src={`https://image.tmdb.org/t/p/w200${props.result.poster_path}`} />

            <h6 style={{fontSize: 15}}>{props.result.title}</h6>
            
        </div>
    )
}

export default MovieCard;