import React, { useState } from "react";

function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: "",
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(reservation));
  }

  return (
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label> Pay by Credit Card: </label>{" "}
        <input
          name="payByCreditCard"
          type="checkbox"
          checked={reservation.payByCreditCard}
        />{" "}
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          placeholder="First Name"
        />
        <input
          name="lastName"
          value={reservation.lastName}
          placeholder="Last name"
        />
        <button>Submit</button>
      </form>{" "}
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;
