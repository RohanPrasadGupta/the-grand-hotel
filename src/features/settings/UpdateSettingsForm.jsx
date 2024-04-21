import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSettings } from "./useSetting";
import { editSettingsApi } from "../../services/apiSettings";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";

function UpdateSettingsForm() {
  const queryCient = useQueryClient();
  const { isLoading, settings } = useSettings();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: (data) => editSettingsApi(id, data),
    onSuccess: () => {
      toast.success("Setting Updated");
      queryCient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading || !settings) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const {
    _id: id,
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settings;

  function handleUpdateSetting(e, field) {
    const { value } = e.target;
    const data = { [field]: value };
    updateSetting(data);
  }

  return (
    <Form>
      <FormRow lable="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdateSetting(e, "minBookingLength")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow lable="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdateSetting(e, "maxBookingLength")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow lable="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdateSetting(e, "maxGuestsPerBooking")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow lable="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdateSetting(e, "breakfastPrice")}
          disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
