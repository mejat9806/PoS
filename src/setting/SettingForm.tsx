import { FocusEvent, useState } from "react";
import FormInput from "../UI/FormInput";
import FormLabel from "../UI/FormLabel";
import Spinner from "../UI/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";
import Button from "../UI/Button";

function SettingForm() {
  const { isUpdatingSetting, updateSetting } = useUpdateSetting();
  const { isLoadingSetting, settingData: { order_qty, tax_rate } = {} } =
    useSettings();
  const [formData, setFormData] = useState({});

  // const { order_qty, tax_rate } = settingData;
  // console.log(order_qty);

  function handleUpdate(
    e: FocusEvent<HTMLInputElement, Element>,
    field: string,
  ) {
    const value = e.target.value;
    if (!value) return;
    setFormData({ ...formData, [field]: value });
    //  updateSetting(); //this object will setting the setting dynamically based on the value and field value .this is called Computed Property Names Feature
  }
  function handleSubmit(e) {
    updateSetting(formData);
  }

  if (isLoadingSetting) return <Spinner />;

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel label={"Order Quantity "}>
        <FormInput
          type="number"
          id="order_qty"
          defaultValue={order_qty}
          disabled={isUpdatingSetting}
          onBlur={(e) => handleUpdate(e, "order_qty")}
        />
      </FormLabel>
      <FormLabel label={"Tax Rate"}>
        <FormInput
          type="number"
          id="tax_rate"
          defaultValue={tax_rate}
          disabled={isUpdatingSetting}
          onBlur={(e) => handleUpdate(e, "tax_rate")}
        />
      </FormLabel>
      <div className="flex justify-end">
        <Button style="addCart">submit</Button>
      </div>
    </form>
  );
}

export default SettingForm;
