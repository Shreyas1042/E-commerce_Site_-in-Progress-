import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="Home">
            <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        
        <div className="home__row">
             <Product title="The lean startup\" price={29.99} image="https://miro.medium.com/max/2206/1*PKsDuPxNoKJyJvmlLc64qg.jpeg" rating={3} alt=""/>
             <Product title="Free Code Camp\" price={25.5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiOnjKev6PGDlDKfvq9mdXPlV1wrQxkd9aw&usqp=CAU" rating={4} alt=""/>
         
        </div>
        <div className="home__row">
        
           <Product title="Dell XPS" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2g1R2JSATI-hlgO8nbpyo8fzImkd9lx4iQ&usqp=CAU" rating={4} alt=""/>
           <Product title="Bolt Audio" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wE3LU9KVsj6IO5MoKoRybSNpsTfKAJ5rFw&usqp=CAU" rating={4} alt=""/>
           <Product title="NOVA NHT-1085 Trimmer" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_4F_8oMLJEE1edWbzjn_UDrneHxt2NUw3g&usqp=CAU" rating={3} alt=""/>

        
        </div> 

        <div className="home__bottom">
           
           <Product image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXAQzrK9DU85zjG8PVxS8-hXxkSfvw_KUHQ&usqp=CAU" rating={0} alt=""/>
        </div>
        </div>
        </div>
    )
}

export default Home
