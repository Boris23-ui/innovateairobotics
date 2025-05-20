import React from 'react';
import CodingChallenge from './CodingChallenge';

export default function CurrentChallenges() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Current Challenges</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CodingChallenge 
          title="Robot Maze Navigation" 
          description="Program your robot to move through a maze."
          type="Block-based" 
          completed={true} 
        />
        <CodingChallenge 
          title="Sensor Integration" 
          description="Use ultrasonic and touch sensors to avoid walls."
          type="Python" 
          completed={false} 
        />
      </div>
    </div>
  );
} 