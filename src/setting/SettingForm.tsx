import { FocusEvent, useEffect, useRef, useState } from "react";
import FormInput from "../UI/FormInput";
import FormLabel from "../UI/FormLabel";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";
import Button from "../UI/Button";

function SettingForm() {
  const { isUpdatingSetting, updateSetting } = useUpdateSetting();
  const {
    isLoadingSetting,
    settingData: { order_qty, tax_rate, table_no } = {},
  } = useSettings();
  const [formData, setFormData] = useState({});
  const orderQtyRef = useRef<HTMLInputElement>(null);
  const taxRateRef = useRef<HTMLInputElement>(null);
  const tableNo = useRef<HTMLInputElement>(null);
  //()
  useEffect(() => {
    orderQtyRef.current?.focus();
  }, []);

  function handleUpdate(
    e: FocusEvent<HTMLInputElement, Element>,
    field: string,
  ) {
    const value = e.target.value;
    if (!value) return;
    setFormData({ ...formData, [field]: value });
    //  updateSetting(); //this object will setting the setting dynamically based on the value and field value .this is called Computed Property Names Feature
  }
  function handleSubmit() {
    updateSetting(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel label={"Order Quantity "}>
        <FormInput
          type="number"
          id="order_qty"
          ref={orderQtyRef}
          defaultValue={order_qty}
          disabled={isUpdatingSetting || isLoadingSetting}
          onChange={(e) => handleUpdate(e, "order_qty")}
        />
      </FormLabel>
      <FormLabel label={"Tax Rate"}>
        <FormInput
          type="number"
          id="tax_rate"
          ref={taxRateRef}
          defaultValue={tax_rate}
          disabled={isUpdatingSetting || isLoadingSetting}
          onChange={(e) => handleUpdate(e, "tax_rate")}
        />
      </FormLabel>
      <FormLabel label={"No Table"}>
        <FormInput
          type="number"
          id="table_no"
          ref={tableNo}
          defaultValue={table_no}
          disabled={isUpdatingSetting || isLoadingSetting}
          onChange={(e) => handleUpdate(e, "table_no")}
        />
      </FormLabel>
      <div className="flex justify-end">
        <Button style="addCart">submit</Button>
      </div>
    </form>
  );
}

export default SettingForm;
