import { CheckboxInput } from "./checkbox-input";

export function CheckboxListInput({
  options,
  initiallyChecked,
  onChange,
  name,
}: CheckboxListInputProps) {
  return (
    <div className="flex flex-col gap-3 w-full border border-gray-300 rounded-md p-5 shadow-sm">
      <p className="font-bold">{name}</p>
      <div className="flex flex-col  p-5 items-start">
        {Object.entries(options).map(([key, value]) => (
          <CheckboxInput
            label={value}
            id={key}
            checked={
              initiallyChecked && initiallyChecked[key]
                ? initiallyChecked[key]
                : false
            }
            name={name}
          />
        ))}
      </div>
    </div>
  );
}
