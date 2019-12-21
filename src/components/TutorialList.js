import React from 'react';
import Tutorial from './Tutorial.js'
import fetch from 'isomorphic-unfetch'
export default class TutorialList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorials: [],
            from: 0
        };
        this.updateList = this.updateList.bind(this);
        this.updateList()
    }
    updateList() {
        fetch(`http://localhost:8081/tutorials?from=${this.state.from}&to=${this.state.from + Number(this.props.step)}`)
            .then(async r => {
                if (r.status !== 401) {
                    const data = await r.json();
                    this.setState(() => {
                        return {tutorials: [...this.state.tutorials, ...data], from: Number(this.state.from) + Number(this.props.step)}
                    });
                }
            })
    }
    componentDidMount() {
        if(!this.props["do-auto-add"]) {
            this.btn;
        } else {
            this.btn = <button onClick={this.updateList} className="ui button">Charger plus</button>
        }
    }

    render() {
        return (
            <div>
                <div className="ui link cards centered">
                    {this.state.tutorials.map(tutorial =>{
                            return <Tutorial author={tutorial.author} likeCount={tutorial.likeCount} name={tutorial.name} description={tutorial.description} commentCount={tutorial.commentCount} imageURL={tutorial.imageURL} avatarURL={tutorial.avatarURL}></Tutorial>
                        })
                    }
                </div>
                <br></br><br></br>
                <div className="ui center aligned container">
                {
                    this.btn
                }
                </div>
            </div>
        )
    }
}