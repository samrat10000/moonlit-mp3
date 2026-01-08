import React from 'react';
import Layout from './views/Layout';
import Dashboard from './views/Dashboard';
import './App.css';

function App() {
  const [isTripMode, setIsTripMode] = React.useState(false);

  const toggleTripMode = () => {
    setIsTripMode(!isTripMode);
  };

  return (
    <Layout isTripMode={isTripMode} toggleTripMode={toggleTripMode}>
      <Dashboard isTripMode={isTripMode} />
    </Layout>
  );
}

export default App;
