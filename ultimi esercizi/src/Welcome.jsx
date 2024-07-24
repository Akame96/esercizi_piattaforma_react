import { useParams } from "react-router-dom";

export function Welcome() {
  const { id } = useParams();

  return (
    <div>
      <h3>Welcome, {id}!</h3>
    </div>
  );
}
