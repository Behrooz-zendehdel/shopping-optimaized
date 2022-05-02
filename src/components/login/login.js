import { useFormik } from "formik";
import Input from "../../common/Input";
import "./login.css";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const onSubmit = (values) => {
  console.log(values);
};
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email("invalid email formats"),
  password: Yup.string().required("password is required"),
});

const LoginForm = () => {
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
