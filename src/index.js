/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import "./style.css";
import _ from "lodash";

const form = document.getElementById("form");
const results = document.getElementById("results")

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

form.addEventListener("submit", e => {
  e.preventDefault()
  const values = [input1.valueAsNumber, input2.valueAsNumber, input3.valueAsNumber];
  const sortedValues = _.sortBy(values);

  results.innerHTML = `
    <h2>
      ${sortedValues}
    </h2>
  `
});
