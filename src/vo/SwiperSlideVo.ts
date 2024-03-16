import {SwiperSlideItemVo} from "./SwiperSlideItemVo";

export interface SwiperSlideVo {
    title: string;
    titleImg: any;
    items: SwiperSlideItemVo[];
    visit?:string
}
