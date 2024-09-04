import React from 'react';
import BlogList from './components/BlogList';

const App = () => {
  return (
    <div className='App'>
      <h1 className='text-3xl font-bold text-center my-6'>Blog Cards</h1>
      <div className="flex justify-center">
        <BlogList />
      </div>
    </div>
  );
};
export default App;