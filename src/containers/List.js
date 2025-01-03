import { connect } from 'react-redux'
import List from '../components/List'
import { fetchArticles } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

// write mapDispatchToProps below
const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles: (articles) => dispatch(fetchArticles(articles)),
    }
}

// pass in the two functions as arguments to the `connect` function.
export default connect(mapStateToProps, mapDispatchToProps)(List)