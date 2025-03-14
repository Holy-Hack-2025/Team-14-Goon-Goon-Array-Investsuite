import React from 'react';
import { Handle, Position } from 'reactflow';
import './CustomNode.css'

const CustomNode = ({ data }) => {
  return (
    <div className={`node-container ${data.className}`}>
      <Handle type="target" position={Position.Top} />
      <div className="node-content">
        <img src={data.imgSrc} alt={`${data.label} icon`} className="node-icon" />
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
