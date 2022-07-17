import React from 'react'
import axios from 'axios';
import ArticleData from '../components/ArticleData';

function Article(props) {
    const { ARTICLE_DETAIL_DATA, POST_LIST} = props
    // console.log(POST_LIST);
    // POST_LIST.forEach(element => {
    //     console.log(element.title);
    //   });

  return (
    <div>Article {ARTICLE_DETAIL_DATA}
     <ul>
        {POST_LIST.map((post_data, index) => (
        <li key={index}>
            <ArticleData  post_data={post_data} />
        </li>
      ))}
      </ul>
    </div>
  )  
}

export const getServerSideProps = async (context) => {
    const ARTICLE_DETAIL_API = "https://jsonplaceholder.typicode.com/posts";
    const POST_LIST = await axios.get(ARTICLE_DETAIL_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found"); Logger.error(err); return null; });
    console.log(POST_LIST);
    const ARTICLE_DETAIL_DATA = "test data"
    return { props: { ARTICLE_DETAIL_DATA, POST_LIST} }
  }

export default Article