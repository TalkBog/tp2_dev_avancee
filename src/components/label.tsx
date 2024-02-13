export function Label({ id, label, required }: LabelProps) {
  return (
    <label htmlFor={id}>
      {label}
      {required ? <span className=" text-red-500">*</span> : ""}
    </label>
  );
}
