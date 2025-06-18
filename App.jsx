import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import PostList from './components/PostList';

function App() {
  return (
    <Layout>
      <div className="space-y-8">
        <TaskManager />
        <PostList />
      </div>
    </Layout>
  );
}

export default App;
