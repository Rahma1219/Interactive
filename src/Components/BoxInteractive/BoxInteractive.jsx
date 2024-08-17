
import './BoxInteractive.css'
import Img3 from '/assets/images/3.png'
// import Iconreply from '../../assets/images/icon-reply.svg'
// import Plus from '../../assets/images/icon-plus.svg'
// import minus from '../../assets/images/icon-minus.svg'
import BoxInteractiveItem from '../BoxInteractiveItem/BoxInteractiveItem'
import NewPost from '../NewPost/NewPost'
import { useState, useRef } from 'react'
import Deletebox from '../DeleteBox/Deletebox'



function BoxInteractive() {


    const [Array, setArray] = useState([
        {
            ProfileImg: "/public/assets/images/1.png",
            UserName: "amyrobson",
            Date: "1 month ago",
            Text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well",
            id: 1,
            likes: 0,
            createdAt: "Just now",
            comments: []

        },

        {
            ProfileImg: "/public/assets/images/3.png",
            UserName: "maxblagun",
            createdAt: "Just now",
            Date: "2 week ago",
            Text: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            id: 2,
            likes: 0,
            comments: []


        },

        {

            ProfileImg: "/public/assets/images/4.png",
            UserName: "ramsesmiron",
            Date: "1 week ago",
            Text: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before consid ering React. It's very tempting to jump ahead but lay a solid foundation first.",
            id: 3,
            likes: 0,
            class: "item1",
            Mention: "@ramsesmiron",
            createdAt: "Just now",
            comments: []

        },

        {

            ProfileImg: "/public/assets/images/2.png",
            UserName: "juliusomo",
            Date: "1 days ago",
            Text: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            likes: 0,
            id: 4,
            class: "item2",
            Mention: "@juliusomo",
            createdAt: "Just now",
            comments: []
        }
    ]);


    // const [deletemodel, setDeletemodel] = useState({
    //     message: "",
    //     isLoading: false,
    // });

    // const idArray = useRef()
    // const handledeletemodel = (message, isLoading) => {
    //     setDeletemodel({
    //         message,
    //         isLoading,
    //     })
    // }

    // //Delete Button
    // function HandleDelete(id) {
    //     handledeletemodel("Are you sure you want to delete this comment? This will remove the comment and can't be undone.", true)
    //     //     // setDeletemodel({
        //     //     message:"Are you sure you want to delete this comment? This will remove the comment and can't be undone.",
        //     //     isLoading: true,
        //     // })
        // idArray.current = id
        //  props.deleteItem(event.target.getAttribute("uniqueid"));

    // }


    // function youwantdelete(choose) {
    //     if (choose) {
    //         setArray(Array.filter(p => p.id !== idArray.current));
    //         handledeletemodel("", false)
            // setDeletemodel({
            //     message:"Are you sure you want to delete this comment? This will remove the comment and can't be undone.",
            //     isLoading: true,
            // });
    //     } else {
    //         handledeletemodel("", false)

    //     }

    // }




    function AddnewPostInsideArray(PostContent) {
        //creat new object
        let newPostObject = {
            ProfileImg: Img3,
            UserName: 'maxblagun',
            Date: 'Just now',
            Text: PostContent,
            id: 2,
            likes: 0,
            id: Array.length + 1,
            comments: []
        }

        // creat new Array of object
        let newArray = [...Array, newPostObject];
        setArray(newArray);

    };




    function deleteItem(PostId) {
        const newObjectAfterDelete = Array.filter((post) => {
            return post.id != PostId;
        });

        setArray(newObjectAfterDelete);

    }

    function addNewcomment(commentcontent, id) {
        // console.log(commentcontent,id)
        let myOldPost = Array.filter((post) => post.id == id)[0]
        let oldCommentCount = myOldPost.comments.length;

        let newCommentObject = {
            commentcontent: commentcontent,
            commentid: oldCommentCount + 1,

        }

        let newArray = Array.map((currentPost) => {
            if (currentPost.id == id) {
                currentPost.comments.push(newCommentObject)

            }
            return currentPost;

        })
        setArray(newArray)
    }

    function deleteComment(postid, commentid) {

        let newArrayAftercommentdelete = Array.map((post) => {
            if (post.id == postid) {
                let newArrayOfComments = post.comments.filter((comment) => {
                    return comment.commentid != commentid
                })
                return { ...post, comments: newArrayOfComments }
            }
            return post;
        });
        setArray(newArrayAftercommentdelete)
    }


    function updateComment(NewContent, postid, commentid) {
        console.log(NewContent, postid, commentid)

        let newArrayAftercommentdelete = Array.map((post) => {
            if (post.id == postid) {
                let newArrayCommentsAfterUpdate = post.comments.map((comment) => {
                    if (comment.commentid == commentid) {
                        return { ...comment, commentcontent: NewContent }

                    }
                    return comment;

                })
                //   console.log(newArrayCommentsAfterUpdate)
                post = { ...post, comments: newArrayCommentsAfterUpdate }
            }
            return post;
        });
        setArray(newArrayAftercommentdelete)

    }


    return (
        <>

            <div>

                {Array.map((post) => {
                    return (

                        <BoxInteractiveItem
                            key={post.id}
                            UserName={post.UserName}
                            ProfileImg={post.ProfileImg}
                            Date={post.Date}
                            Text={post.Text}
                            UniqueID={post.id}
                            deleteItem={deleteItem}
                            likes={post.likes}
                            comments={post.comments}
                            addNewcomment={addNewcomment}
                            deleteComment={deleteComment}
                            updateComment={updateComment}
                            placeholder={post.place}
                            class={post.class}
                            createdAt={post.createdAt}
                            Mention={post.Mention}
                        >
                        </BoxInteractiveItem>
                    );
                })}
            </div>

            <NewPost AddnewPostInsideArray={AddnewPostInsideArray}></NewPost>



            {/* {deletemodel.isLoading && <Deletebox onDeletbox={youwantdelete} message={deletemodel.message}></Deletebox>} */}



        </>
    )
};



