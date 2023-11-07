import React from 'react'
import { useState } from 'react'
import '../Components/common.css'
export const FirstNewsComponent = ({el,title,month,date,year,hour,min,zone,heading,id}) => {
    const [saved,setSaved] = useState(false)
    const handleSaved=async()=>{
        let promise = await fetch(`${JSON_DB_BASE_URL}/SavedData`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify({
                id:id,
                Heading:heading,
                description:el.description,
                title:el.title,
                image:el.image,
                publishedAt:el.publishedAt,
            })
        })
        setSaved(true)
    }
    const handleRemove=async()=>{
        let promise = await fetch(`${JSON_DB_BASE_URL}/SavedData/${id}`,{
            method:"DELETE",
        })
        setSaved(false)
    }
  return (
    <div className='MainNewsFirstDiv'>
    <div className='pointer MainNewsFirstH2'>{heading}</div>
    <h2 className='pointer MainNewsFirstDes'>{title}</h2>
    <img className='pointer MainNewsFirstImg' src={el.image} alt="" />
    <div className='MainNewsTimeFirstDiv'>
        <div className='MainNewsFirstPubDate'>Updated on {month} {date}, {year} {hour}:{min} {zone} IST</div>
        <div> 
            <i style={{padding:"10px 12px",fontSize:"22px",color:"#2f2f2f"}} class="fa-solid fa-share-nodes"></i>
            {saved?<i onClick={handleRemove}  style={{padding:"10px 0px 10px 13px",fontSize:"22px",color:"#2f2f2f"}} class="fas fa-bookmark"></i>:<i onClick={handleSaved}  style={{padding:"10px 0px 10px 13px",fontSize:"22px",color:"#2f2f2f"}} class="fa-regular fa-bookmark"></i>}
        </div>
    </div>
    </div>
  )
}
