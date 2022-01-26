import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import PlacesAutocomplete,{ getcodeByAddress, getLatLng} from "react-places-autocomplete";
import Map from "./components/Map/Map";

const App = () => {
  const [address, setAddress] = React.useState("");
  const handleSelect = async (value) => {};
  return (
    //{...getInputProps({ placeholder: "Type address" })}
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
          <div>
            
            <input {...getInputProps({ placeholder: "Type address" })} />
          </div>
        )}
      </PlacesAutocomplete>
      <CssBaseline />

      <Grid container spacing={3} style={{ width: "100%", height: "100%" }}>
        <Grid item xs={12} md={12}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
