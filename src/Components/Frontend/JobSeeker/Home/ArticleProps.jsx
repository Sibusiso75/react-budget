import React, {useState} from 'react'
import { FaCommentAlt,  FaRegThumbsUp, FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function ArticleProps({id,comments,likes,name,posted,post}) {
          let navigate= useNavigate()  
    


  return (
    <div className='articleContainer'>
      <div onClick={()=>navigate(`/singleArticle/${id}`)} >

     
          <span style={{display:"flex", gap:"0.2rem"}
        }>

          <FaUserCircle style={{borderRadius:"30px",fontSize:"30px"}}/> <p><b>{name}</b></p>
          ,<p style={{ color:"gray"}}>{posted}</p>
          </span>
          {/* <p><b>Title: </b>{title}</p> */}


          <div>
            <p>{post} </p>   
           
          </div>
         
              
          </div>
           

               
             
          
                  
                 
                  <span style={{fontSize:"15px", borderRadius:"30px",color:"darkblue",width:"fit-content",padding:"10px"}} onClick={()=>navigate(`/singleArticle/${id}`)}>
                  <FaRegThumbsUp/> {likes.length}
                    </span>
               
               <div onClick={()=>navigate(`/singleArticle/${id}`)} style={{padding:"10px",display:"flex",gap:"1rem"}}>

<button style={{padding:"10px",width:"100px",background:"white",borderRadius:"20px", border:"1px solid gray"}} >
     <FaRegThumbsUp style={{color:"black"}}/> {likes.length===0?null:likes.length}
     </button>
     <button  style={{border:"1px solid gray",width:"100px",background:"white",padding:"10px",borderRadius:"20px"}} >
     <FaCommentAlt/> {comments.length}
     </button>
     </div>

    </div>
  )
}
export default ArticleProps