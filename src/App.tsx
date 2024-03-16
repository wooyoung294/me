import React, {useState} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';
import 'swiper/css/mousewheel';
import {Swiper, SwiperSlide} from "swiper/react";
import {
    A11y,
    EffectFade,
    Mousewheel,
    Navigation,
    Pagination,
    Scrollbar,
} from 'swiper/modules';

import type {Swiper as SwiperClass} from "swiper/types";
import SwiperSlideItem from "./components/SwiperSlideItem";
import {myProfile} from "./data/myProfile";
import {CustomNavigator, NavigatorItem} from "./components/CustomNavigator";
import {VisitButton} from "./components/VisitButton";
function App() {

    const [step, setStep]=
        useState<number>(0)

    return (
        <Swiper
            className={'swiperWrapper'}
            direction={'vertical'}
            modules={[EffectFade,Pagination, Navigation, Mousewheel, Scrollbar, A11y]}
            spaceBetween={200}
            slidesPerView={1}
            scrollbar={{draggable: true}}
            mousewheel={{
                invert: false
            }}
            loop={true}
            effect={'fade'}
            fadeEffect={{
                crossFade: true,
            }}
            // activeIndex는 loop가 true일때 제대로 반영이 안됨 따라서 realIndex 사용
            // onSlideChange={(e:SwiperClass) => setStep(e.activeIndex)}
            onSlideChange={(e:SwiperClass) => {
                setStep(e.realIndex);
            }}
        >
            {
                myProfile.map((swiperSlideVo)=>
                    <SwiperSlide key={swiperSlideVo.title}>
                        <SwiperSlideItem swiperSlideVo={swiperSlideVo}/>
                        {
                            swiperSlideVo.visit && <VisitButton href={swiperSlideVo.visit}>방문하기</VisitButton>
                        }
                    </SwiperSlide>
                )
            }
            <CustomNavigator>
            {
                myProfile.map((swiperSlideVo,idx)=>
                    <NavigatorItem idx={idx} step={step}/>
                )
            }
            </CustomNavigator>
        </Swiper>
    );
}

export default App;
