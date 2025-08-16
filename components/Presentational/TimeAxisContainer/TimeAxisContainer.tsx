import React from 'react';
import TimeAxisBackground from './TimeAxisBackground';
import TimeAxis from './TimeAxis';

const TimeAxisContainer: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '300px',backgroundColor: 'rgba(252,92,92,0.35)' }}>
            <TimeAxisBackground
                width={800}
                height={300}
                timeAxisColor="#ff9900"
                timeAxisEndColor="#ffcc00"
            />
            <TimeAxis />
        </div>
    );
};

export default TimeAxisContainer;
