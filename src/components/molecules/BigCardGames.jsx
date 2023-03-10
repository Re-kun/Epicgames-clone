import React from "react";

const BigCardGames = () => {
    return (
        <>  
            <div className=" text-white w-full ">
              <div className=" relative h-[27.5rem] bg-cover bg-center rounded-2xl" style={{backgroundImage: `url(/images/games/genshin-impact.webp)`}}>
                <div className=" absolute px-5 inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 md:from-black/40 to-transparent"></div>
                <div className=" absolute bottom-14 left-5 md:left-8 text-sm md:font-bold w-[80%] md:w-[40%]">
                  <div>
                    <h2>OUT NOW</h2>
                    <p>Dishonored is an immersive first-person action game that casts you as a supernatural assasin driven by revenge.</p>
                  </div>
                  <div className="mt-7">
                    <p>Starting at</p>
                    <p>IDR 200.500</p>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default BigCardGames