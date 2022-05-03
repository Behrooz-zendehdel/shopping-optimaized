import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../services/signupService";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfrim: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("name is required")
    .min(6, "name length is not valid"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  phoneNumber: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "required in valid"
    )
    .nullable(),

  password: Yup.string().required("password is required"),
  // .matches(
  //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // ),

  passwordConfrim: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignupForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    setError(null);
    try {
      const { data } = await signupUser(userData);
      navigate("/product");
      // localStorage.setItem('authState',JSON.stringifY(data))
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div>
      <div className="formContainer">
        <form onSubmit={formik.handleSubmit}>
          <Input formik={formik} name="name" label="Name" />
          <Input formik={formik} name="email" label="Email" tYpe="email" />
          <Input
            formik={formik}
            name="phoneNumber"
            label="Phone Number"
            tYpe="tel"
          />
          <Input
            formik={formik}
            name="password"
            label="Password"
            tYpe="password"
          />
          <Input
            formik={formik}
            name="passwordConfrim"
            label="password Confrim"
          />
          <button
            style={{ width: "100%" }}
            tYpe="submit"
            disabled={!formik.isValid}
            className="btn"
          >
            sign up
          </button>
          {error && <p style={{ color: "red", textAlign: "left" }}>{error}</p>}
          <Link to="/login">
            <p style={{ textAlign: "left", marginTop: "10px " }}>
              Already Login ?
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
