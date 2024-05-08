import {
    BootStrapImg,
    ReactImg,
    NextJsImg,
    TypeScriptImg,
    JavaScriptImg,
    ReactQueryImg,
    Avatar, YoriJoriLogo, SpringImg,
    WebSocketImg, AuctionLogo, TestCafeLogo, MovieLogo
} from '../image/exportImg'
import {SwiperSlideVo} from "../vo/SwiperSlideVo";

export const myProfile: SwiperSlideVo[] = [
    {
        title: 'WooYoung',
        titleImg: Avatar,
        items: [
            {
                liType: 'Text',
                label: 'J o b',
                content: 'Frontend Developer'
            },
            {
                liType: 'Text',
                label: 'G i t',
                content: 'https://github.com/wooyoung294'
            },
            {
                liType: 'Text',
                label: 'M b t i',
                content: 'ISTJ'
            },
            {
                liType: 'Badge',
                label: 'S t a c k',
                content: [
                    SpringImg,
                    ReactImg,
                    NextJsImg,
                    TypeScriptImg,
                    JavaScriptImg,
                    ReactQueryImg,
                    BootStrapImg
                ]
            }
        ],
    },
    {
        title: 'YORIJORI',
        titleImg: YoriJoriLogo,
        items: [
            {
                liType: 'Text',
                label: 'I n t r o',
                content: '나만의 레시피를 공유하는 사이트 입니다.'
            },
            {
                liType: 'Text',
                label: 'F r o n t',
                content: 'https://github.com/wooyoung294/YoriJori'
            },
            {
                liType: 'Text',
                label: 'B a c k',
                content: 'https://github.com/wooyoung294/RecipesBack'
            },
            {
                liType: 'Text',
                label: 'D e s c',
                content: 'NextAuth와 Infinite scroll 적용한 프로젝트입니다. '
            },
            {
                liType: 'Badge',
                label: 'S t a c k',
                content: [
                    NextJsImg,
                    TypeScriptImg,
                    ReactQueryImg,
                    SpringImg
                ]
            }
        ],
        visit:'http://yorijori.wooyu.world'
    },
    {
        title: 'Auction',
        titleImg: AuctionLogo,
        items: [
            {
                liType: 'Text',
                label: 'I n t r o',
                content: '경매장 사이트입니다.'
            },
            {
                liType: 'Text',
                label: 'F r o n t',
                content: 'https://github.com/wooyoung294/AuctionFront'
            },
            {
                liType: 'Text',
                label: 'B a c k',
                content: 'https://github.com/wooyoung294/AuctionBack'
            },
            {
                liType: 'Text',
                label: 'D e s c',
                content: '웹소켓을 사용해보고 싶어서 진행한 프로젝트입니다.'
            },
            {
                liType: 'Badge',
                label: 'S t a c k',
                content: [
                    ReactImg,
                    JavaScriptImg,
                    WebSocketImg,
                    SpringImg
                ]
            },
        ],
        visit:'http://wooyu.world'
    },
    {
        title: 'Movie',
        titleImg: MovieLogo,
        items: [
            {
                liType: 'Text',
                label: 'I n t r o',
                content: '영화정보를 표시해주는 사이트입니다 '
            },
            {
                liType: 'Text',
                label: 'G i t',
                content: 'https://github.com/wooyoung294/Movie'
            },
            {
                liType: 'Text',
                label: 'D e s c',
                content: '스켈레톤 UI와 튜토리얼을 만들어 보기위해 진행한 프로젝트입니다. '
            },
            {
                liType: 'Badge',
                label: 'S t a c k',
                content: [
                    ReactImg,
                    TypeScriptImg,
                    ReactQueryImg,
                ]
            }
        ],
        visit:'http://movie.wooyu.world'
    },
    {
        title: 'TESTCAFE로 TODO 페이지를 테스트해보자!',
        titleImg: TestCafeLogo,
        items: [
            {
                liType: 'Text',
                label: 'I n t r o',
                content: 'TestCafe 이용해 테스트하고 결과를 리포트로 보여줍니다.'
            },
            {
                liType: 'Text',
                label: 'G i t',
                content: 'https://github.com/wooyoung294/testcafetutorial'
            },
            {
                liType: 'Badge',
                label: 'S t a c k',
                content: [
                    JavaScriptImg,
                ]
            }
        ],
    }


]




