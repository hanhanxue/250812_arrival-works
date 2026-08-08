

import styles from './XToggle.module.scss'

export default function XToggle({onClick, isOn = false}: {onClick: () => void, isOn: boolean}) {


  return (
    <button 
    type="button"
    role="switch"
    
    onClick={onClick} 
    className={`${styles.toggle} ${isOn ? styles.active : ""}`}>
      <div 
      className={styles.toggleKnob} 
// view-transition-name="themeToggleKnob"
      />

    </button>
  )
}