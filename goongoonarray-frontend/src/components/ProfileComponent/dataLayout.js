// short nodes

export const initialNodesShort = [
  { id: '1-1', type: 'customNode', position: { x: 100, y: 50 }, data: { label: 'Car', className: 'node-left', imgSrc:'https://img.icons8.com/ios/50/car--v1.png' }, draggable: false },
  { id: '1-2', type: 'customNode', position: { x: 100, y: 250 }, data: { label: 'Phone', className: 'node-left' }, draggable: false },
  { id: '2-1', type: 'customNode', position: { x: 300, y: 150 }, data: { label: 'Vacation', className: 'node-right' }, draggable: false },
  { id: '2-2', type: 'customNode', position: { x: 300, y: 350 }, data: { label: 'Current', className: 'node-right' }, draggable: false },
];

export const initialEdgesShort = [
  { id: 'e-11-21', source: '1-1', target: '2-1', type: 'straight' }, // Node 1 -> Node 3
  { id: 'e-21-12', source: '2-1', target: '1-2', type: 'straight' }, // Node 3 -> Node 2
  { id: 'e-12-22', source: '1-2', target: '2-2', type: 'straight' }, // Node 2 -> Node 4
];

  // med nodes

  export const initialNodesMed = [
    // Left side nodes
    { id: '1-1', type: 'customNode', position: { x: 100, y: 50 }, data: { label: 'Retirement', className: 'node-left', imgSrc: 'https://img.icons8.com/ios/50/men-age-group-6.png' }, draggable: false },
    { id: '1-2', type: 'customNode', position: { x: 100, y: 200 }, data: { label: 'Car', className: 'node-left', imgSrc:'https://img.icons8.com/ios/50/car--v1.png' }, draggable: false },
    { id: '1-3', type: 'customNode', position: { x: 100, y: 350 }, data: { label: '1Y', className: 'node-left' }, draggable: false },
  
    // Right side nodes
    { id: '2-1', type: 'customNode', position: { x: 300, y: 125 }, data: { label: 'Home', className: 'node-right' }, draggable: false },
    { id: '2-2', type: 'customNode', position: { x: 300, y: 275 }, data: { label: '2Y', className: 'node-right' }, draggable: false },
    { id: '2-3', type: 'customNode', position: { x: 300, y: 425 }, data: { label: 'Current', className: 'node-right' }, draggable: false }, // New node
  ];
  
  export const initialEdgesMed = [
    { id: 'e-11-21', source: '1-1', target: '2-1', type: 'straight' }, // Node 1 -> Node 4
    { id: 'e-21-12', source: '2-1', target: '1-2', type: 'straight' }, // Node 4 -> Node 2
    { id: 'e-12-22', source: '1-2', target: '2-2', type: 'straight' }, // Node 2 -> Node 5
    { id: 'e-22-13', source: '2-2', target: '1-3', type: 'straight' }, // Node 5 -> Node 3
    { id: 'e-13-23', source: '1-3', target: '2-3', type: 'straight' }, // Node 3 -> Node 6 (new connection)
  ];

// long nodes

export const initialNodesLong = [
  { id: '1-1', type: 'customNode', position: { x: 100, y: 50 }, data: { label: 'Retirement', className: 'node-left', imgSrc: 'https://img.icons8.com/ios/50/men-age-group-6.png' }, draggable: false },
  { id: '2-1', type: 'customNode', position: { x: 300, y: 200 }, data: { label: 'Home', className: 'node-right' }, draggable: false },
  { id: '2-2', type: 'customNode', position: { x: 100, y: 350 }, data: { label: 'Current', className: 'node-left' }, draggable: false },
];

export const initialEdgesLong = [
  { id: 'e-11-21', source: '1-1', target: '2-1', type: 'straight' }, // Node 1 -> Node 2
  { id: 'e-21-22', source: '2-1', target: '2-2', type: 'straight' }, // Node 2 -> Node 3
];