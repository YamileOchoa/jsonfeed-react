import { useEffect, useState } from "react";
import { getUsers } from "../Api/jsonService";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column align-items-center py-4">
      <h1 className="mb-3 text-center">🌟 JSONPlaceholder Feed</h1>
      <p className="mb-4 text-muted text-center">
        Lista de usuarios desde la API pública
      </p>

      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 w-100 justify-content-center">
          {users.map((user) => (
            <div className="col" key={user.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {user.email} <br />
                    <strong>City:</strong> {user.address.city} <br />
                    <strong>Company:</strong> {user.company.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
