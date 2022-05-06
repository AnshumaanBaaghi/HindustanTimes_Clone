import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import '../Components/common.css'
import { MainNewsDes, MainNewsDiv, MainNewsH2, MainNewsImg, MainNewsPubDate, MainNewsTimeDiv } from '../Components/styles'

export const OtherNewsComponents = ({el,title,month,date,year,hour,min,zone,heading,id}) => {
    const [saved,setSaved] = useState(false)
    const handleSaved=async()=>{
        let promise = await fetch("http://localhost:8080/SavedData",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify({
                id:id,
                Heading:heading,
                description:el.description,
                title:el.title,
                urlToImage:el.urlToImage,
                publishedAt:el.publishedAt,
            })
        })
        setSaved(true)
    }
    const handleRemove=async()=>{
        let promise = await fetch(`http://localhost:8080/SavedData/${id}`,{
            method:"DELETE",
        })
        setSaved(false)
    }
  return (
    <MainNewsDiv className='MainNewsDiv'>
                        <div>
                            <MainNewsH2 className='pointer'>{heading}</MainNewsH2>
                            <MainNewsDes className='pointer'>{title}</MainNewsDes>
                            <MainNewsTimeDiv>
                                <MainNewsPubDate>Updated on {month} {date}, {year} {hour}:{min} {zone} IST</MainNewsPubDate>
                                <div>
                                    <i style={{padding:"10px 12px",fontSize:"22px",color:"#2f2f2f"}} class="fa-solid fa-share-nodes"></i>
                                    {saved?<i onClick={handleRemove}  style={{padding:"10px 0px 10px 13px",fontSize:"22px",color:"#2f2f2f"}} class="fas fa-bookmark"></i>:<i onClick={handleSaved}  style={{padding:"10px 0px 10px 13px",fontSize:"22px",color:"#2f2f2f"}} class="fa-regular fa-bookmark"></i>}
                                </div>
                            </MainNewsTimeDiv>
                        </div>
                        <div>
                            <MainNewsImg className='pointer' src={el.urlToImage} alt="" />
                        </div>
                    </MainNewsDiv>
  )
}
