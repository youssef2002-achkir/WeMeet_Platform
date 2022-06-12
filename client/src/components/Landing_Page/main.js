import React, {Component} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/footer'
import Body from '../MainPage_Body/body'
class Main extends Component{
    
    render(){
        return(
            <div className='Main'>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default Main;