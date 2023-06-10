import { ThreeBody } from "@uiball/loaders";
const Loading = () => {
  return (
    <div className="loading">
      <ThreeBody size={60} color="#000" />
      <h2>Loading shopping cart...</h2>
    </div>
  );
};

export default Loading;
