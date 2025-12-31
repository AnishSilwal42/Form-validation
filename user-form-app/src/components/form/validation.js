export const validateForm = (data) => {
  const errors = {};

  if (!data.firstName.trim())
    errors.firstName = "First name is required";

  if (!data.lastName.trim())
    errors.lastName = "Last name is required";

  if (!data.email)
    errors.email = "Email is required";
  else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
  )
    errors.email = "Invalid email address";

  if (!data.phone)
    errors.phone = "Phone number is required";
  else if (!/^\+?[0-9]{7,15}$/.test(data.phone))
    errors.phone = "Invalid phone number";

  if (!data.address.trim())
    errors.address = "Address is required";

  return errors;
};
