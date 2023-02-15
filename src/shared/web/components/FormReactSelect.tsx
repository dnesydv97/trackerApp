import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { debounce, pick } from "lodash";
import request from "@/utils/request";

const FormReactSelect = ({
  field: { name, value, onChange, onBlur, disabled },
  form: { errors, touched, submitCount, values, setFieldValue },
  placeholder,
  width = 200,
  options,
}) => {
  const [places, setPlaces] = useState([
    {
      label: "Select",
      value: "Select",
    },
  ]);
  const fetchPlaces = async (query) => {
    console.log("input query", query);
    if (!query.trim()) {
      return [];
    }
    try {
      const res = await request({
        method: "get",
        url: "v1/common/googlePlacesAutocomplete",
        params: {
          input: query.trim(),
        },
      });

      return res.map((place: any) => ({
        label: place.description,
        value: place.place_id,
      }));
    } catch (err) {
      console.log("test err", err);
    }
  };
  const handleChange = (label: any) => {
    console.log("select field===", label);
    setFieldValue(name, label);
  };
  return (
    <div>
      {/* <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} /> */}
      <AsyncSelect
        placeholder={"Search address"}
        options={places}
        isClearable
        loadOptions={debounce(fetchPlaces, 500)}
        onChange={(e) => {
          handleChange(e?.label);
        }}
      />
    </div>
  );
};

export default FormReactSelect;
