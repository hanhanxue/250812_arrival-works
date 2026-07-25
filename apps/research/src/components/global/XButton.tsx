import styles from "./XButton.module.scss";

interface IXButtonProps {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    style?: string
    // type: string
}

const XButton = ({ children, onClick, style }: IXButtonProps) => {

        const classStyle = () => {
        switch (style) {
            case 'primary':
                return `${styles.primary}`
            case 'secondary':
                return `${styles.secondary}`
            // case 'text':
            //     return `${styles.text}`
            // case 'icon':
            //     return `${styles.icon}`
            
            default:
                return `${styles.debug}`
        }
    }

    return (
        <button className={`${styles.button} ${classStyle()}`} onClick={onClick}>
            <div className={` ${styles.buttonState}`}>
                
            {children}  
            </div>

        </button>
    );
};

export default XButton;