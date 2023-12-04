
import styles from './spinner.module.css';
function SpinnerComponent () {
  return (
    <div className={ styles['shapes-container'] } data-testid="spinnerElem">
      <div className={ styles.shapes }/>
    </div>
  );
}


export { SpinnerComponent };
