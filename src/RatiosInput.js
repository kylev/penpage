import React from "react";
import { clamp } from "lodash";
import { observer } from "mobx-react";

import { FormControl, FormHelperText } from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";

const labels = ["Ascender", "X", "Descender", "Gap"];

let RatioInput = ({ store }) => (
  <span>
    {store.ratios.map((r, i) => (
      <span key={i} style={{ display: "inline-block", marginRight: 8 }}>
        <Input
          type="number"
          value={r}
          onChange={e => {
            store.ratioPreset("custom");
            store.ratios[i] = clamp(e.target.value, 0, 10);
          }}
          style={{ marginTop: 16, width: 60 }}
        />
        <br />
        <FormHelperText>{labels[i]}</FormHelperText>
      </span>
    ))}
  </span>
);
RatioInput = observer(RatioInput);

const RatiosInput = ({ store }) => {
  return (
    <FormControl>
      <InputLabel shrink>Ratios</InputLabel>
      <RatioInput store={store} />
    </FormControl>
  );
};

export default RatiosInput;
