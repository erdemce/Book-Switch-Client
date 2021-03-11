import {Toast} from 'react-bootstrap'
      
function DeleteToast(props) {
    const [show, setToastShow] = useState(false);
  
    return (
        <Toast onClose={() => setToastShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <img src="/assets/033-delete-5.png" className="rounded mr-2"
                alt="deleteicon"
              />
              <strong className="mr-auto">Delete Book</strong>
            </Toast.Header>
            <Toast.Body>You're about to delete this book from your library. Are you sure?

            </Toast.Body>
        </Toast>
    
    )
}

export default DeleteToast