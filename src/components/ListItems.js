import React from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import { Button, Row, Col } from "reactstrap";
import { fetchArticles } from './../redux/actionCreators';

function ListItems(props) {

    const { articles, keywords, materialType, page, fetchArticles, total } = props;

    return (
        <>
            <ul className="articles">
                {articles.map((e, i) => <li key={i}><Article {...e}></Article></li>)}
            </ul>
            {
                /** If there's articles I'll display data about fetched articles
                 * e.g current display and total articles found
                 */
                articles.length > 0 &&
                <>
                    <Row>
                        <Col md={{ offset: 1, length: 11 }} xs={{ offset: 1, length: 5 }}>
                            <p>Displaying {articles.length} results of {total} found</p>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md={{ offset: 1, length: 11 }} xs={{ offset: 1, length: 5 }}>
                            <Button className="more-button" color='light'
                                onClick={
                                    () => fetchArticles(keywords, materialType, (page + 1))
                                }>
                                Get More News
                                </Button>
                        </Col>
                    </Row>
                </>
            }
        </>
    );

}


const mapStateToProps = ({ articles, materialType, keywords, page, total }) => {
    return {
        articles, materialType, keywords, page, total
    }
}

export default connect(mapStateToProps, { fetchArticles })(ListItems);