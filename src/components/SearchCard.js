import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchArticles } from './../redux/actionCreators';
import { useInput } from './Tools';
import {
    Col, Input, Label, Form, Button,
    Card, CardBody, FormGroup
} from "reactstrap";
import smallLogo from './../images/smallLogo.png';
import SelectMaterial from './SelectMaterial';


export function SearchCard(props) {
    const { hasLogo, onSearch, compact } = props;
    const keywords = useInput(props.keywords);
    const materialType = useInput((props.materialType || 'News'));
    const labelClasses = (compact) ? 'd-lg-block' : 'd-lg-block d-none'

    useEffect(() => {
        keywords.setValue(props.keywords);
        /** If prop.keywords changes, I'll update my state */
        /** This is 'cause keywords state doesn't update with new value */
    }, [props.keywords]);

    return (
        <Card color="light">
            <CardBody>
                <Form className="form-row" onSubmit={send}>
                    <SmallLogo hasLogo={hasLogo}></SmallLogo>
                    <Col md={6} sm={12}>
                        <FormGroup>
                            <Label className={labelClasses}>Keywords</Label>
                            <Input {...keywords.bind}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={4} sm={12} xs={(compact) ? 12 : 8}>
                        <FormGroup>
                            <Label className={labelClasses}>Types of Material</Label>
                            <SelectMaterial {...materialType.bind}></SelectMaterial>
                        </FormGroup>
                    </Col>
                    <Col lg={1} md={2} sm={12} xs={(compact) ? 12 : 4}
                        className="align-self-end">
                        <FormGroup className="text-center">
                            <Button color="dark" className={!compact ? 'w-100' : ''}>
                                Search
                            </Button>
                        </FormGroup>
                    </Col>
                </Form>
            </CardBody>
        </Card>
    );

    function send(e) {
        e.preventDefault();
        /** If inputs aren't empty, I dispatch the event  */
        if (keywords.value && materialType.value) {
            props.fetchArticles(keywords.value, materialType.value);
            /**  Function to execute when fetch articles (Passed by props) */
            if (onSearch)
                onSearch();
        }
    }
}


function SmallLogo({ hasLogo }) {
    return (
        <>
            {
                hasLogo &&
                <Col md={1} className="d-lg-block d-none">
                    <img src={smallLogo}
                        className="center-block" alt="New York Times Logo">
                    </img>
                </Col>
            }
        </>
    );
}

const mapStateToProps = ({ keywords, materialType }) => {
    return {
        keywords,
        materialType
    }
}

export default connect(mapStateToProps, { fetchArticles })(SearchCard);