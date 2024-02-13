import { MouseEventHandler, useCallback, useState } from "react";
import { Eye, EyeClosed } from "@phosphor-icons/react/dist/ssr";
import { TextInput } from "./text-input";

export function PasswordInput({
  initialValue,
  placeholder,
  onChange,
  required,
  id,
  label,
  name,
  type,
  show,
}: PasswordInputProps) {
  const [showed, setShowed] = useState(show ?? false);
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();
      setShowed(!showed);
    },
    [showed]
  );
  return (
    <div className="flex flex-row gap-3 items-end justify-end w-full">
      <TextInput
        id={id}
        name={name}
        initialValue={initialValue}
        label={label}
        required={required}
        placeholder={placeholder}
        type={showed ? "text" : "password"}
        onChange={onChange}
      />
      <button
        onClick={handleClick}
        className="border-gray-300 border shadow-sm rounded-md flex items-center justify-center p-2 bg-orange-400 hover:bg-orange-500 transition-color text-white"
      >
        {showed ? <Eye size={25} /> : <EyeClosed size={25} />}
      </button>
    </div>
  );
}
