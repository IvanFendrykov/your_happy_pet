import { useNavigate } from 'react-router-dom';
import LogoIcon from 'icons/LogoIcon';
import styles from './logo.module.css';



export default function Logo({ isMobile}) {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate('/main');
  };

  return (
    <div className={styles.logo} onClick={navigateToMain}>
      <LogoIcon isMobile={isMobile} />
    </div>
  );
}
