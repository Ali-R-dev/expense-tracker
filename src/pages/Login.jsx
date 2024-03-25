import style from "./style.module.css";
import img from "../assets/login-image.jpg";
const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.imageWrapper}>
          <img src={img} alt="login image shows finance" />
        </div>
        <div className="form-wrapper">login</div>
      </div>
    </div>
  );
};

export default Login;
