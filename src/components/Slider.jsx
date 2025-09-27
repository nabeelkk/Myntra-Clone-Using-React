import '../components/Slider.css'
import { useState,useEffect } from 'react';

function Slider(){
  const [counter , setCounter] = useState(1)

  useEffect(()=>{
    const interval = setInterval(()=>{
        setCounter((prev)=>prev >= 5 ? 1 : prev+1)
    },3000)
    return ()=> clearInterval(interval)
  },[])

    return(
        <>
            <div className="slider">
      <div className="slides">
        <input type="radio" name="radio-btn" checked={counter === 1} id="radio1" readOnly />
        <input type="radio" name="radio-btn" checked={counter === 2} id="radio2" readOnly />
        <input type="radio" name="radio-btn" checked={counter === 3} id="radio3" readOnly />
        <input type="radio" name="radio-btn" checked={counter === 4} id="radio4" readOnly />
        <input type="radio" name="radio-btn" checked={counter === 5} id="radio5" readOnly />

        <div className="slide first">
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/2f6c8211-ac9e-4998-a4e8-bc16fea4cf2c1646124148372-HRX_Desk_Banner.jpg"
            alt="" />
        </div>
        <div className="slide">
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/391e3197-027d-4440-a0c4-b4e2d7ee494a1646139673447-H-N_Desk_Banner--3-.jpg"
            alt="" />
        </div>
        <div className="slide">
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/31200885-2552-4f5a-8a92-be464905ce181646151056720-MFH-Desktop-Banner-.jpg"
            alt="" />
        </div>
        <div className="slide">
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/28/349419f2-6b66-4b22-8135-f46c13104a4d1646060784174-Workwear-Collection_Dk.jpg"
            alt="" />
        </div>
        <div className="slide">
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/11cc5325-37c6-4490-9adb-6f09ccb2a0781637049244895-luxe-banner.jpg"
            alt="" />
        </div>

        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
          <div className="auto-btn5"></div>
        </div>
        
      </div>
     
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
        <label htmlFor="radio5" className="manual-btn"></label>
      </div>
      
    </div>
        </>
    );
}

export default Slider