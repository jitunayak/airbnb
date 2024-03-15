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
        onClick={() => setShowModal(!showModal)}
        round="s"
        size="l"
        data-test-id="filter-button"
      >
        <FiltersIcon />
        <span style={{ fontWeight: "600" }}>Filters</span>
      </Button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        primaryActionTitle="Show 649 Stays"
        secondaryActionTitle="Clear All"
        title="Filters"
      >
        <FilterContent />
      </Modal>
    </>
  );
}

export default Filters;
