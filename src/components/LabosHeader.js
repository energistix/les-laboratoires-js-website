import React from 'react';

export default class LabosHeader extends React.Component {
    constructor() {
        super()
        this.state = {style: {}}
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        if(window.pageYOffset <= 50) {
            this.setState({
                style: {
                    backgroundColor: "transparent"
                }
            })
        } else {
            this.setState({
                style: {}
            })
        }
        window.addEventListener('scroll', ()=> {
            if(window.pageYOffset <= 50) {
                this.setState({
                    style: {
                        backgroundColor: "transparent"
                    }
                })
            } else {
                this.setState({
                    style: {}
                })
            }
        });
    }
    render() {
        return (
            <div className="ui inverted top fixed borderless menu stackable" style={this.state.style}>
                <div className="header text item">Les Laboratoires JS</div>
                <a className="active item">Home</a>
                <a className="item">Tutoriels</a>
                <a className="item">Concours</a>
                <a className="item">Annonces</a>
            </div>
        )
    }
}