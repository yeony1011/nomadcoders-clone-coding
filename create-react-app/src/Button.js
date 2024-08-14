import PropTypes from "prop-types";
import styles from "./Button.module.css"; // js 객체로 들어가서 사용, 클래스 충돌 막음, 리액트에서 클래스 랜덤하게 노출시킴
// import styles from "./Button.css"; // css class 로 사용

function Button({text}){
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;

// [정리]
// > xxx.css
// UI개발자가 통상 사용하는 css의 클래스명 사용가능
// class=“nnn”

// > xxx.module.css
// js 객체로 들어가져서 사용됨
// class=“{styles.nnn}”
// 리액트에서 클래스명을 랜덤하게 노출시킴
// 다른 컴포넌트에서 클래스 충돌을 막음