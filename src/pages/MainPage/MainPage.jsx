
import './MainPage.css';
import Animals from '../../images/main-page/right-animals.png'

const MainPage = () => {
    return (
        <>
            <div className='main-page'>
                <h1 >Take good care <br className='br-desktop' />of<br className='br-tablet' /> your small<br className='br-desktop' /> pets</h1>
                <img src={Animals} alt='Animals'></img>
            </div>
        </>
    );
};

export default MainPage;