import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
// import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import './App.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {
    A11y,
    Mousewheel,
    Navigation,
    Pagination,
    Scrollbar,
} from 'swiper/modules';
import type {Swiper as SwiperClass} from "swiper/types";
function App() {
    const [step, setStep]=
        useState<number>(0)
    // useEffect(() => {
    //     const callBack = (newStep:Swiper)=>{
    //
    //     }
    // }, []);
    return (
        <Swiper
            className={'blog-slider swiperWrapper'}
            direction={'vertical'}
            modules={[Pagination, Navigation, Mousewheel, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{draggable: true}}
            mousewheel={{
                invert: false
            }}
            effect={"fade"}
            loop={true}
            onSlideChange={(e:SwiperClass) => setStep(e.activeIndex)}
        >
            <SwiperSlide className={'blog-slider'}>
                <div className={'dAc'}>
                    <div className={'blog-slider__item'}>
                        <img className={'blog-slider__img'}
                             src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                             alt=""/>
                        <div>
                            <h3>Title</h3>
                            <div>dsafdsfasdfsajkfhasdjklfsdjklfa;sdfjasdklfjla;skdfjklsajf</div>
                            <div>dsafdsfasdfsajkfhasdjklfsdjklfa;sdfjasdklfjla;skdfjklsajf</div>
                            <div>dsafdsfasdfsajkfhasdjklfsdjklfa;sdfjasdklfjla;skdfjklsajf</div>
                            <div>dsafdsfasdfsajkfhasdjklfsdjklfa;sdfjasdklfjla;skdfjklsajf</div>
                            <div>dsafdsfasdfsajkfhasdjklfsdjklfa;sdfjasdklfjla;skdfjklsajf</div>
                            <div>dsafdsfasdfsajkfhasdjklfsdjklfa;sdfjasdklfjla;skdfjklsajf</div>
                            <div>dsafdsfasdfsajkfhasdjklfsdjklfa;sdfjasdklfjla;skdfjklsajf</div>
                            <div>dsafdsfasdfsajkfhasdjklfsdjklfa;sdfjasdklfjla;skdfjklsajf</div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={'blog-slider'}>
                <div className={'dAc'}>
                    <div className={'blog-slider__item'}>
                        <img className={'blog-slider__img'}
                             src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                             alt=""/>
                        <div>
                            <h3>Title2</h3>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <div className={'aaa'}>
                <div className={step===0?'ccc':'bbb'}/>
                <div className={step===1?'ccc':'bbb'}/>
                <div className={step===2?'ccc':'bbb'}/>
            </div>
        </Swiper>
    );
}

export default App;
