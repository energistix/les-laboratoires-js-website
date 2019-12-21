import React from 'react';

export default class Tutorial extends React.Component {
    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <img className="ui avatar image" src={this.props.avatarURL}/> {this.props.author}
                </div>
                <div className="image">
                    <img src={this.props.imageURL}/>
                </div>
                <div className="content">
                    <a className="header">{this.props.name}</a>
                    <div className="meta">
                        <span className="date">{this.props.simplifiedDate}</span>
                    </div>
                    <div className="description">
                        {this.props.description}
                    </div>
                </div>
                <div className="extra content">
                    <span class="right floated">
                      <i className="heart outline red icon"></i> {this.props.likeCount}
                    </span>
                    <i className="comment icon"></i> {this.props.commentCount}
                </div>
            </div>
        )
    }
}