import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const justTestNav = () => {
    navigate("/profile");
  };
  return (
    <div>
      Feed Component
      <button onClick={justTestNav}>Click to navigate!</button>
    </div>
  );
};

export default Feed;
