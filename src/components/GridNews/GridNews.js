import { Container, Grid } from "@material-ui/core";
import Masonry from "react-masonry-css";
import Loader from "../Loader/Loader";
import NewsCard from "../NewsCard/NewsCard";
import styles from "./GridNews.module.css";


const GridNews = ({items, isLoaded}) => {

    const breackpoints = {
        default:4,
        1400:3,
        1100:2,
        850:1
    }

    return isLoaded ?( 
        <Loader/>
    ):(
        <Container>
            <Masonry
                breakpointCols={breackpoints}
                className={styles.my_masonry_grid}
                columnClassName={styles.my_masonry_grid_column}
            >
                {items.map(item => (
                    <div key={item.news_id} >
                        <NewsCard item={item}/>
                    </div>
                ))}
            </Masonry>
        </Container>
    )
}
 
export default GridNews;