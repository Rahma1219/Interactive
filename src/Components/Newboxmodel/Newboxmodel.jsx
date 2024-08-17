import'./Newboxmodel.css'

function Newboxmodel(props) {

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

    )

}
export default Newboxmodel