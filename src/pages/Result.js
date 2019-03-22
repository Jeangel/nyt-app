import React from 'react';
import Spinner from '../components/Spinner/Spinner';
import ListItems from '../components/ListItems';
import SearchCard from './../components/SearchCard';
import { Row, Container } from "reactstrap";

export default function Result() {
    return (
        <>
            <SearchCard hasLogo></SearchCard>
            <Container fluid className="mt-3">
                <Row className="justify-content-center">
                    <div>
                        <Spinner></Spinner>
                    </div>
                </Row>
                <ListItems></ListItems>
            </Container>
        </>
    );
}