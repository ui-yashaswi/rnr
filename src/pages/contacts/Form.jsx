// import React from 'react'
import { TbSlashes } from "react-icons/tb";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  // Formik hook to manage form state and handle submission
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // handle form submission
      console.log(values);
      alert("Message Sent!");
    },
  });

  return (
    <div className="lg:px-44">
      <h1 className="text-[#f42222] font-bold text-lg lg:text-xl pt-10   text-nowrap ">
        CONTACT FORM
      </h1>

      <div className="flex justify-center items-center lg:gap-4">
        <h1 className="lg:text-4xl font-bold  text-xl">
          DO YOU HAVE ANY QUESTIONS?
        </h1>
        <TbSlashes className="text-[#f42222] text-6xl font-bold" />
      </div>

      <div className="px-4  py-6  ">
        <form
          onSubmit={formik.handleSubmit}
          className=" w-full h-full flex gap-4 flex-col"
        >
          {/* First Line with Name, Email, Phone */}

          <div className=" w-full h-full flex  gap-4">
            <div className="w-full lg:w-1/3 ">
              <input
                id="name"
                name="name"
                type="text"
                placeholder=" Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`mt-1 block w-full p-3 border  border-gray-400 ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "focus:border-red-500"
                }`}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="w-full lg:w-1/3">
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" Your Mail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`mt-1 block w-full p-3 border  border-gray-400 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "focus:border-red-500"
                }`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="w-full lg:w-1/3">
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder=" Your Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className={`mt-1 block w-full p-3 border  border-gray-400 ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-500"
                    : "focus:border-red-500"
                }`}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>
          </div>

          {/* Second Line with Message */}
          <div className="mt-4">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder=" Type Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`mt-1 block w-full p-6 border  border-gray-400 ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "focus:border-red-500"
              }`}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button className="bg-[#f42222] text-white text-[17px] py-2  px-[16px]">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
