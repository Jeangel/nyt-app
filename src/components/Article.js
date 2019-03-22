import React from 'react';
import { Row, Col, Button } from "reactstrap";
import { connect } from 'react-redux';
import { fetchArticles } from '../redux/actionCreators';
import moment from 'moment';
import { Thumbnail } from './Thumbnail';

function Article(props) {

    const { headline, multimedia, snippet, source,
        pub_date, keywords, web_url, fetchArticles } = props;

    const date = moment(pub_date).format('MMM DD, YYYY  h:mm:ss A');

    const img = multimedia.find(e => (e && e.subtype === 'thumbnail'));

    return (
        <>
            <Row className="article">
                <Col md={1} className="d-md-block d-none">
                    <Thumbnail src={img}></Thumbnail>
                </Col>
                <Col md={10}>
                    <a className="headline" href={web_url} target="_blank"
                        rel="noopener noreferrer"
                    >{headline.main}</a>
                    <p className="d-md-block d-none">{snippet}</p>
                    <p className="m-0"><b>Source:</b> {source}</p>
                    <p className="m-0"><b>Date:</b> {date}</p>
                    <div className="d-lg-block d-none">

                        <ul className="keywords">
                            <li><i className="fas fa-tags"></i></li>

                            {keywords.map((e, i) =>
                                <li key={i}>
                                    <Button color="link"
                                        onClick={
                                            () => fetchArticles(e.value, props.materialType)
                                        }
                                    >{e.value}
                                    </Button>
                                </li>)}
                        </ul>
                    </div>
                </Col>
            </Row>

        </>
    );
}

const mapStateToProps = ({ materialType }) => {
    return {
        materialType
    }
}

export default connect(mapStateToProps, { fetchArticles })(Article);