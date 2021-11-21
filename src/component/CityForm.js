import React, { useState } from "react";
import { findArea } from "../util/util-function";
import "./CityForm.css";

const CityForm = ({ city, setCity, disabled }) => {
  const [formValue, setFormValue] = useState();

  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValue((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    let form = formValue;
    const a = findArea(formValue && formValue.city);
    form = { ...form, area: a };

    const insertedCity = city.find((c) => c.area === a);

    if (typeof insertedCity === "undefined") {
      setCity([...city, form]);
    } else {
      alert("city is inserted");
    }

    setFormValue();
  };

  const disabledBtn = () => {
    const label = formValue && formValue.label;
    if (!formValue) return true;
    if (formValue && !formValue.city) return true;
    if (formValue && formValue.label && label.length > 20) return true;
    return disabled;
  };

  return (
    <div data-cy="form" className="form-container">
      <input
        data-cy="form-city"
        className="input-form"
        name="city"
        placeholder="City"
        value={formValue ? formValue.city : ""}
        onChange={(e) => inputHandler(e)}
      ></input>
      <input
        data-cy="form-label"
        className="input-form"
        name="label"
        placeholder="Label"
        value={formValue ? formValue.label : ""}
        onChange={(e) => inputHandler(e)}
      ></input>
      <button
        data-cy="form-button"
        className="input-button"
        onClick={() => submitForm()}
        disabled={disabledBtn()}
      >
        Save
      </button>
    </div>
  );
};

export default CityForm;
