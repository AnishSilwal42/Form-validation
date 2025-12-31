import { useState } from "react";
import { User, Mail, Phone, MapPin } from "lucide-react";
import InputField from "../InputField";
import { validateForm } from "./validation";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
};

export default function UserForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialState);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          User Information
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill in your personal details
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField
              label="First Name"
              name="firstName"
              icon={<User size={18} />}
              value={formData.firstName}
              error={errors.firstName}
              onChange={handleChange}
            />

            <InputField
              label="Last Name"
              name="lastName"
              icon={<User size={18} />}
              value={formData.lastName}
              error={errors.lastName}
              onChange={handleChange}
            />
          </div>

          <InputField
            label="Email Address"
            name="email"
            type="email"
            icon={<Mail size={18} />}
            value={formData.email}
            error={errors.email}
            onChange={handleChange}
          />

          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="+977XXXXXXXXX"
            icon={<Phone size={18} />}
            value={formData.phone}
            error={errors.phone}
            onChange={handleChange}
          />

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>

            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <MapPin size={18} />
              </span>

              <textarea
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 transition ${
                  errors.address
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-indigo-300"
                }`}
              />
            </div>

            {errors.address && (
              <p className="text-red-500 text-sm mt-1 animate-pulse">
                {errors.address}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition shadow-md"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-600 text-center font-medium">
              ✔ Form submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
