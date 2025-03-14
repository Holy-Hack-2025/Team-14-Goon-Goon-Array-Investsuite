// data for portfolios
const riskyPort = {
  portfolio_name: "Risky",
  initial_investment: 500.0,
  monthly_contribution: 0.0,
  annual_return: 0.12,
  dividend_yield: 0.01,
  largest_holding: {
    stock: "TSLA",
    weight: 0.30,
    crash_percentage: 0.35,
    overall_portfolio_drop: 0.105
  },
  goals: [
    {
      goal_name: "Phone ($1k)",
      cost: 1000, // Chatgpt: Changed string to number
      extraYears: 1.1,
      time_no_crash: 1.1,
      time_after_crash: 1.3,
      crash_impact: 0.2
    },
    {
      goal_name: "Bahamas Vacation ($10k)",
      cost: 10000, // Chatgpt: Changed string to number
      extraYears: 2.7,
      time_no_crash: 3.8,
      time_after_crash: 4.6,
      crash_impact: 0.8
    },
    {
      goal_name: "Car ($30k)",
      cost: 30000, // Chatgpt: Changed string to number
      extraYears: 3,
      time_no_crash: 6.8,
      time_after_crash: 8.4,
      crash_impact: 1.6
    }
  ]
};


const medPort = {
  portfolio_name: "Average",
  initial_investment: 8000.0,
  monthly_contribution: 50.0,
  annual_return: 0.08,
  dividend_yield: 0.025,
  largest_holding: {
    stock: "MSFT",
    weight: 0.25,
    crash_percentage: 0.25,
    overall_portfolio_drop: 0.0625
  },
  goals: [
    {
      goal_name: "Car ($30k)",
      cost: 30000, // Chatgpt: Changed string to number
      time_no_crash: 4.3,
      time_after_crash: 4.9,
      crash_impact: 0.6
    },
    {
      goal_name: "House ($150k)",
      cost: 150000, // Chatgpt: Changed string to number
      time_no_crash: 14.1,
      time_after_crash: 15.2,
      crash_impact: 1.1
    },
    {
      goal_name: "Retirement ($300k)",
      cost: 300000, // Chatgpt: Changed string to number
      time_no_crash: 19.8,
      time_after_crash: 21.2,
      crash_impact: 1.4
    }
  ]
};


const longPort = {
  portfolio_name: "Very Long-Term",
  initial_investment: 20000.0,
  monthly_contribution: 100.0,
  annual_return: 0.08,
  dividend_yield: 0.04,
  largest_holding: {
    stock: "V",
    weight: 0.50,
    crash_percentage: 0.25,
    overall_portfolio_drop: 0.125
  },
  goals: [
    {
      goal_name: "House ($300k)",
      cost: 300000, // Chatgpt: Changed string to number
      time_no_crash: 19.6,
      time_after_crash: 21.3,
      crash_impact: 1.7
    },
    {
      goal_name: "Retirement ($500k)",
      cost: 500000, // Chatgpt: Changed string to number
      time_no_crash: 25.1,
      time_after_crash: 27.4,
      crash_impact: 2.3
    }
  ]
};

// short nodes

export const initialNodesShort = [
  { id: '1-1', type: 'customNode', position: { x: 100, y: 50 }, data: { label: 'Car', className: 'node-left', imgSrc:'https://img.icons8.com/ios/50/car--v1.png', riskProf: 0 }, draggable: false },
  { id: '1-2', type: 'customNode', position: { x: 100, y: 250 }, data: { label: 'Phone', className: 'node-left', imgSrc: 'https://img.icons8.com/ios/50/iphone.png', riskProf: 0 }, draggable: false },
  { id: '2-1', type: 'customNode', position: { x: 300, y: 150 }, data: { label: 'Vacation', className: 'node-right', imgSrc:'https://img.icons8.com/ios/50/sunbathe.png', riskProf: 0 }, draggable: false },
  { id: '2-2', type: 'customNode', position: { x: 300, y: 350 }, data: { label: 'Current', className: 'node-right', imgSrc:'https://img.icons8.com/ios/50/pixel-star.png', riskProf: 0 }, draggable: false },
];

export const initialEdgesShort = [
  { id: 'e-11-21', source: '1-1', target: '2-1', type: 'straight', label: `+${riskyPort.goals[2].extraYears}y`}, // Node 1 -> Node 3
  { id: 'e-21-12', source: '2-1', target: '1-2', type: 'straight', label: `+${riskyPort.goals[1].extraYears}y` }, // Node 3 -> Node 2
  { id: 'e-12-22', source: '1-2', target: '2-2', type: 'straight', label: `+${riskyPort.goals[0].extraYears}y` }, // Node 2 -> Node 4
];

  // med nodes

  export const initialNodesMed = [
    // Left side nodes
    { id: '1-1', type: 'customNode', position: { x: 100, y: 50 }, data: { label: 'Retirement', className: 'node-left', imgSrc: 'https://img.icons8.com/ios/50/men-age-group-6.png', riskProf: 1 }, draggable: false },
    { id: '1-2', type: 'customNode', position: { x: 100, y: 200 }, data: { label: 'Car', className: 'node-left', imgSrc:'https://img.icons8.com/ios/50/car--v1.png', riskProf: 1 }, draggable: false },
    { id: '1-3', type: 'customNode', position: { x: 100, y: 350 }, data: { label: '1Y', className: 'node-left', imgSrc:'https://img.icons8.com/ios/50/plus-1year.png', riskProf: 1 }, draggable: false },
  
    // Right side nodes
    { id: '2-1', type: 'customNode', position: { x: 300, y: 125 }, data: { label: 'Home', className: 'node-right', imgSrc:'https://img.icons8.com/ios/50/home--v1.png', riskProf: 1 }, draggable: false },
    { id: '2-2', type: 'customNode', position: { x: 300, y: 275 }, data: { label: '2Y', className: 'node-right', imgSrc:'https://img.icons8.com/ios/50/add-time.png', riskProf: 1 }, draggable: false },
    { id: '2-3', type: 'customNode', position: { x: 300, y: 425 }, data: { label: 'Current', className: 'node-right', imgSrc:'https://img.icons8.com/ios/50/pixel-star.png', riskProf: 1 }, draggable: false }, // New node
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
  { id: '1-1', type: 'customNode', position: { x: 100, y: 50 }, data: { label: 'Retirement', className: 'node-left', imgSrc: 'https://img.icons8.com/ios/50/men-age-group-6.png', riskProf: 2 }, draggable: false },
  { id: '2-1', type: 'customNode', position: { x: 300, y: 200 }, data: { label: 'Home', className: 'node-right', imgSrc: 'https://img.icons8.com/ios/50/home--v1.png', riskProf: 2 }, draggable: false },
  { id: '2-2', type: 'customNode', position: { x: 100, y: 350 }, data: { label: 'Current', className: 'node-left', imgSrc:'https://img.icons8.com/ios/50/pixel-star.png', riskProf: 2 }, draggable: false },
];

export const initialEdgesLong = [
  { id: 'e-11-21', source: '1-1', target: '2-1', type: 'straight' }, // Node 1 -> Node 2
  { id: 'e-21-22', source: '2-1', target: '2-2', type: 'straight' }, // Node 2 -> Node 3
];