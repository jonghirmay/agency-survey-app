import styles from './CustomRangeSlider.module.scss';
export default function CustomRangeSlider({ name, onChange, value }) {
    
    const handleChange = (event) => {
        onChange(name, event.target.value);

        const slider = document.querySelector(`.${styles.slider}`);
        // Calculate the percentage of the slider value relative to its max value (20)
        const percentage = (event.target.value / 20) * 100;
        // Update the CSS variable on the slider element
        slider.style.setProperty('--slider-value', `${percentage}%`);
    }


    return (
        <div className={styles.wrapper}>
            <label>
                Vilket timpris använder byrån i snitt:
                <span className={styles.span}> {value * 200} kr</span>
            </label>
            <input type="range" className={styles.slider} min={0} max={20} value={value} onChange={handleChange}/>
            <div className={styles.inputSubHeading}>
            <div>
              <label>0 kr</label>
            </div>
                    
            <div>
              <label>4000 kr</label>
            </div>
          </div>
        </div>
    )
}