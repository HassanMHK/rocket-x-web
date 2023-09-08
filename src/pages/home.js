import '../styles.css';
import Navbar from '../navbar';

const Home = () => {

    return(
        <>
            <Navbar current={"Home"}/>
            <div className='home-container'>
                <div className='home-main'>
                    <h1>Home page</h1>
                </div>
            </div>
        </>
    );
};

export default Home;