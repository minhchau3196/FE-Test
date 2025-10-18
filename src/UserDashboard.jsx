import React, { useState, useMemo } from "react";
import "./UserDashboard.css";

// Mock user data
const users = [
    { id: 1, name: "Jane Doe", email: "jane@example.com", total: 200, status: "completed" },
    { id: 2, name: "John Smith", email: "john@example.com", total: 150, status: "pending" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", total: 300, status: "completed" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", total: 50, status: "cancelled" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", total: 400, status: "completed" },
    { id: 6, name: "Diana Prince", email: "diana@example.com", total: 120, status: "processing" },
    { id: 7, name: "Ethan Hunt", email: "ethan@example.com", total: 250, status: "completed" },
    { id: 8, name: "Fiona Gallagher", email: "fiona@example.com", total: 180, status: "pending" },
];
  

const UserDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  // Calculate summary for completed orders
  const { completedCount, totalSum } = useMemo(() => {
    const completedOrders = users.filter((u) => u.status === "completed");
    return {
      completedCount: completedOrders.length,
      totalSum: completedOrders.reduce((sum, u) => sum + u.total, 0),
    };
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center animate__animated animate__fadeIn">User Dashboard</h2>

      {/* Order Summary */}
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        <div className="card shadow-sm px-4 py-3 text-center">
          <h6 className="text-uppercase text-secondary mb-1">Completed Orders</h6>
          <h5 className="text-success">{completedCount}</h5>
        </div>
        <div className="card shadow-sm px-4 py-3 text-center">
          <h6 className="text-uppercase text-secondary mb-1">Total Revenue</h6>
          <h5 className="text-primary">${totalSum}</h5>
        </div>
      </div>

      {selectedUser ? (
        <div className="alert alert-info text-center">
          <strong>Selected:</strong> {selectedUser.name}
        </div>
      ) : (
        <div className="text-center text-muted mb-3">Click on a user card to select</div>
      )}

      {/* User Cards */}
      <div className="row g-4">
       {users.map((user, index) => (
          <div
          key={user.id}
          className="col-12 col-sm-6 col-md-4 col-lg-3 animate__animated animate__zoomIn"
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: "0.8s",
          }}
          >
            <div
              className="card h-100 shadow-sm user-card"
              onClick={() => setSelectedUser(user)}
            >
              <img
                src={`https://i.pravatar.cc/150?img=${user.id}`}
                className="card-img-top"
                alt={user.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-1">{user.name}</h5>
                <p className="text-muted small mb-2">{user.email}</p>
                <button className="btn btn-outline-primary btn-sm">View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
