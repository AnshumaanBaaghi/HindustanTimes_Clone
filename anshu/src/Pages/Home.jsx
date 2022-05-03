import React, { useEffect, useState } from 'react'
import { BelowNavBar, MainNewsDes, MainNewsDiv, MainNewsH2, MainNewsImg, MainNewsPubDate, MainNewsPubTime, MainNewsShare, MainNewsTimeDiv } from '../Components/styles'
import '../fontawesome-free-6.0.0-web/css/all.css'
import { MainNewsContainerStyle } from '../Components/styles'
import '../Components/common.css'
export const Home = () => {
    const FindMonth=(m)=>{
        switch(m){
            case 1:{
                return "Jan"
            }
            case 2:{
                return "Feb"
            }
            case 3:{
                return "Mar"
            }
            case 4:{
                return "Apr"
            }
            case 5:{
                return "May"
            }
            case 6:{
                return "June"
            }
            case 7:{
                return "July"
            }
            case 8:{
                return "Aug"
            }
            case 9:{
                return "Sep"
            }
            case 10:{
                return "Oct"
            }
            case 11:{
                return "Nov"
            }
            case 12:{
                return "Dec"
            }
        }
    }
    const [data,setData]  = useState([])
    const CallData = async()=>{
        let promise = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=81cd23c204f349be81345237249f7737");

        let d = await promise.json();
        // console.log('d:', d.articles)
        // if(d.articles[1].author!==null){
        //     console.log("A");
        // }
        setData(d.articles)
    }
    useEffect(()=>{
        CallData()
    },[])
  return (
    <MainNewsContainerStyle>
        <div style={{display:"flex",alignItems:"center",marginBottom:"20px"}}>
            <div className='headingLineDiv'>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
            </div>

            <div style={{fontSize:"20px",fontWeight:"bold",textAlign:"center",width:"20%"}}><span style={{color:"#00b1cd",fontSize:"25px"}}>[</span>Top News<span  style={{color:"#00b1cd",fontSize:"25px"}}>]</span></div>

            <div className='headingLineDiv'>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
            </div>
        </div>
        {data.map((el,i)=>{
            let year = ""
            let month ="";
            let date = "";
            let hour=""
            let min=""
            for(let i=0;i<4;i++){
               year+= el.publishedAt[i]
            }
            for(let i=5;i<7;i++){
               month+= el.publishedAt[i]
            }
            for(let i=8;i<10;i++){
               date+= el.publishedAt[i]
            }
            for(let i=11;i<13;i++){
               hour+= el.publishedAt[i]
            }
            for(let i=14;i<16;i++){
               min+= el.publishedAt[i]
            }
            hour  = +hour
            let zone=""
            if(hour>12){
                zone = "PM"
            }
            else{
                zone = "AM"
            }
            hour = hour%12
            let des = ""
            if(el.description){
                if(el.description.length>77){
                    // console.log('des', el.description.length)
                    for(let i=0;i<72;i++){
                        des+=el.description[i]
                    }
                    des+="..."
                    // console.log('des:', des)
                }
                else{
                    des = el.description
                }
            }
            month = +month
            month = FindMonth(month)
            // Updated on May 03, 2022 01:38 PM IST
            return(
                <MainNewsDiv className='MainNewsDiv'>
                    <div>
                        <MainNewsH2 className='pointer'>INDIA NEWS</MainNewsH2>
                        <MainNewsDes className='pointer'>{des}</MainNewsDes>
                        <MainNewsTimeDiv>
                            <MainNewsPubDate>Updated on {month} {date}, {year} {hour}:{min} {zone} IST</MainNewsPubDate>
                            <div>
                                <i style={{padding:"10px 12px",fontSize:"22px",color:"#2f2f2f"}} class="fa-solid fa-share-nodes"></i>
                                <i style={{padding:"10px 0px 10px 13px",fontSize:"22px",color:"#2f2f2f"}} class="fa-regular fa-bookmark"></i>
                            </div>
                        </MainNewsTimeDiv>
                    </div>
                    <div>
                        <MainNewsImg className='pointer' src={el.urlToImage} alt="" />
                    </div>
                </MainNewsDiv>
            )
        })}
    </MainNewsContainerStyle>
  )
}
