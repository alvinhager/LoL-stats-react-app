interface TextFieldProps {
  value: string;
  onChange: (val: string) => void;
  className?: string | null;
}

export const TextField = ({
  value,
  onChange,
  className = null,
}: TextFieldProps) => {
  return (
    <input
      value={value}
      className={className ?? "unset"}
      onChange={({ target: { value } }) => onChange(value)}
    />
  );
};
