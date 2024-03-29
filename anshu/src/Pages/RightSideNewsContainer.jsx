import React, { useEffect, useState } from 'react'
import { LeftSideNewsContainerStyle, MainNewsDes, MainNewsDiv, MainNewsH2, MainNewsImg, MainNewsPubDate, MainNewsTimeDiv } from '../Components/styles'
import '../Components/common.css'
import { RightSideNewsContainerStyle } from '../Components/styles'
export const RightSideNewsContainer = () => {
  const [data,setData]  = useState([])
  const [data2,setData2]  = useState([])
    const CallData = async()=>{
        let promise = await fetch("https://newsapi.org/v2/everything?q=trending&apiKey=10ebb6b783bd45c78d28d7fdb43628ad");
        let d = await promise.json();
        setData(d.articles)
        let promise2 = await fetch("https://newsapi.org/v2/everything?q=viral&apiKey=10ebb6b783bd45c78d28d7fdb43628ad");
        let d2 = await promise2.json();
        setData2(d2.articles)
    }
    useEffect(()=>{
        CallData()
    },[])
    let count=0;
    let count2=0;
  return (
    <RightSideNewsContainerStyle>
        <div id="Rightdiv1">
        <div style={{display:"flex",alignItems:"center",marginBottom:"20px"}}>
            <div className='headingLineDiv headingLineTrending'>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
            </div>

            <div style={{fontSize:"16px",fontWeight:"bold",textAlign:"center"}}><span style={{color:"#00b1cd",fontSize:"20px"}}>[</span>TRENDING<span  style={{color:"#00b1cd",fontSize:"20px"}}>]</span></div>

            <div className='headingLineDiv headingLineTrending'>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
            </div>
        </div>
      {data.map((el,i)=>{
          if(count>4){
            return;
          }
          if(el.description){
            if(el.description[0]!=="<"){
             
          
          let des = ""
              if(el.description.length>65){
                  for(let i=0;i<60;i++){
                    if(el.description[i]==="<"){
                      return
                    }
                      des+=el.description[i]
                  }
                  des+="..."
              }
              else{
                  des = el.description
              }
              count++;
                  return(
                      
                    <div className='RightNewsDiv'>
                      <div>
                          <div className="LeftNewsDes pointer">{des}</div>
                      </div>
                      <img src={el.image} alt="" />
                  </div>
              )
            }
          }
        })}
        <div className='ViewAll pointer'>View All <i class="fas fa-greater-than"></i></div>
    </div>
      <div id="Rightdiv2">
        <div style={{display:"flex",alignItems:"center",marginBottom:"20px"}}>
            <div className='headingLineDiv headingLineViral'>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
            </div>

            <div style={{fontSize:"16px",fontWeight:"bold",textAlign:"center",width:"60%"}}><span style={{color:"#00b1cd",fontSize:"20px"}}>[</span>VIRAL VIDEOS<span  style={{color:"#00b1cd",fontSize:"20px"}}>]</span></div>

            <div className='headingLineDiv headingLineViral'>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
            </div>
        </div>
      {data2.map((el,i)=>{
          if(count2>4){
            return;
          }
          if(el.description){
              if(el.description[0]!=="<"){
                
            
            let des = ""
                if(el.description.length>65){
                    for(let i=0;i<60;i++){
                      if(el.description[i]==="<"){
                        return
                      }
                        des+=el.description[i]
                    }
                    des+="..."
                }
                else{
                    des = el.description
                }
                count2++;
                    return(
                        
                      <div className='RightNewsDiv'>
                        <div>
                            <div className="LeftNewsDes pointer">{des}</div>
                        </div>
                        <img src={el.image} alt="" />
                    </div>
                )
              }
            }
        })}
        <div className='ViewAll pointer'>View All <i class="fas fa-greater-than"></i></div>
    </div>
    </RightSideNewsContainerStyle>
  )
}
