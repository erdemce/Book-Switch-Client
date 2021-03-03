import React from "react";
import { observer } from "mobx-react";
import Select from "react-select";
import { countries } from "../countries";

const $btn = "f6 link dim bn br2 ph3 pv2 mr2 dib white bg-dark-blue";
const $label = "f7 db mb2 mt3 light-silver";
const $small = "f6 black-60 db red mt1";
const CountrySelect = observer(({ form }) => (
  <div>
    <label className={$label}>{form.$("country").label}</label>
    <Select isSearchable options={countries} {...form.$("country").bind()} />
    <small className={$small}>{form.$("country").error}</small>
  </div>
));

export default observer(({ form }) => (
  <form onSubmit={form.onSubmit}>
     <CountrySelect form={form} />
    <br />
    <button type="submit" className={$btn} onClick={form.onSubmit}>
      Submit
    </button>
    <p>{form.error}</p>
  </form>
));