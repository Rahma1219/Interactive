import './Deletebox.css'

function Deletebox(props) {


    // function cancelDelete()  {
    //     setDeleting(false);
    //     setDeleteModalState(false);
    //   };
    
    //   function deleteBtnClick() {
    //     deleteComment();
    //     setDeleteModalState(false);
    //   };
    function handledelete2(event){
      props.deleteItem(event.target.getAttribute("UniqueID"))
    }


    return (
        <div id='bgg'>
            <div className='deletemodel'>
                <h4 id='titlebox'>Delete comment</h4>
                <p id='textdeletemes'> Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>

                <div id='btn2'>
                    <button
                        onClick={props.cancelDelete}
                        id='cancelbtn'>
                        NO,CANSEL
                    </button>
                  

                    <button
                        onClick={handledelete2}
                        UniqueID={props.UniqueID}
                        id='deletebtn1'>
                        YES,DELETE
                    </button>

                </div>


            </div>

        </div>
        // Are you sure you want to delete this comment? This will remove the comment and can't be undone.

    )

}
export default Deletebox