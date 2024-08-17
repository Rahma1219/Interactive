
import {  useState } from 'react'

import './BoxInteractiveItem.css'
import AddNewComment from '../AddNewComment/AddNewComment';
import CommentWrapper from '../CommentWrapper/CommentWrapper';
import Iconreply from '/assets/images/icon-reply.svg'
import Icondelete from '/assets/images/icon-delete.svg'
import Counter from '../Counter/Counter';
import Deletebox from '../DeleteBox/Deletebox';



function BoxInteractiveItem(props) {

    const [showReplyDiv, setshowReplyDiv] = useState(false)
    const [showboxmodel, setShowboxmodel] = useState(false)

    
 

   

    //Reply Button
    function HandleReplyBtn() {
        let finalResult = !showReplyDiv
        setshowReplyDiv(finalResult)

    }

    function HideReplySection() {
        setshowReplyDiv(false)
    }

 
    
    function handledelete(){
        setShowboxmodel(true)
    }

   function cancelDelete(){
    let final = !showboxmodel
    setShowboxmodel(final)
  

   }




    return (
        <>


            <div className="Boxs">


                <div className={props.class}>

                    <div className="Box" >
                        <Counter likes={props.likes}></Counter>

                        <div className='Box2'>
                            <div id="title">
                                <img src={props.ProfileImg} alt="photo" id="img" />
                                <div id="name">
                                    <span id="h">{props.UserName} </span>
                                    {props.UserName == 'maxblagun' ? (
                                        <a id='you'>you</a>

                                    ) : null}
                                    <p id="s">{props.Date} </p>
                                </div>
                               


                                {props.UserName == 'maxblagun' ? (<a
                                    uniqueid={props.UniqueID}
                                    className='DeleteBtns'
                                    onClick={handledelete}
                                >
                                    <img src={Icondelete} id='icond' />
                                    Delete
                                </a>
                                ) : null}



                                {showboxmodel == true ?(
                                    
                                <Deletebox
                                cancelDelete={cancelDelete}
                                UniqueID={props.UniqueID}
                                deleteItem={props.deleteItem}
                               ></Deletebox>

                                ):null

                                }




                               
                         

                               

                            




                                <div >
                                    <a className="Reply" href="#" onClick={HandleReplyBtn}>
                                        <img src={Iconreply} alt="photo" id="icon" />
                                        Reply</a>
                                </div>

                            </div>


                            <div>
                                <p id="para1"><span id='mention'>{props.Mention}</span> {props.Text}</p>
                            </div>

                        </div>

                    </div>

                </div>
                <CommentWrapper
                    postid={props.UniqueID}
                    AllComments={props.comments}
                    deleteComment={props.deleteComment}
                    updateComment={props.updateComment}
                    likes={props.likes}
                    createdAt={props.createdAt}
                    cancelDelete={props.cancelDelete}

                >
                </CommentWrapper>


                {showReplyDiv == true ? (
                    <AddNewComment
                        HideReplySection={HideReplySection}
                        addNewcomment={props.addNewcomment}
                        uniqueid={props.UniqueID}
                    ></AddNewComment>) : null}




            </div>
        </>
    )
}

export default BoxInteractiveItem