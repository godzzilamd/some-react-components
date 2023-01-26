interface PostProps {
  title: string;
}

export const Post: React.FC<PostProps> = ({ title }) => {
  return (
    <div className="post-item">
      <div className="post-text">{title}</div>
    </div>
  );
};
