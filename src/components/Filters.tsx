import { FiltersIcon } from "../assets/FiltersIcon";
import { Button } from "./Button";
function Filters() {
  return (
    <>
      <Button color="outline" round="s" size="l">
        <FiltersIcon />
        <span style={{ fontWeight: "600" }}>Filters</span>
      </Button>
    </>
  );
}

export default Filters;
