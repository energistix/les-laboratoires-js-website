import React from 'react';

export default class IntroductionBanner extends React.Component {
    render() {
        return (<
        div style={
        {
            height: "100vh",
            background: "linear-gradient(90deg, rgba(238,232,17,1) 0%, rgba(190,201,109,1) 40%, rgba(0,212,255,1) 98%)",
            "background-size": "cover !important;"
        }
        }>
        </div>
        )
    }
};