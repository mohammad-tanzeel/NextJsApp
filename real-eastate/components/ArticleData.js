import React from 'react'

export default function ArticleData(props) {
    const {post_data} = props;
    // console.log(post_data);
  return (
    <>
        <h1>{post_data.title}</h1>
        <div>{post_data.body}</div>
    </>
  )
}
