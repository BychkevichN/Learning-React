import styles from './ButtonLink.module.scss'

const ButtonLink = ({children, onClick}) => {
  return (
    <div className={styles.ButtonLink} onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonLink;