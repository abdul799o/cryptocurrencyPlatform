// Define the UserDetails component that receives a 'user' object as a prop.
const UserDetails = ({ user }) => {
  const updatedAt = new Date(user.updatedAt);
  const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const dateString = updatedAt.toLocaleString(undefined, dateOptions);

  return (
    // Container div for the user details. Each user's details will be displayed in this structured format.
    <div className="user-details">
      <h4>
        {user.firstName} {user.lastName}
      </h4>{" "}
      {/* Display the user's full name. */}
      <p>
        <strong>Email: </strong> {/* Label for the user's email. */}
        {user.email} {/* Display the user's email. */}
      </p>
      <p>
        <strong>Phone Number: </strong>{" "}
        {/* Label for the user's phone number. */}
        {user.phoneNumber} {/* Display the user's phone number. */}
      </p>
      <p>
        <strong>Updated at: </strong>{" "}
        {/* Label for the user's last updated timestamp. */}
        {dateString}
        {/* Display the timestamp of when the user was last updated in a readable format. */}
      </p>
    </div>
  );
};

// Export the UserDetails component for use in other parts of the application.
export default UserDetails;
