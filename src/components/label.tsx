export function Label({ id, label, required }: LabelProps) {
  return (
    <label htmlFor={id} className=" mb-1 relative left-2">
      {label}
      {required ? <span className=" text-red-500">*</span> : ""}
    </label>
  );
}
