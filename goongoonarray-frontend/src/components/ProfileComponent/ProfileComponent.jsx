import React, { useState } from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import './ProfileComponent.css';
import CustomNode from './CustomNode';
import { initialNodesShort, initialNodesMed, initialNodesLong, initialEdgesShort, initialEdgesMed, initialEdgesLong } from './dataLayout';
import happy from "./happy.png";
import sad from "./sad.png";
import neutral from "./neutral.png";
import StoryCarousel from './StoryCarousel';
import StoryCarouselFuture from './StoryCarouselFuture';

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

const longStockData = {
  WMT: {
    yearAgo: 60.50262451171875,
    current: 84.5,
    "1y": 235.73466545023646,
    "2y": 242.8462913865901
  },
  V: {
    yearAgo: 284.2890319824219,
    current: 328.54998779296875,
    "1y": 247.02261544409552,
    "2y": 238.00934450278746
  }
};

const riskyStockData = {
  MARA: {
    yearAgo: 18.229999542236328,
    current: 12.15999984741211,
    "1y": 243.54486788342393,
    "2y": 246.6420618315375
  },
  TSLA: {
    yearAgo: 162.5,
    current: 240.67999267578125,
    "1y": 231.92556276297162,
    "2y": 265.72440563537765
  }
}

const medStockData = {
  MSFT: {
    yearAgo: 421.9981994628906,
    current: 378.7699890136719,
    "1y": 239.2171433045867,
    "2y": 242.51849897064233
  },
  JNJ: {
    yearAgo: 154.2611846923828,
    current: 162.99000549316406,
    "1y": 234.08450614771792,
    "2y": 245.06258273797772
  },
  KO: {
    yearAgo: 59.176570892333984,
    current: 69.62000274658203,
    "1y": 235.1029886618918,
    "2y": 227.8508068953943
  },
  JPM: {
    yearAgo: 183.76902770996094,
    current: 225.19000244140625,
    "1y": 249.27822947842256,
    "2y": 257.8680445433922
  },
  IBM: {
    yearAgo: 187.13668823242188,
    current: 245.8000030517578,
    "1y": 232.54895368418912,
    "2y": 257.8309696942863
  }
}

const proOptions = { hideAttribution: true };

function ProfileComponent({ id, hoveredId, setHoveredId }) {
  const isBlurred = hoveredId !== null && hoveredId !== id;
  const nodeTypes = { customNode: CustomNode };
  const [hitboxShortHover, setHitboxShortHover] = useState(false);
  const [hitboxMed1Hover, setHitboxMed1Hover] = useState(false);
  const [hitboxMed2Hover, setHitboxMed2Hover] = useState(false);
  const [currentMedModal,setCurrentMedModal] = useState(false);
  const [currentMed2Modal, setCurrentMed2Modal] = useState(false);

    // ChatGPT change: Set the initial character image (neutral state by default)
    const [characterImage, setCharacterImage] = useState(neutral);

    // ChatGPT change: Function to update the character image based on stock performance
    const updateCharacterImage = (percentageChange) => {
      if (percentageChange < -3) {
        setCharacterImage(sad);
      } else if (percentageChange >= -3 && percentageChange <= 3) {
        setCharacterImage(neutral);
      } else {
        setCharacterImage(happy);
      }
    };

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
            {id == 0 ? (
              <>
                Risky
              </>
            ) : (
              <>
                {
                  id == 1 ? (
                    <>
                      Stable
                    </>
                  ) : (
                    <>
                      Long Term
                    </>
                  )
                }
              </>
            )}
        </div>
      </div>

      {/* hardcoded due to time constraint */}
      {currentMedModal ? (
        <div className='full-cover'>
          <div className='modal-container'>
            <div className='exitBtn' onClick={() => setCurrentMedModal(false)}>
              X
            </div>

            <div className='gridSplit-modal'>
              <div className='grid-character-container'>
                <img src={characterImage} alt="characterState" />
              </div>

              <div className='grid-story-container'>
                <div className='titleContainer'>
                  <h2>Stock performance overview</h2>
                </div>
                
                <StoryCarousel stockData={medStockData} updateCharacterImage={updateCharacterImage} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
        </>
      )}

      {currentMed2Modal ? (
        <div className='full-cover'>
          <div className='modal-container'>
            <div className='exitBtn' onClick={() => setCurrentMed2Modal(false)}>
              X
            </div>

            <div className='gridSplit-modal'>
              <div className='grid-character-container'>
                <img src={characterImage} alt="characterState" />
              </div>

              <div className='grid-story-container'>
                <div className='titleContainer'>
                  <h2>Predicted stock performance overview</h2>
                </div>
                
                <StoryCarouselFuture stockData={medStockData} updateCharacterImage={updateCharacterImage} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
        </>
      )}

      {id == 0 ? (
        <>
          {/* harcoded hitboxes (time constraint) */}
          <div className='hitbox-short-1' onMouseEnter={() => setHitboxShortHover(true)} onMouseOut={() => setHitboxShortHover(false)}>
          </div>
          {hitboxShortHover ? (
            <span className="tooltip-short-1">{riskyPort.goals[2].cost}$</span>
          ) : (
            <></>
          )}
          
          {/* hardcoded text component (time constraint) */}
          <div className='description-short-2'>
            <p>{riskyPort.goals[0].goal_name}: {riskyPort.goals[0].time_no_crash} years</p>
          </div>
        </>
      ) : (
        <>
          {id == 1 ? (
            <>
              {/* harcoded hitboxes (time constraint) */}
              <div className='hitbox-med-1' onMouseEnter={() => setHitboxMed1Hover(true)}
              onMouseOut={() => setHitboxMed1Hover(false)}
              onClick={() => setCurrentMedModal(true)}>
              </div>
              {hitboxMed1Hover ? (
                <span className="tooltip-med-1">Current Performance</span>
              ) : (
                <></>
              )}

              {/* harcoded hitboxes (time constraint) */}
              <div className='hitbox-med-2' 
              onMouseEnter={() => setHitboxMed2Hover(true)}
              onMouseOut={() => setHitboxMed2Hover(false)}
              onClick={() => setCurrentMed2Modal(true)}>
              </div>
              {hitboxMed2Hover ? (
                <span className="tooltip-med-2">Performance +1y</span>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ProfileComponent;
