import React from 'react';
import CommentList from './components/CommentList';
import CommentBox from './components/CommentBox';

/**
 * React 开发思想以及和其他思想的异同
 * 状态提升
 * 自上而下的数据流-单数据流
 * 和双向绑定的区别
 * */ 
class Comment extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      comments: ['this is my first reply']
    } 
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment){
    this.setState({
      comments: [...this.state.comments,comment]
    })
  }

  render(){
    const{ comments } = this.state;
    return(
     <div className="Comment-page" style={{width:'30%'}}>
        <CommentList comments={comments}/>
        <CommentBox commentsLength={comments.length} onAddComment={this.addComment}/>
      </div>
    )
  }
  
}
export default Comment
