import React from 'react';
import { Handle, Position } from 'reactflow';

const CustomNode = ({ data }) => {
  return (
    <div className={`node-container ${data.className}`}>
      <Handle type="target" position={Position.Top} />
      <div className="node-content">{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
