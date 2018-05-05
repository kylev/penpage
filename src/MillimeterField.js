import React from "react";
import { translate } from "react-i18next";

import { withStyles } from "material-ui/styles";
import { InputAdornment } from "material-ui/Input";
import TextField from "material-ui/TextField";

const MillimeterField = props => {
  const {
    classes,
    onChange,
    label,
    max,
    min,
    step,
    t,
    tReady,
    ...other
  } = props;

  return (
    <TextField
      {...other}
      label={t(label)}
      onChange={e => onChange(e.target.value)}
      type="number"
      inputProps={{
        max,
        min,
        step,
        style: { width: 80 }
      }}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      InputProps={{
        endAdornment: <InputAdornment position="end">mm</InputAdornment>
      }}
      InputLabelProps={{ className: classes.label }}
    />
  );
};

const styles = theme => {
  return {
    label: { whiteSpace: "nowrap" }
  };
};

export default translate()(withStyles(styles)(MillimeterField));
