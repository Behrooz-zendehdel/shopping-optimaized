import { useFormik } from "formik";
import Input from "../../common/Input";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import LoginUser from "../../services/loginService";
import { useAuthActions } from "../../Providers/AuthProvider";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email("invalid email formats"),
  password: Yup.string().required("password is required"),
});

const LoginForm = () => {
  const setAuth = useAuthActions();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const onSubmit = async (values) => {
    console.log(values);

    try {
      const { data } = await LoginUser(values);
      setAuth(data);
      localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
      navigate("/ ");
    } catch (error) {
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div>
      <div className="formContainer">
        <form onSubmit={formik.handleSubmit}>
          <Input formik={formik} name="email" label="Email" type="email" />

          <Input
            formik={formik}
            name="password"
            label="Password"
            type="password"
          />

          <button
            style={{ width: "100%" }}
            type="submit"
            disabled={!formik.isValid}
            className="btn"
          >
            Login
          </button>
          {error && (
            <p style={{ color: "red", fontSize: "16px  ", textAlign: "left" }}>
              {error}
            </p>
          )}

          <Link to="/signup">
            <p
              style={{
                textAlign: "left",
                color: "blue",
                marginTop: "10px ",
                fontSize: "16px ",
                fontWeight: "400",
              }}
            >
              Not Signup Yet ?
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
