import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { deletePost, editPost } from '../redux/postRedux';

const Post = (props) => {
    const { title, text, id} = props;
    const [postsData, setpostsData] = useState(null);
    const [inputs, setInputs] = useState({});
    const [edit, setEdit] = useState(false);
    const { posts } = useSelector((store) => store.posts);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({...values, [name]: value}));
        // const test = (values) => ({...values, [name]: value}, console.log(name, value));
        // test();
        // console.log(inputs);
    }

    const editClick = (e) => {
        setInputs({id: id, title: title, text: text});
        e.preventDefault();
        setEdit(true);
    }
    const deleteClick = (e) => {
        e.preventDefault();
        // const postToDelete = e.target.parentElement.parentElement.parentElement.parentElement;
        // postToDelete.remove();
        dispatch(deletePost(id));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputs.title === undefined && inputs.text === undefined){
            inputs.title = title;
            inputs.text = text;
        }else if(inputs.title === undefined){
            inputs.title = title;
        }else if(inputs.text === undefined){
            inputs.text = text;
        }
        console.log("Edit: "+inputs);
        // setpostsData(inputs);
        dispatch(editPost({inputs, id}));
        setEdit(false);
    }
    const cancelEdit = () => {
        setEdit(false);
    }

    return (
        <div className="post-card w-full flex flex-col items-start justify-center rounded-md my-3 p-5 bg-gray-200 border border-solid border-gray-400 relative">
            { !edit && posts && <div>
                <h3 className='text-2xl font-bold my-2'>{title}</h3>
                <p className="post-text">{text}</p>
                <div className='mt-2 flex items-center justify-center absolute top-0 right-0 px-1 mt-2 mr-2'>
                    <button className='h-6 bg-yellow-500 rounded px-1 text-md text-gray-50 font-bold' onClick={editClick}><span className="material-symbols-outlined">edit_square</span></button>
                    <button className='w-6 h-6 bg-red-700 rounded text-md text-gray-50 font-bold ms-2' onClick={deleteClick}><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
            }
            { edit && <div className="post-edit w-full flex flex-col items-center justify-center">
                <input value={inputs.title} className='w-full h-11 my-3 px-2 rounded-md text-md bg-gray-50 border border-solid border-gray-300' type="text" name="title" autoComplete="off" placeholder='Enter a title' required onChange={handleChange}></input>
                <textarea value={inputs.text} className='w-full h-40 my-2 px-2 pt-2 rounded-md resize-none text-md bg-gray-50 border border-solid border-gray-300' name="text"
                    autoComplete="off" placeholder="What's on you mind?" required rows="4" cols="50" onChange={handleChange}>
                </textarea>
                <div className="flex">
                    <button className='w-20 h-9 bg-yellow-500 hover:bg-green-700  mx-1 my-2 rounded-md text-gray-50' onClick={handleSubmit}>Edit</button>
                    <button className='w-20 h-9 bg-red-800 hover:bg-red-700  mx-1 my-2 rounded-md text-gray-50' onClick={cancelEdit}>Cancel</button>
                </div>
            </div>}
        </div>
    );
}

export default Post;