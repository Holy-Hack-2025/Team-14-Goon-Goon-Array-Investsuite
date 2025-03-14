export const initialNodes = [
    { id: '1-1', type: 'customNode', position: { x: 100, y: 50 }, data: { label: 'Node 1', className: 'node-left' } },
    { id: '1-2', type: 'customNode', position: { x: 100, y: 200 }, data: { label: 'Node 2', className: 'node-left' } },
    { id: '1-3', type: 'customNode', position: { x: 100, y: 350 }, data: { label: 'Node 3', className: 'node-left' } },
  
    { id: '2-1', type: 'customNode', position: { x: 300, y: 125 }, data: { label: 'Node 4', className: 'node-right' } },
    { id: '2-2', type: 'customNode', position: { x: 300, y: 275 }, data: { label: 'Node 5', className: 'node-right' } },
  ];
  
export const initialEdges = [
    { id: 'e-11-21', source: '1-1', target: '2-1', type: 'straight'},
    { id: 'e-21-12', source: '2-1', target: '1-2', type: 'straight' },
    { id: 'e-12-22', source: '1-2', target: '2-2', type: 'straight'},
    { id: 'e-22-13', source: '2-2', target: '1-3', type: 'straight'}
    ];

