import React from "react";
import { useFormik } from "formik";
import "./Signup.css";
import * as Yup from "yup";

const Signup = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Recuired"),
        lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Recuired"),
        email: Yup.string()
        .email('Invalid email address')
        .required("Recuired"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.errors)

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
      </div>
      {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
      <div className="input-container">
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
      </div>
      {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
      <div className="input-container">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
