// import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer'
export default function Portfolio(){
  document.addEventListener('click',function(){
    if(document.querySelector('.container')){
      document.querySelector('.footer').classList.remove('align-footer');
    }
    else{
      document.querySelector('.footer').classList.add('align-footer');
    }
  })
return (
  <div className="portfolio">
    <Main/>
    <Footer/>
  </div>
)
}