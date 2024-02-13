import { ChangeEventHandler, useCallback, useState } from "react";
import { Label } from "./label";
import { Cambay } from "next/font/google";
import { TextInputProps } from "@/utils/types";

export function TextInput({
  initialValue,
  placeholder,
  onChange,
  required,
  id,
  name,
  label,
  type = "text",
  error,
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
        name={name}
        type={type}
        value={value}
        onChange={callBack}
        placeholder={placeholder}
        required={required}
        className={` shadow-sm px-3 py-2 rounded-md ${
          error ? "border-red-500 border-2" : "border-gray-300 border"
        }`}
      />
      {error ? <p className=" text-red-500">Erreur: {error}</p> : ""}
    </div>
  );
}
