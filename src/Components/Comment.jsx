import React , { useState ,useEffect} from 'react';
import UserService from '../Services/UserService';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { width } from '@mui/system';
import queryString from 'query-string'
function Comment(props) {
    const [state, setState] = useState({});
    const onValueChange = (event) => {
        setState({...state,  [event.target.name] : event.target.value})
    } 
    const submitComment = (event)=>{
        event.preventDefault();
        const value=queryString.parse(window.location.search);
        const emailId=value.emailId;
        state.emailId = emailId;
        UserService.addComment(state).then(response=>{
            setComments(response.data)
            window.location.reload(false)
        });
    }
    const [comments, setComments] = useState({});
    useEffect(() => {
        UserService.showAllComments().then(response=>{
            console.log(response.data,"response")
            setComments(response.data)
        })
      },[]);
    return (
<>
<form onSubmit={submitComment}>
        <div className='mt-5 row col-md-12' > 
        <h5>What Would You Like to share with the world</h5>
         <div className='col-md-6'>
         <TextareaAutosize
        aria-label="empty textarea"
        cols={50}
        name="comment"
        style={{height:'10rem'}}
        onChange={onValueChange}
        />
       </div>
         <div className='col-md-6'>
            <Button
              type="submit"
              variant="contained"
              className="submitBtn"
            >
            Submit
            </Button>
          </div>    
        </div>
</form>
<div>
{comments && Number(comments.length) >0?comments.map(comment=>{
    return(
    <TextareaAutosize
        aria-label="empty textarea"
        cols={10}
        name="comment"
        style={{height:'5rem'}}
        value={comment.comment}
        />)
}):""}
</div>
</>
);
}

export default Comment;