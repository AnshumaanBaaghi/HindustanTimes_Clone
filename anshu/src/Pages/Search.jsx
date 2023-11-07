import React, { useEffect, useState } from 'react'
import { MainNewsDes, MainNewsDiv, MainNewsH2, MainNewsImg, MainNewsPubDate, MainNewsTimeDiv } from '../Components/styles'
import '../fontawesome-free-6.0.0-web/css/all.css'
import { MainNewsContainerStyle } from '../Components/styles'
import '../Components/common.css'
import { FindMonth } from '../Redux/Action'
import { nanoid } from 'nanoid'
export const Search = () => {
    const [data, setData] = useState([]);
    const [val,setVal] = useState("")
    const CallData = async () => {
        let promise = await fetch(`https://newsapi.org/v2/everything?q=${val}&apiKey=81cd23c204f349be81345237249f7737`);

        let d = await promise.json();
        setData([...d.articles])
    }
    const handleSaved=async(el)=>{
        let promise = await fetch(`${JSON_DB_BASE_URL}/SavedData`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify({
                id:nanoid(),
                Heading:"TOP NEWS",
                description:el.description,
                title:el.title,
                image:el.image,
                publishedAt:el.publishedAt,
            })
        })
    }
    return (
        <MainNewsContainerStyle>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div className='headingLineDiv headingLineTop'>
                    <div className='headingLine'></div>
                    <div className='headingLine'></div>
                    <div className='headingLine'></div>
                </div>

                <div style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", width: "40%" }}><span className='bracketHome'>[</span>SEARCH NEWS<span className='bracketHome'>]</span></div>

                <div className='headingLineDiv headingLineTop'>
                    <div className='headingLine'></div>
                    <div className='headingLine'></div>
                    <div className='headingLine'></div>
                </div>
            </div>
            <div id="Search">
                <input onChange={(e)=>{setVal(e.target.value)}} type="text" placeholder='Type here to search news' />
                <i onClick={CallData} id='searchIcon' class="fas fa-search"></i>
            </div>
            {data.map((el, i) => {
                if (el.description && el.image) {
                    if (el.description[0] !== "<") {
                        let des = ""
                        if (el.description) {
                            if (el.description.length > 77) {
                                for (let i = 0; i < 72; i++) {
                                    if (el.description[i] === "<") {
                                        return
                                    }
                                    des += el.description[i]
                                }
                                des += "..."
                            }
                            else {
                                des = el.description
                            }
                        }
                        let title = ""
            let flag = true;
        for(let i=0;i<el.title.length;i++){
            if(el.title[i]==="-"){
                flag = false
            }
            if(flag){
                title+=el.title[i]
            }
        }
                        return (
                            <MainNewsDiv className='MainNewsDiv'>
                                <div>
                                    <MainNewsH2 className='pointer'>{val} News</MainNewsH2>
                                    <MainNewsDes className='pointer'>{title}</MainNewsDes>
                                </div>
                                <div>
                                    <MainNewsImg className='pointer' src={el.image} alt="" />
                                </div>
                            </MainNewsDiv>
                        )

                    }
                }
            })}
        </MainNewsContainerStyle>
    )
}
