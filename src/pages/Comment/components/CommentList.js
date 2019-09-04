import React from "react";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { comments } = this.props;
    return (
      <div className="comment-list-component">
        <label>评论列表</label>

        <ul className="list-group">
          {comments.map((comment, index) => {
            return <li className="list-group-item" key={index}>{comment}</li>;
          })
          }
        </ul>
      </div>
    );
  }
}

export default CommentList;
