import Header from './Header'
import Footer from './Footer'
const layout = ({ children }) => {
    return (
        <>
        <script async src='https://www.googletagservices.com/tag/js/gpt.js' />
        <script dangerouslySetInnerHTML={{    __html: `var googletag = googletag || {};   googletag.cmd = googletag.cmd || [];` }}/>
           <Header></Header>
           <div className="main-content">
            {children}
            </div>
            <Footer></Footer>
        </>
    )
}
export default layout