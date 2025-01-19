import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthValue } from "../../hooks/useAuthValue";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const [posts, setPosts] = useState(null);

  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents } = useFetchDocuments("posts", null, uid);

  const { deleteDocument, deleting } = useDeleteDocument("posts");

  useEffect(() => {
    if (documents) {
      setPosts(documents);
    }
  }, [documents]);

  async function deleteDocumentById(id) {
    await deleteDocument(id);
  }

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

      {posts &&
        posts.map((post) => (
          <div className={styles.post_row} key={post.id}>
            <p>{post.title}</p>
            <div className={styles.actions}>
              <Link to={`/posts/${post.id}`} className={styles.link_visualize_item}>
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`}>
                <button type="button" className={styles.button_success}>
                  Editar
                </button>
              </Link>
              <button
                onClick={() => deleteDocumentById(post.id)}
                className={styles.button_danger}
                disabled={deleting}
              >
                {deleting ? "Excluindo..." : "Excluir"}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
