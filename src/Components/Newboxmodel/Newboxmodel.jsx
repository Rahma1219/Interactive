import'./Newboxmodel.css'

function Newboxmodel(props) {


    // function cancelDelete()  {
    //     setDeleting(false);
    //     setDeleteModalState(false);
    //   };
    
    //   function deleteBtnClick() {
    //     deleteComment();
    //     setDeleteModalState(false);
    //   };
    // function handledelete2(event){
    //   props.deleteItem(event.target.getAttribute("UniqueID"))
    // }


    return (
        <div id='bgg'>
            <div className='deletemodel'>
                <h3>Delete comment</h3>
                <p id='textdeletemes'> Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>

                <div id='btn2'>
                    <button
                        onClick={props.cancel}
                        id='cancelbtn'>
                        NO,CANSEL
                    </button>
                  

                    <button
                        id='deletebtn1'
                        onClick={props.handledeletecomment}>
                          
                        YES,DELETE
                    </button>

                </div>


            </div>

        </div>
        // Are you sure you want to delete this comment? This will remove the comment and can't be undone.

    )

}
export default Newboxmodel