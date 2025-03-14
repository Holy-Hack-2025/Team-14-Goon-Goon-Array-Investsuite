import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import './ProfileComponent.css';
import CustomNode from './CustomNode';
import { initialNodes, initialEdges } from './data';

const proOptions = { hideAttribution: true };

function ProfileComponent({ id, hoveredId, setHoveredId }) {
  const isBlurred = hoveredId !== null && hoveredId !== id;
  const nodeTypes = { customNode: CustomNode };

  return (
    
    <div className={`profile-container ${isBlurred ? 'blurred' : ''}`} 
        id={`profile-${id}`}>
      {/* React Flow Graph */}
      <div className="graph-container">
        <ReactFlow 
          nodes={initialNodes} 
          edges={initialEdges} 
          nodeTypes={nodeTypes} 
          proOptions={proOptions} 
          fitView
        />
      </div>

      {/* Separate Section Below the Graph */}
      <div className="profile-type-container">
        <div className='profile-type'
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
