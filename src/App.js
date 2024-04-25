// App.js

import React from 'react';
import WaveChart from './components/WaveChart';
import Card from './components/Card';

const App = () => {
  // Sample data for the wave chart
  const waveData = [0, 1, 2, 1, 0, -1,  -1, 0, 1, 2, 1, 0,0, 1, 2, 1, 0, -1,  -1, 0, 1, 2, 1, 0,0, 1, 2, 1, 0, -1,  -1, 0, 1, 2, 1, 0,0, 1, 2, 1, 0, -1,  -1, 0, 1, 2, 1, 0,0, 1, 2, 1, 0, -1,  -  1, 0, 1, 2, 1, 0,0, 1, 2, 1, 0, -1,  -1, 0, 1, 2, 1, 0,0, 1, 2, 1, 0, -1,  -1, 0, 1, 2, 1, 0,0, 1, 2, 1, 0, -1,  -1, 0, 1, 2, 1, 0,0, 1, 2, 1, 0, -1,  -1, 0, 1, 2, 1, 0,0, 1, 2, 1, 0, -1,  -  1, 0, 1, 2, 1, 0,];

  return (
    <div>
      <h1>Wave Chart Example</h1>
      <Card>
        <div style={{ width: '800px', height: '300px' }}>
          <WaveChart data={waveData} />
        </div>
      </Card>
    </div>
  );
};

export default App;
