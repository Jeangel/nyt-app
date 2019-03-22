import React from 'react';
import SearchCard from '../components/SearchCard';
import mediumLogo from './../images/mediumLogo.png';
import Spinner from './../components/Spinner/Spinner';
import { Row, Col } from "reactstrap";
import { navigate, Redirect } from '@reach/router';

export default function Search() {

    return (
        <div className="container-fluid">
            <div className="main-content">
                <Col md={12} sm={12} className="my-md-auto mt-5">
                    <Row>
                        <Col md={12} sm={12} className="text-center">
                            <img src={mediumLogo}
                                className="center-block" alt="New York Times Logo">
                            </img>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="mx-auto pr-0 pl-0" md={8} sm={12}>
                            <SearchCard compact onSearch={redirect}></SearchCard>
                        </Col>
                    </Row>
                    <Spinner></Spinner>
                </Col>
            </div>
        </div>
    );

    function redirect() {
        navigate('/result');
        return <Redirect to="/result" noThrow></Redirect>
    }

}
