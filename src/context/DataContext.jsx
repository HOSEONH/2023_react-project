import React, { useState } from "react";

const DataContext = React.createContext("");

const DataProvider = ({children}) => {
    const [ddd, setDdd] = useState(
        [
            {   
                category: "GLAZED",
                name : "오리지널 글레이즈드",
                detail : "크리스피크림의 가장 대표적인 도넛으로 부드럽고 달콤한 맛의 오리지널 글레이즈드",
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/20230102162840841_0.jpg",
                price : "1,700원"

            },
            {
                category: "LIMITED",
                name : "돈워리 비벨리",
                detail : "달콤한 망고 우유크림처럼 달콤하고 행복한 세상을 꿈꾸는 벨리곰",
                image : "https://img.lotteeatz.com/upload/product/2023/03/29/20230329091835298_7.jpg",
                price : "3,200원"
            },
            {
                category: "LIMITED",
                name : "커여운 벨리곰",
                detail : "딸기 풍선껌맛을 연상시키는 장난 가득한 귀여운 벨리곰" ,
                image : "https://img.lotteeatz.com/upload/product/2023/03/29/20230329091817996_8.jpg",
                price : "3,600원"
            },
            {
                category: "FILLED",
                name : "뉴욕 치즈케익",
                detail : "진한 크림 치즈 필링과 크림 치즈 아이싱, 고소한 쿠키가 어우러진 도넛" ,
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/20230102163017660_0.jpg",
                price : "2,200원"
            },
            {
                category: "FILLED",
                name : "프리미엄 스트로베리 필드",
                detail : "상큼한 스트로베리 잼을 가득 채운 도넛 위에 딸기맛 파우더 슈거가 뿌려진 도넛" ,
                image : "https://img.lotteeatz.com/upload/product/2023/01/02/20230102162903462_3.jpg",
                price : "2,200원"
            }
        ]
    )

    const value = {
        data : { ddd },
        setData : { setDdd }
    }

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}

export {DataProvider}

export default DataContext