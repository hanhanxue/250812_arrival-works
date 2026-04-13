


import styles from './MenuButton.module.scss'

interface MenuButtonProps {
    isOpen: boolean
    onClick: () => void
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
    return (
        <button className={`${styles.menuButton} ${isOpen ? styles.open : ''}`} onClick={onClick}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </button>
    )
}

export default MenuButton