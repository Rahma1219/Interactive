import { useState } from 'react';
import './AddNewComment.css'
import Img3 from '../../../public/assets/images/3.png'
import Counter from '../Counter/Counter';


function AddNewComment(props) {
const [CommentInput,setCommentInput]= useState("")

function HandleAddNewComment(event){
    props.HideReplySection();
    const id =event.target.getAttribute("uniqueid");
    props.addNewcomment(CommentInput , id);
    setCommentInput("");
   
}


function HandleOnChange(event){
     setCommentInput(event.target.value);
 }

    return (
        <div id="sendpost2" >
            <img src={Img3}  id='imgcomment'/>
            <input  id="comment2" value={CommentInput} onChange={HandleOnChange}></input>
            <button  id="btnsend" 
            onClick={HandleAddNewComment} 
             uniqueid={props.uniqueid}>REPLY</button>
        </div>
    )

}
export default AddNewComment