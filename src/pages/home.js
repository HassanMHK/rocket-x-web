import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';
import Navbar from '../components/navbar';
import Post from '../components/post'
import { useDispatch, useSelector } from 'react-redux';
import { setPosts, addPost } from '../redux/postRedux';

const Home = () => {
    
    const [inputs, setInputs] = useState({});
    // const [postsData, setpostsData] = useState(null);
    // const [isEmpty, setIsEmpty] = useState(false);
    const [reset, setReset] = useState(true);
    const { posts } = useSelector((store) => store.posts);
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            // const response = await axios(url);
            const response = await axios('data.json');
            const data = response.data;
            // setpostsData(data);
            dispatch(setPosts(data));
        } catch (error) {
            console.log(error.response);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({...values, [name]: value}));
        // const test = (values) => ({...values, [name]: value}, console.log(name, value));
        // test();
        // console.log(inputs);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("post: "+inputs);
        if(!inputs.title || !inputs.text){

        }else{
            const data = {id: posts.length+1, title: inputs.title, text: inputs.text};
            setReset(false);
            setTimeout(() => {
                dispatch(addPost(data));
                // setInputs({id:"", title:"", text:""});
                setReset(true);
            }, 1000);
        }
    }

    return(
        <>
            <Navbar />
            <div className='home-container w-full h-full flex flex-col items-center justify-start'>
                <div className='home-header w-full flex items-center justify-center h-16 bg-red-800'>
                </div>
                <div className='home-main h-full flex justify-center'>
                    <div className='home-left hidden md:flex md:w-1/6 lg:w-1/4 h-full'>
                        <div className='new-post h-full flex flex-col items-center justify-start rounded-md m-3 p-3 bg-gray-200 border border-solid border-gray-400'>
                            <p>
                                Contrary to pold. Rey College Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p>
                        </div>
                    </div>
                    <div className='home-center sm:w-full md:w-1/2 h-full flex flex-col items-center justify-start'>
                        <div className='new-post w-11/12 h-full flex flex-col items-center justify-start rounded-md my-3 p-3 bg-gray-200 border border-solid border-gray-400 drop-shadow'>
                            <h3 className='text-2xl'>Create a new post</h3>
                            { reset && <form  className='flex flex-col items-center justify-start'>
                                <input className='w-full h-11 my-3 px-2 rounded-md text-xl bg-gray-50 border border-solid border-gray-300' type="text" name="title" autoComplete="off" placeholder='Enter a title' required onChange={handleChange}></input>
                                <textarea className='w-full h-40 my-2 px-2 pt-2 rounded-md resize-none text-2xl bg-gray-50 border border-solid border-gray-300' name="text" autoComplete="off" placeholder="What's on your mind?" required
                                rows="4" cols="50" onChange={handleChange}></textarea>
                                <button className='w-20 h-9 bg-red-800 hover:bg-red-700  mx-1 my-2 rounded-md text-gray-50' onClick={handleSubmit}>Post</button>
                            </form>}
                            { !reset && <p>Loading...</p>}
                        </div>
                        <div className='posts-container w-11/12 h-full mb-14'>
                            {posts && posts.toReversed().map((post) => {
                                return (
                                    <Post id={post.id} {...post} key={post.id} />
                                );  
                            })}
                        </div>
                    </div>
                    <div className='home-left hidden md:flex md:w-2/6 lg:w-1/4 h-full'>
                        <div className='new-post h-full flex flex-col items-center justify-start rounded-md m-3 p-3 bg-gray-200 border border-solid border-gray-400'>
                            Contrary to pold. Rey College Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;