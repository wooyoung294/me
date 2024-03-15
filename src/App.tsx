import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
// import './App.css';
import profile from './KakaoTalk_20240311_023648831.png'
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
    return (
        <Swiper
            className={'swiperWrapper'}
            direction={'vertical'}
            modules={[Pagination, Navigation, Mousewheel, Scrollbar, A11y]}
            spaceBetween={200}
            slidesPerView={1}
            scrollbar={{draggable: true}}
            mousewheel={{
                invert: false
            }}
            loop={true}
            // activeIndex는 loop가 true일때 제대로 반영이 안됨 따라서 realIndex 사용
            // onSlideChange={(e:SwiperClass) => setStep(e.activeIndex)}
            onSlideChange={(e:SwiperClass) => setStep(e.realIndex)}
            effect="flip"
        >
            <SwiperSlide >
                <div className={'dAc'}>
                    <div className={'sliderItem'}>
                        <img className={'sliderIMG'}
                             src={profile}
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
            <SwiperSlide >
                <div className={'dAc'}>
                    <div className={'sliderItem'}>
                        <img className={'sliderIMG'}
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
