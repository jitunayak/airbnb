import { useState } from "react";
import { FiltersIcon } from "../assets/FiltersIcon";
import { Button } from "./Button";
import FilterContent from "./FilterContent";
import Modal from "./Modal";
function Filters() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        color="outline"
        round="s"
        size="l"
        onClick={() => setShowModal(!showModal)}
      >
        <FiltersIcon />
        <span style={{ fontWeight: "600" }}>Filters</span>
        <Modal
          isOpen={showModal}
          title="Filters"
          primaryActionTitle="Show 649 Stays"
          secondaryActionTitle="Clear All"
        >
          <FilterContent />
        </Modal>
      </Button>
    </>
  );
}

export default Filters;
