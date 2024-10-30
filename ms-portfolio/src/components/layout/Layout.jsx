import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'
import PageWrapper from '@components/page-wrapper/PageWrapper'

const Layout = ({ children }) => {
 return (
   <>
     <Header />
     <PageWrapper>
       {children} 
     </PageWrapper>
     <Footer />
   </>
 )
}

export default Layout