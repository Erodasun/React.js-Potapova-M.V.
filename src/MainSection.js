import React from 'react';
import img1 from './images/f3.png';
import img2 from './images/f4.png';
import img3 from './images/f5.png';

const MainSection = () => {
    return (
        <section className="main">
            <div className="container">
                <h2 className="main_title">Что Вам необходимо?</h2>
                <div className="main_block">
                    <div className="blocks animate__animated animate__rollIn"> 
                        <img src={img1} alt="pic" />
                        <h3>Первый блок</h3>
                        <p className="fish">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div className="blocks animate__animated animate__fadeInDown animate__delay-1s"> 
                        <img src={img2} alt="pic" />
                        <h3>Второй блок</h3>
                        <p className="fish">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div className="blocks animate__animated animate__flipInY animate__delay-2s"> 
                        <img src={img3} alt="pic" />
                        <h3>Третий блок</h3>
                        <p className="fish">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainSection;
