import React, { useState } from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import './ProfileComponent.css';
import CustomNode from './CustomNode';
import { initialNodesShort, initialNodesMed, initialNodesLong, initialEdgesShort, initialEdgesMed, initialEdgesLong } from './dataLayout';

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

const proOptions = { hideAttribution: true };

function ProfileComponent({ id, hoveredId, setHoveredId }) {
  const isBlurred = hoveredId !== null && hoveredId !== id;
  const nodeTypes = { customNode: CustomNode };
  const [hitboxShortHover, setHitboxShortHover] = useState(false);
  const [hitboxMed1Hover, setHitboxMed1Hover] = useState(false);
  const [hitboxMed2Hover, setHitboxMed2Hover] = useState(false);
  const [currentMedModal,setCurrentMedModal] = useState(false);

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
        <div className='full-cover' onClick={() => setCurrentMedModal(false)}>
          <div className='modal'>

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
            <span className="tooltip-short-1">Hitbox Tooltip</span>
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
              {/* <div className='hitbox-med-2' onMouseEnter={() => setHitboxMed2Hover(true)} onMouseOut={() => setHitboxMed2Hover(false)}>
              </div> */}
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
