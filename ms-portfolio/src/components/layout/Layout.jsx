import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'
import PageWrapper from '@components/page-wrapper/PageWrapper'

const Layout = ({ children }) => {
 return (
   <PageWrapper>
     <Header />
     {children}
     <Footer />
   </PageWrapper>
 )
}

export default Layout