import { useEffect, useState } from "react";
import { getPosts } from "../Api/jsonService";

const POSTS_PER_PAGE = 9;

function Entities() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = page * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column align-items-center py-4">
      <h1 className="mb-3 text-center">📜 Posts</h1>
      <p className="mb-4 text-muted text-center">
        Listado de publicaciones de la API
      </p>

      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4 w-100 justify-content-center">
            {currentPosts.map((post) => (
              <div className="col" key={post.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINACIÓN SIMPLE */}
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </button>
              </li>

              <li className="page-item">
                <button className="page-link active">{page}</button>
              </li>

              <li
                className={`page-item ${page === totalPages ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}

export default Entities;
