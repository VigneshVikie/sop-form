import React, { useRef } from "react";
import "../App.css";
import { useFormik } from "formik";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { userSchema } from "../Validation/UserValidation";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyAiR8iJao-ZqzC1P_C7ijUqxtgM0wT5bUM",
  authDomain: "sop-generation-form.firebaseapp.com",
  projectId: "sop-generation-form",
  storageBucket: "sop-generation-form.appspot.com",
  messagingSenderId: "492645982737",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const SOPForm = () => {
  const form = useRef();

  const onSubmit = async () => {

    const data = formik.values;
    // Add the data to a Firestore collection
    const usersCollection = collection(firestore, "users");

    addDoc(usersCollection, data)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    // const userData = {
    //   fullName: formik.values.fullName,
    //   email: formik.values.email,
    //   // Add other user data as needed
    // };

    const userData = formik.values;

    try {
      const response = await axios.post("http://localhost:5173/", userData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    // formik.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      age: "",
      highestEducation: "",
      institution: "",
      studiedEdu: "",
      relevantExp: "",
      canadaInstitute: "",
      canadaDegree: "",
      applyingCountry: "",
      futureGoals: "",
      englishListening: "",
      englishReading: "",
      englishSpeaking: "",
      englishWriting: "",
      paidTutionFee: "",
      tutionFee: "",
      gic: "",
      paidGIC: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div className="main">
      <div className="ldiv">
        <div className="banner">
          <img
            src="https://lh6.googleusercontent.com/vHlmJXYwoJzkzWTJP1uGhFgY6sgJPIJCxl1tr5LufmBo8TvIU-EW8QLDYz6udujWDFqtNHbmn_0dVGc35tM--t4B5O2V17TC_BRV1DI6mX_3eYPzsxxIGXGBFgR0_hVQjw=w1020"
            alt=""
          />
        </div>
        <div className="header">
          <h1>Customized SOP Generator</h1>
          <p>
            Fill this questionnaire for the student. After submitting, you will
            receive an email at the email address that you have provided with a
            Statement of Purpose customized for you. You can use and modify that
            as per your needs. <br /> <br /> If you would like to get it edited,
            reviewed, or drafted by our experts, you can get in touch with us:
            <br />
            <br />
            <a
              href="https://effizient-immigration-inc.square.site/s/shop"
              target="_blank"
            >
              https://effizient-immigration-inc.square.site/s/shop
            </a>
          </p>
        </div>
      </div>
      <div className="rdiv">
        <form ref={form} onSubmit={formik.handleSubmit}>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="email">Email*</label>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                id="email"
                placeholder="Enter your Email"
                onBlur={formik.handleBlur}
                className={
                  formik.errors.email && formik.touched.email
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.email && formik.touched.email ? (
                <div className="error-message">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="fullName">Full Name*</label>
              <input
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="fullName"
                placeholder="Enter your Full Name"
                className={
                  formik.errors.fullName && formik.touched.fullName
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.fullName && formik.touched.fullName ? (
                <div className="error-message">{formik.errors.fullName}</div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="age">Age*</label>
              <input
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="age"
                className={
                  formik.errors.age && formik.touched.age
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.age && formik.touched.age ? (
                <div className="error-message">{formik.errors.age}</div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="highestEducation">
                Highest Level of Education*
              </label>
              <select
                value={formik.values.highestEducation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="highestEducation"
                id="highestEducation"
                className={
                  formik.errors.highestEducation &&
                  formik.touched.highestEducation
                    ? "input-error"
                    : "input-box"
                }
              >
                <option value="" disabled>
                  Choose
                </option>
                <option>Grade 12</option>
                <option>Diploma</option>
                <option>Bachelors Degree</option>
                <option>Masters Degree</option>
                <option>Phd</option>
              </select>
            </div>
            <div className="err-msg">
              {formik.errors.highestEducation &&
              formik.touched.highestEducation ? (
                <div className="error-message">
                  {formik.errors.highestEducation}
                </div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="institution">
                Institute where you completed your highest level of education*
              </label>
              <input
                value={formik.values.institution}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="institution"
                className={
                  formik.errors.institution && formik.touched.institution
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.institution && formik.touched.institution ? (
                <div className="error-message">{formik.errors.institution}</div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="studiedEdu">What did you study*</label>
              <input
                value={formik.values.studiedEdu}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="studiedEdu"
                className={
                  formik.errors.studiedEdu && formik.touched.studiedEdu
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.studiedEdu && formik.touched.studiedEdu ? (
                <div className="error-message">{formik.errors.studiedEdu}</div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels label-relevantexp">
              <label htmlFor="relevantExp">
                Do you have any relevant work experience?*
              </label>
              <p>
                Write None if no work experience. Provide the following details
                if yes:
              </p>
              <ol>
                <li>Job Title</li>
                <li>Company Name</li>
                <li>Job duties</li>
              </ol>
              <p>
                Sample Answer: I worked as a Sales Manager at Effizient
                Immigration Inc from Jan 2022 till Feb 2023. In this role, I
                managed sales operations, reaching out to leads, lead the
                outreach program, ensured meeting monthly targets.
              </p>
              <input
                value={formik.values.relevantExp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="relevantExp"
                className={
                  formik.errors.relevantExp && formik.touched.relevantExp
                    ? "input-error-relevantexp"
                    : "input-relevantexp"
                }
              />
            </div>
            <div className="err-msg err-msg-relevantexp">
              {formik.errors.relevantExp && formik.touched.relevantExp ? (
                <div className="error-message">{formik.errors.relevantExp}</div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="canadaInstitute">
                What institute did you get admitted to in Canada?*
              </label>
              <input
                value={formik.values.canadaInstitute}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="canadaInstitute"
                className={
                  formik.errors.canadaInstitute &&
                  formik.touched.canadaInstitute
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.canadaInstitute &&
              formik.touched.canadaInstitute ? (
                <div className="error-message">
                  {formik.errors.canadaInstitute}
                </div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="canadaDegree">
                What is your program of study in Canada?*
              </label>
              <input
                value={formik.values.canadaDegree}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="canadaDegree"
                className={
                  formik.errors.canadaDegree && formik.touched.canadaDegree
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.canadaDegree && formik.touched.canadaDegree ? (
                <div className="error-message">
                  {formik.errors.canadaDegree}
                </div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="applyingCountry">
                Which country are you applying from?*
              </label>
              <input
                value={formik.values.applyingCountry}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="applyingCountry"
                className={
                  formik.errors.applyingCountry &&
                  formik.touched.applyingCountry
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.applyingCountry &&
              formik.touched.applyingCountry ? (
                <div className="error-message">
                  {formik.errors.applyingCountry}
                </div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="futureGoals">What are your future goals?*</label>
              <input
                value={formik.values.futureGoals}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="futureGoals"
                className={
                  formik.errors.futureGoals && formik.touched.futureGoals
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.futureGoals && formik.touched.futureGoals ? (
                <div className="error-message">{formik.errors.futureGoals}</div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="englishListening">
                English Scores - Listening*
              </label>
              <input
                value={formik.values.englishListening}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                id="englishListening"
                className={
                  formik.errors.englishListening &&
                  formik.touched.englishListening
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.englishListening &&
              formik.touched.englishListening ? (
                <div className="error-message">
                  {formik.errors.englishListening}
                </div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="englishReading">English Scores - Reading* </label>
              <input
                value={formik.values.englishReading}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                id="englishReading"
                className={
                  formik.errors.englishReading &&
                  formik.touched.englishReading
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.englishReading &&
              formik.touched.englishReading ? (
                <div className="error-message">
                  {formik.errors.englishReading}
                </div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="englishSpeaking">
                English Scores - Speaking*
              </label>
              <input
                value={formik.values.englishSpeaking}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                id="englishSpeaking"
                className={
                  formik.errors.englishSpeaking &&
                  formik.touched.englishSpeaking
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.englishSpeaking &&
              formik.touched.englishSpeaking ? (
                <div className="error-message">
                  {formik.errors.englishSpeaking}
                </div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="englishWriting">English Scores - Writing*</label>
              <input
                value={formik.values.englishWriting}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                id="englishWriting"
                className={
                  formik.errors.englishWriting && formik.touched.fullName
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.englishWriting && formik.touched.englishWriting ? (
                <div className="error-message">
                  {formik.errors.englishWriting}
                </div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels ">
              <label htmlFor="paidTutionFee">
                Did you pay your first year tuition?*
              </label>
              <div className="radio-input">
                <input
                  checked={formik.values.paidTutionFee === "Yes"}
                  onChange={formik.handleChange}
                  type="radio"
                  name="paidTutionFee"
                  value="Yes"
                />
                Yes
                <div style={{ paddingLeft: "40px" }}></div>
                <input
                  checked={formik.values.paidTutionFee === "No"}
                  onChange={formik.handleChange}
                  type="radio"
                  name="paidTutionFee"
                  value="No"
                />
                No
              </div>
            </div>
            <div className="err-msg">
              {formik.errors.paidTutionFee && formik.touched.paidTutionFee ? (
                <div className="error-message">
                  {formik.errors.paidTutionFee}
                </div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="tutionFee">
                How much tuition fee did you pay?*
              </label>
              <input
                value={formik.values.tutionFee}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="tutionFee"
                className={
                  formik.errors.tutionFee && formik.touched.tutionFee
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.tutionFee && formik.touched.tutionFee ? (
                <div className="error-message">{formik.errors.tutionFee}</div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="gic">Did you do a GIC?* </label>

              <div className="radio-input">
                <input
                  checked={formik.values.gic === "Yes"}
                  onChange={formik.handleChange}
                  type="radio"
                  value="Yes"
                  name="gic"
                />
                Yes
                <div style={{ paddingLeft: "40px" }}></div>
                <input
                  checked={formik.values.gic === "No"}
                  value="No"
                  onChange={formik.handleChange}
                  type="radio"
                  name="gic"
                />
                No
              </div>
            </div>
            <div className="err-msg">
              {formik.errors.gic && formik.touched.gic ? (
                <div className="error-message">{formik.errors.gic}</div>
              ) : null}
            </div>
          </div>
          <div className="label-wrapper">
            <div className="labels">
              <label htmlFor="paidGIC">
                How much did you pay towards GIC?*
              </label>
              <input
                value={formik.values.paidGIC}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="paidGIC"
                className={
                  formik.errors.paidGIC && formik.touched.paidGIC
                    ? "input-error"
                    : "input-box"
                }
              />
            </div>
            <div className="err-msg">
              {formik.errors.paidGIC && formik.touched.paidGIC ? (
                <div className="error-message">{formik.errors.paidGIC}</div>
              ) : null}
            </div>
          </div>
          <button type="submit">Submit</button>
          <div style={{ padding: "10px" }}></div>
        </form>
      </div>
    </div>
  );
};

export default SOPForm;
