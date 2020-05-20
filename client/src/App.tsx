import React from 'react';
import './App.less';
import PageTitle from './components/PageTitle/PageTitle';

function App() {
  return (
    <div className="pagecontent">
      <PageTitle title="Title" subtitle="Subtitle" />
    </div>
  );
}

export default App;
