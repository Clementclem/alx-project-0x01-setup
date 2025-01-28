import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-4xl font-bold">Posts</h1>
        <p className="text-gray-600">This is the posts page.</p>
      </main>
    </div>
  );
};

export default Posts;

