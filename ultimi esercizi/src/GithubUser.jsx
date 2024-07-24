import { useState } from "react";

export function GithubUser() {
  const [username, setUsername] = useState('');
  const [users ,setUsers]= useState([])
  const [error, setError]= useSate(null)


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            const user = await response.json();
            if (!users.some(u => u.id === user.id)) {
                setUsers([...users, user]);
            }
            setUsername('');
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    }
};

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input 
      value={username} 
      type="text"
      />
      <button 
      type="submit">
      submit
      </button>
    </form>
    <ul>
    {users.map((user) => (
        <GithubUser key={user.id} user={user} />
    ))}
    </ul>
</div>
  );
}
