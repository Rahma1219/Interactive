import { useState } from "react";
import './NewPost.css'
import Img3 from '/assets/images/3.png'

function NewPost(props){
    const [inputvalue, setInputValue] = useState("")


    // function handleSendPost
    function handleSendPost(){
      
       props.AddnewPostInsideArray(inputvalue);
        setInputValue("");
    }

    //to Hold the words

    function handleOnChange(event){
    
        setInputValue(event.target.value);
    }
    


  
    return(
      <div className="Boxs">
         <div id="sendpost" >
          <img src={Img3} id="img2" />
           <input value={inputvalue} onChange={handleOnChange} id="comment" placeholder="Add a New Post...." />
            <button onClick={handleSendPost} id="btnsend">SEND</button>
        </div>

      </div>
       
  
       
    )
}

export default NewPost