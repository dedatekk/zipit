import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import PlacesAutocomplete, {
  getcodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Map from "./components/Map/Map";

const App = () => {
  const [address, setAddress] = React.useState("");
  // const { coordinates, setCoordinates } = React.useState({
  //   lat: null,
  //   lng: null,
  // });
  const handleSelect = async (value) => {};

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: </p>
            <p>Longditude: </p>
            <input {...getInputProps({ placeholder: "Type address" })} />
            <div>
              {loading ? <div>...loading</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };
                console.log(suggestion);
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
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
