export default function InputField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  icon,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>

        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full pl-10 pr-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 transition ${
            error
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-indigo-300"
          }`}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1 animate-pulse">
          {error}
        </p>
      )}
    </div>
  );
}
