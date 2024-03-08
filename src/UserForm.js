import { useState } from "react";

function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputContainer}>
        <label htmlFor="name" style={styles.label}>
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <label htmlFor="email" style={styles.label}>
          Email
        </label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </div>
      <button style={styles.button}>Add User</button>
    </form>
  );
}

const styles = {
  form: {
    width: "300px",
    margin: "0 auto",
  },
  inputContainer: {
    marginBottom: "10px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "5px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default UserForm;
