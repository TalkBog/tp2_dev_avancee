import { ChangeEventHandler, useCallback, useState } from "react";
import { Label } from "./label";
import { Cambay } from "next/font/google";

export function TextInput({
  initialValue,
  placeholder,
  onChange,
  required,
  id,
  label,
  type = "text",
}: TextInputProps) {
  const [value, setValue] = useState(initialValue ? initialValue : "");

  const callBack: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const result = e.target.value;
      setValue(result);

      if (onChange) {
        onChange(result);
      }
    },
    [onChange]
  );

  return (
    <div className="flex flex-col w-full">
      <Label id={id} label={label} required={required} />
      <input
        id={id}
        type={type}
        value={value}
        onChange={callBack}
        placeholder={placeholder}
        required={required}
        className=" border-gray-300 border shadow-sm px-3 py-2 rounded-md"
      />
    </div>
  );
}
