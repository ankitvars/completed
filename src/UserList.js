import React from "react";

function UserList({ users }) {
  const renderedUsers = users.map((user) => (
    <tr key={user.name} style={styles.row}>
      <td style={styles.cell}>{user.name}</td>
      <td style={styles.cell}>{user.email}</td>
    </tr>
  ));

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.header}>Name</th>
          <th style={styles.header}>Email</th>
        </tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  header: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "15px",
    textAlign: "left",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  row: {
    borderBottom: "1px solid #ccc",
    transition: "background-color 0.3s ease",
  },
  cell: {
    padding: "15px",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
  },
};

export default UserList;