const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold">{label}</label>
      <input
        className="border-1 border-gray-400 rounded-md p-1"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {!value.trim() && (
        <span className="text-red-500 text-xs font-semibold">
          لطفا {label} را وارد کنید
        </span>
      )}
      
    </div>
    
  );
};

export default InputField;