export default BoxInteractive



// <BoxInteractiveItem
// key={item.id} 
// UserName={item.UserName} 
// ProfileImg={item.ProfileImg}
// Date={item.Date} 
//  Text={item.Text}>



// </BoxInteractiveItem>


{/* <div className="Boxs">


<div className="Box">

    <div className="counter">

        <button className="b">
            <div>
                <button onClick={Add} id="btn"><img src={Plus} /> </button>
            </div>
            <div>
                <strong id="count" > {count}</strong>
            </div>
            <div>
                <button onClick={Minus} id='btn'><img src={minus} /></button>
            </div>
        </button>
    </div>

    <div>
        <div id="title">
            <img src={Img1} alt="photo" id="img" />
            <div id="name">
                <span id="h">amyrobson </span>
                <span id="s">1 month ago </span>
            </div>

            <div>
                <a id="Reply" href="#">  <img src={Iconreply} alt="photo" id="icon" /> Reply</a>
            </div>


        </div>
        <div>
            <p id="para1">Impressive! Though it seems the drag feature could be improved. But overall it 
                looks incredible. You've nailed the design and the responsiveness at various 
                breakpoints works really well</p>
        </div>

    </div>
</div>

<div className="Box">

    <div className="Button">

        <button className="b">
            <div>
                <button onClick={Add1} id="btn"><img src={Plus} /> </button>
            </div>
            <div>
                <strong id="count" > {count1}</strong>
            </div>
            <div>
                <button onClick={Minus1} id='btn'><img src={minus} /></button>
            </div>
        </button>
    </div>

    <div>
        <div id="title">
            <img src={Img2} alt="photo" id="img" />
            <div id="name">
                <span id="h">juliusomo      </span>
                <span id="s">2 days ago </span>
            </div>

            <div>
                <a id="Reply" href="#">  <img src={Iconreply} alt="photo" id="icon" /> Reply</a>
            </div>


        </div>
        <div>
            <p id="para1">Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!</p>
        </div>

    </div>
</div>

<div className="Box">

    <div className="Button">

        <button className="b">
            <div>
                <button onClick={Add} id="btn"><img src={Plus} /> </button>
            </div>
            <div>
                <strong id="count" > {count}</strong>
            </div>
            <div>
                <button onClick={Minus} id='btn'><img src={minus} /></button>
            </div>
        </button>
    </div>

    <div>
        <div id="title">
            <img src={Img3} alt="photo" id="img" />
            <div id="name">
                <span id="h"> maxblagun  </span>
                <span id="s"> 2 week ago</span>
            </div>

            <div>
                <a id="Reply" href="#">  <img src={Iconreply} alt="photo" id="icon" /> Reply</a>
            </div>


        </div>
        <div>
            <p id="para1">If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.</p>
        </div>

    </div>
</div>

<div className="Box">

    <div className="Button">

        <button className="b">
            <div>
                <button onClick={Add} id="btn"><img src={Plus} /> </button>
            </div>
            <div>
                <strong id="count" > {count}</strong>
            </div>
            <div>
                <button onClick={Minus} id='btn'><img src={minus} /></button>
            </div>
        </button>
    </div>

    <div>
        <div id="title">
            <img src={Img4} alt="photo" id="img" />
            <div id="name">
                <span id="h"> ramsesmiron  </span>
                <span id="s"> 1 week ago</span>
            </div>

            <div>
                <a id="Reply" href="#">  <img src={Iconreply} alt="photo" id="icon" /> Reply</a>
            </div>


        </div>
        <div>
            <p id="para1">I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt</p>
        </div>

    </div>
</div>



</div> */}









// {
//     ProfileImg: Img1,
//     UserName: 'amyrobson',
//     Date: '1 month ago',
//     Text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well",
//     id: 1,
//     likes: 0,
//     createdAt:'Just now',
//     comments: []

// },

// {
//     ProfileImg: Img3,
//     UserName: 'maxblagun',
//     createdAt:'Just now',
//     Date: '2 week ago',
//     Text: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
//     id: 2,
//     likes: 0,
//     comments: []


// },

// {

//     ProfileImg: Img4,
//     UserName: 'ramsesmiron',
//     Date: '1 week ago',
//     Text: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
//     id: 3,
//     likes: 0,
//     class:'item1',
//     Mention:'@ramsesmiron',
//     createdAt:'Just now',
//     comments: []

// },

// {

//     ProfileImg: Img2,
//     UserName: 'juliusomo',
//     Date: '1 days ago',
//     Text: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
//     likes: 0,
//     class:'item2',
//     Mention:'@juliusomo',
//     createdAt:'Just now',
//     comments: []
// },