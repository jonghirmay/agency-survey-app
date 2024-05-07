import styles from "./Checkbox.module.scss";
import cn from "classnames";
export default function CheckBox({
  value,
  label,
  labelMediumBold,
  name,
  handleChange,
  blueVersion,
  disabled,
  bigGreenVersion,
  alignCenter,
  publicLead,
}) {
  return (
    <div
      className={cn(
        styles.customCheckBox,
        blueVersion && styles.blueVersion,
        bigGreenVersion && styles.bigGreen,
        disabled && styles.disabled
      )}
      onClick={(e) => {
        {publicLead && e.stopPropagation()}
      }}
    >
      <label className={alignCenter ? styles.alignCenter : ""}>
        <input
          type="checkbox"
          disabled={disabled}
          name={name}
          checked={value}
          onChange={(e) => {
            handleChange(e.target.name, e.target.checked);
          }}
        />
        <span className={styles.checkmark}></span>
        <span
          className={cn(styles.label, labelMediumBold && styles.mediumBold)}
        >
          {label}
        </span>
      </label>
    </div>
  );
}

