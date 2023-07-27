import React, { useEffect, useState } from 'react'
import "./Home.scss"
export const Home = () => {
    const[t,setT]=useState(60);
    const[p,setP]=useState(0);
    const[start,setStart]=useState(false);
    const[r,Setr]=useState(-1);
    const[h,Handle]=useState(-1);
    var k=localStorage.getItem('max');
    if(k===undefined)
    {
        k=0;
    }
    const[max,Setmax]=useState(k);
    useEffect(()=>
    {
        if(t!==0 && start)
        {
            setTimeout(()=>
            {
                Setr(Math.floor(Math.random(9)*9)+1)
                setT(t-1)
            },1000);
        }
        else
        {
            localStorage.setItem("max",max);
            Setr(-1);
        }
        
        
    },[start,t])
   
    useEffect(()=>
    {
        if(t!==0 && start)
        {
            if(r===h)
            {
                setP(p+1);
            }
            Handle(-1);
            if(max<p)
            {
                Setmax(p);
            }
        }
       
    },[h])

    const reset=()=>{
        setStart(false);
        setT(60);
        setP(0);
        Setr(-1);
    }
    
  return (<>
    <div className='container'>
        <div className='container-inside'>
            <div className='head'>Color Flash</div>
            <div className='time'>{t===0?"Game Over!!":t +" Seconds"}</div>
            <div className='row'>
            <button onClick={()=>Handle(1)} className={r!==1?"normal":"colored"}>button</button>
            <button onClick={()=>Handle(2)} className={r!==2?"normal":"colored"}>button</button>
            <button onClick={()=>Handle(3)} className={r!==3?"normal":"colored"}>button</button>
            </div>
            <div className='row'>
            <button onClick={()=>Handle(4)} className={r!==4?"normal":"colored"}>button</button>
            <button onClick={()=>Handle(5)} className={r!==5?"normal":"colored"}>button</button>
            <button onClick={()=>Handle(6)} className={r!==6?"normal":"colored"}>button</button>
            </div>
            
            <div className='row'>
            <button onClick={()=>Handle(7)} className={r!==7?"normal":"colored"}>button</button>
            <button onClick={()=>Handle(8)} className={r!==8?"normal":"colored"}>button</button>
            <button onClick={()=>Handle(9)} className={r!==9?"normal":"colored"}>button</button>
            </div>
            
            <div className='class-button'>
            <button onClick={()=>setStart(true)}>Start</button>
            <button onClick={()=>reset()} >Reset</button>
            </div>
            <div className='row-items'>
                Your Current Score:{p}
            </div>
            <div className='row-items'>
                Your Maximum Score:{max?max:0}
            </div>
        </div>
    </div>
  </>
    
  )
}
