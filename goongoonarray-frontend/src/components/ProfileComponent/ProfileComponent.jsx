import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import './ProfileComponent.css';
import CustomNode from './CustomNode';
import { initialNodesShort, initialNodesMed, initialNodesLong, initialEdgesShort, initialEdgesMed, initialEdgesLong } from './dataLayout';

const proOptions = { hideAttribution: true };

function ProfileComponent({ id, hoveredId, setHoveredId }) {
  const isBlurred = hoveredId !== null && hoveredId !== id;
  const nodeTypes = { customNode: CustomNode };

  let nodes, edges;
  switch (id) {
    case '0':
      nodes = initialNodesShort;
      edges = initialEdgesShort;
      break;
    case '1':
      nodes = initialNodesMed;
      edges = initialEdgesMed;
      break;
    case '2':
      nodes = initialNodesLong;
      edges = initialEdgesLong;
      break;
    default:
      nodes = initialNodesShort;
      edges = initialEdgesShort;
  }

  return (
    
    <div className={`profile-container ${isBlurred ? 'blurred' : ''}`} 
        id={`profile-${id}`}>
      {/* React Flow Graph */}
      <div className="graph-container">
        <ReactFlow 
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes} 
          proOptions={proOptions} 
          // Disable all controls
          nodesDraggable={false}      // Prevent node dragging
          nodesConnectable={false}    // Prevent edge creation
          elementsSelectable={false}  // Prevent selection of nodes/edges
          panOnDrag={false}           // Prevent canvas panning
          zoomOnScroll={false}        // Prevent zooming with scroll
          zoomOnPinch={false}         // Prevent zooming with pinch
          zoomOnDoubleClick={false}   // Prevent zooming on double-click
          panOnScroll={false}         // Prevent panning with scroll
          preventScrolling={true}     // Prevent browser scroll interference
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
