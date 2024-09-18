import { OverlayProps } from './OverlayTypes';
import styles from './Overlay.module.scss';

function Overlay({ onClose }: OverlayProps) {
  const handleClick = () => {
    onClose();
    sessionStorage.setItem('modalIsOpen', JSON.stringify(false));
  };

  return <div className={styles.overlay} onClick={handleClick}></div>;
}

export default Overlay;
