import { useState } from 'react'
import Icondelete from '/assets/images/icon-delete.svg'
import IconEdit from '/assets/images/icon-edit.svg'
import Img3 from '/assets/images/3.png'
import './Comment.css'
import Counter from '../Counter/Counter'
import Newboxmodel from '../Newboxmodel/Newboxmodel/'








function Comment({ comment, postid, deleteComment, updateComment, likes, createdAt, cancelDelete }) {
    const [showEditSection, setshowEditSection] = useState(false)
    const [showmodeldelete, setShowmodeldelete] = useState(false)
    const [inputValue, setinputValue] = useState(comment.commentcontent)
    const [postId] = useState(postid)
    const [commentId] = useState(comment.commentid)
    const [showcancel, setShowCancel] = useState(false)


    function handledeletecomment() {
        deleteComment(postId, commentId)
    }

    function divdeletemodel() {
        setShowCancel(true)
    }



    function handleEditComment() {
        const neweditSectionValue = !showEditSection;
        setshowEditSection(neweditSectionValue)
    }
    function handleOnChange(event) {

        setinputValue(event.target.value)

    }

    function handleUpdatebtn() {
        updateComment(inputValue, postId, commentId)
        setshowEditSection(false)

    }

    function cancel() {
        let final = !showcancel
        setShowCancel(final)
    }



    return (
        <>
            <div id='newcomment'>


                <Counter likes={likes}></Counter>

                <div>
                    <div id='title1'>
                        <img src={Img3} alt="photo" id="img" />
                        <div id='name1'>
                            <span id="h">maxblagun </span>
                            <a id='you'>you</a>
                            <span id='time'>{createdAt}</span>

                        </div>

                        <div id='btnn'>

                            <button id='deletebtn'
                                onClick={divdeletemodel}
                            ><img src={Icondelete} id='icond' />
                                Delete</button>



                            {showcancel == true ? (
                                <Newboxmodel
                                    cancel={cancel}
                                    handledeletecomment={handledeletecomment}
                                ></Newboxmodel>
                            ) : null}

                            <button id='editbtn' onClick={handleEditComment}><img src={IconEdit} /> Edit</button>

                        </div>


                    </div>
                    <div id='textarea'>
                        {showEditSection == true ? (
                            <>

                                <div id='input3'>

                                    <input value={inputValue} onChange={handleOnChange} id='commentinput'></input>
                                </div>

                                <button id='btnupdate' onClick={handleUpdatebtn}>UPDATE</button>

                            </>

                        ) : (
                            <p id='commentedit'> {comment.commentcontent} </p>
                        )}

                    </div>

                </div>





            </div>




        </>


    )

}
export default Comment