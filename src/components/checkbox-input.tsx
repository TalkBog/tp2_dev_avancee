import { ChangeEventHandler, useCallback, useState } from "react";
import { Label } from "./label";
import { CheckboxInputProps } from "@/utils/types";

export function CheckboxInput({
  label,
  id,
  required,
  onChange,
  checked = false,
  name,
}: CheckboxInputProps) {
  const [check, setCheck] = useState(checked);
  const callback: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const value = e.target.checked;
      setCheck(value);
      if (onChange) {
        onChange(value);
      }
    },
    [onChange]
  );

  return (
    <div className="flex flex-row-reverse gap-3">
      <Label id={id} label={label} required={required} />
      <input
        id={id}
        type="checkbox"
        onChange={callback}
        checked={check}
        required={required}
        className="border-gray-300 border shadow-sm"
        name={name}
      />
    </div>
  );
}
