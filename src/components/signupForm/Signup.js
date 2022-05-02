import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import "./signup.css";
import { Link } from "react-router-dom";
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfrim: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required("name is required")
    .min(6, "name length is not valid"),
  email: Yup.string()
    .email("invalid email formats")
    .required("email is required"),
  phoneNumber: Yup.string().required("phone number is reuqired"),
  password: Yup.string()
    .required("password is required")
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  passwordConfrim: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignupForm = () => {
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
          <Input formik={formik} name="name" label="Name" />
          <Input formik={formik} name="email" label="Email" type="email" />
          <Input
            formik={formik}
            name="phoneNumber"
            label="Phone Number"
            type="tel"
          />
          <Input
            formik={formik}
            name="password"
            label="Password"
            type="password"
          />
          <Input
            formik={formik}
            name="passwordConfrim"
            label="password Confrim"
          />
          <button
            style={{ width: "100%" }}
            type="submit"
            disabled={!formik.isValid}
            className="btn"
          >
            sign up
          </button>
          <Link to="/login">
            <p style={{ textAlign: "left", color: "blue", marginTop: "10px " }}>
              Already Login ?
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
