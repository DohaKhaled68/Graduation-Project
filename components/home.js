import React from 'react';
import Footeer from './footer';
import Navv from './nav';
import Carousel from 'react-bootstrap/Carousel';
import one from '../imges/1.jpg';
import two from '../imges/2.jpg'
import web from '../imges/web.png';
import news from '../imges/tempnews.jpg'
import '../home.css';
import Button from 'react-bootstrap/esm/Button';

function HomePage() {
    return (
        <>

            <Navv />
            <div>
                <Carousel  >
                    <Carousel.Item className="cimg">
                        <img
                            className="d-block imm"
                            src={one}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="hh2">Your guid to feel better from your home</h2>
                            <input type="text" placeholder="Search.." name="search"  style={{ borderRadius:"10px" , width:"222px"}} />
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="cimg">
                        <img
                            className="d-block w-100 imm"
                            src={two}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2  className="hh2">The easiest way to check on yourself with proffesional doctors</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <img src={web} width="50px" height="50px" className="m-2 imgtext" />
            <h2 className="newstext m-2">News Feed</h2>
            <div class="row news m-3">
                <img src={news} className="tempimg" />
                <p className="temptext mt-3"> Statistics of the Ministry of Health and Population on the Corona virus for Tuesday <br />
                    27 October 2020</p>
                <Button className="reedmore"> read more..</Button>
            </div>
            <div class="row news m-3">
                <img src={news} className="tempimg" />
                <p className="temptext mt-3"> Statistics of the Ministry of Health and Population on the Corona virus for Tuesday <br />
                    27 October 2020</p>
                <Button className="reedmore"> read more..</Button>
            </div>
            <Footeer />
        </>
    );
}

export default HomePage;