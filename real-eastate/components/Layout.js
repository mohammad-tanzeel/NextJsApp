import Header from './Header'
import Footer from './Footer'
const layout = ({ children }) => {
    return (
        <>
           <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}
export default layout