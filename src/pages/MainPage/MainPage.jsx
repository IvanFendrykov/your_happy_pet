import Header from '../../components/Header/Header.jsx';
import './MainPage.css';

const MainPage = () => {
    return (
        <>
            <Header></Header>
            <div className='main-page'>
                <h1>Take good care <br className='br-desktop' />of<br className='br-tablet' /> your small<br className='br-desktop' /> pets</h1>
            </div>
        </>
    );
};

export default MainPage;