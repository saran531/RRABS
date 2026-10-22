import { useParams } from 'react-router-dom';

export default function ProjectDetails() {
  const { slug } = useParams();

  return (
    <section>
      <h1>Project Details</h1>
      <p>Route: /projects/:slug</p>
      {slug && <p>Current Project Slug: {slug}</p>}
    </section>
  );
}
