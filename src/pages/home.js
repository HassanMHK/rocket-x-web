import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';
import Navbar from '../components/navbar';

const Home = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({...values, [name]: value}));
        // const test = (values) => ({...values, [name]: value}, console.log(name, value));
        // test();
        console.log(inputs);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Done");
    }
    
    return(
        <>
            <Navbar />
            <div className='home-container w-full h-full flex flex-col items-center justify-start bg-gray-100'>
                <div className='home-header w-full h-16 bg-red-800'>
                </div>
                <div className='home-main h-full flex justify-center'>
                    <div className='home-left w-1/4 h-full'>
                        <div className='new-post h-full flex flex-col items-center justify-start rounded-md m-3 p-3 bg-gray-200 border border-solid border-gray-400'>
                            Contrary to pold. Rey College Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </div>
                    </div>
                    <div className='home-center w-6/12 h-full flex flex-col items-center justify-start'>
                        <div className='new-post w-11/12 h-full flex flex-col items-center justify-start rounded-md my-3 p-3 bg-gray-200 border border-solid border-gray-400 drop-shadow'>
                            <h3 className='text-2xl'>Create a new post</h3>
                            <form  className='flex flex-col items-center justify-start'>
                                <input className='w-full h-11 my-3 px-2 rounded-md text-xl bg-gray-50 border border-solid border-gray-300' type="text" name="title" autoComplete="off" placeholder='Enter a title' required onChange={handleChange}></input>
                                <textarea className='w-full h-40 my-2 px-2 pt-2 rounded-md resize-none text-2xl bg-gray-50 border border-solid border-gray-300' name="text" autoComplete="off" placeholder="What's on you mind?" required
                                rows="4" cols="50" onChange={handleChange}></textarea>
                                <button className='w-20 h-9 bg-red-800 mx-1 my-2 rounded-md text-gray-50' onClick={handleSubmit}>Post</button>
                            </form>
                        </div>
                        <div className='posts-container w-11/12 h-full mb-14'>
                            <div className="post-card w-full flex flex-col items-start justify-center rounded-md my-3 p-5 bg-gray-200 border border-solid border-gray-400">
                                <h3 className='text-2xl font-bold my-2'>Where does it come from?</h3>
                                <p className="post-text">Contrary to pold. Rey College Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            </div>
                            <div className="post-card w-full flex flex-col items-start justify-center rounded-md my-3 p-5 bg-gray-200 border border-solid border-gray-400">
                                <h3 className='text-2xl font-bold my-2'>Where does it come from?</h3>
                                <p className="post-text">Contrary to pold. Rey College Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            </div>
                            <div className="post-card w-full flex flex-col items-start justify-center rounded-md my-3 p-5 bg-gray-200 border border-solid border-gray-400">
                                <h3 className='text-2xl font-bold my-2'>Where does it come from?</h3>
                                <p className="post-text">Contrary to pold. Rey College Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            </div>
                            <div className="post-card w-full flex flex-col items-start justify-center rounded-md my-3 p-5 bg-gray-200 border border-solid border-gray-400">
                                <h3 className='text-2xl font-bold my-2'>Where does it come from?</h3>
                                <p className="post-text">Contrary to pold. Rey College Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            </div>
                            <div className="post-card w-full flex flex-col items-start justify-center rounded-md my-3 p-5 bg-gray-200 border border-solid border-gray-400">
                                <h3 className='text-2xl font-bold my-2'>Where does it come from?</h3>
                                <p className="post-text">Contrary to pold. Rey College Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            </div>
                        </div>
                    </div>
                    <div className='home-left w-1/4 h-full'>
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