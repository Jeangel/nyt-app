import React from 'react';
import './spinner.css';
import { connect } from 'react-redux';

function Spinner({ loading }) {
    if (loading) {
        return (
            <div className="atom-spinner">
                <div className="spinner-inner">
                    <div className="spinner-line"></div>
                    <div className="spinner-line"></div>
                    <div className="spinner-line"></div>
                    <div className="spinner-circle">
                        &#9679;
                </div>
                </div>
            </div>
        )
    }

    return <></>

}

const mapStateToProps = ({ loading }) => {
    return {
        loading
    }
}

export default connect(mapStateToProps, null)(Spinner);