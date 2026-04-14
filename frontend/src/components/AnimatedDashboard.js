import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, Typography } from '@mui/material';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { opacity: 0.4; box-shadow: 0 0 0px rgba(255,255,255,0); }
  50% { opacity: 1; box-shadow: 0 0 20px rgba(255,255,255,0.8); }
  100% { opacity: 0.4; box-shadow: 0 0 0px rgba(255,255,255,0); }
`;

const flowRight = keyframes`
  from { stroke-dashoffset: 200; }
  to { stroke-dashoffset: 0; }
`;

const AnimatedPath = styled.path`
  animation: ${flowRight} 4s linear infinite;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: absolute;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MainCard = styled(GlassCard)`
  width: 320px;
  height: 220px;
  z-index: 2;
  animation: ${float} 6s ease-in-out infinite;
`;

const StatCard = styled(GlassCard)`
  width: 250px;
  height: 160px;
  z-index: 1;
  animation: ${float} 7s ease-in-out infinite reverse;
  right: 15%;
  bottom: 25%;
`;

const MockBar = styled.div`
  height: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.3);
  width: ${(props) => props.width || '100%'};
`;

const AbstractNode = styled.div`
  width: 14px;
  height: 14px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation: ${pulse} 3s infinite ${(props) => props.delay || '0s'};
`;

const AnimatedDashboard = () => {
    return (
        <Container>
            {/* SVG Data Flow Lines */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                {/* Background organic curve */}
                <path 
                    d="M -100 600 Q 300 200 800 500 T 1500 200" 
                    fill="transparent" 
                    stroke="rgba(255,255,255,0.05)" 
                    strokeWidth="8" 
                 />
                 {/* Flowing data lines */}
                <path 
                    d="M 100 400 Q 300 200 500 350 T 900 100" 
                    fill="transparent" 
                    stroke="rgba(255,255,255,0.15)" 
                    strokeWidth="2" 
                 />
                <AnimatedPath 
                    d="M 100 400 Q 300 200 500 350 T 900 100" 
                    fill="transparent" 
                    stroke="#fff" 
                    strokeWidth="3" 
                    strokeDasharray="50 150"
                 />
            </svg>

            {/* Glowing nodes in the background */}
            <AbstractNode top="20%" left="30%" delay="0s" />
            <AbstractNode top="70%" left="60%" delay="1s" />
            <AbstractNode top="35%" left="75%" delay="2s" />
            <AbstractNode top="80%" left="25%" delay="0.5s" />

            {/* Main Abstract Dashboard Card */}
            <MainCard style={{ top: '20%', left: '25%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <MockBar width="40%" style={{ background: 'rgba(255,255,255,0.9)' }} />
                    <MockBar width="15%" style={{ background: 'rgba(255,255,255,0.9)' }} />
                </Box>
                <MockBar width="100%" />
                <MockBar width="85%" />
                <MockBar width="90%" />
                <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
                     <Box sx={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
                     <Box sx={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
                     <Box sx={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
                </Box>
            </MainCard>

            {/* Smaller Abstract Stats Chart Card */}
            <StatCard>
                 <MockBar width="60%" style={{ background: 'rgba(255,255,255,0.9)' }} />
                 <Box sx={{ display: 'flex', alignItems: 'flex-end', height: '100%', gap: '15px', mt: 2 }}>
                     <MockBar width="20px" style={{ height: '40%' }} />
                     <MockBar width="20px" style={{ height: '70%', background: 'rgba(255,255,255,0.6)' }} />
                     <MockBar width="20px" style={{ height: '100%', background: '#fff' }} />
                     <MockBar width="20px" style={{ height: '50%' }} />
                     <MockBar width="20px" style={{ height: '80%', background: 'rgba(255,255,255,0.6)' }} />
                 </Box>
            </StatCard>

            {/* Centered Typography for Context */}
            <Typography 
                variant="h3" 
                sx={{ 
                    position: 'absolute', 
                    bottom: '10%', 
                    fontWeight: 800, 
                    color: 'rgba(255,255,255,0.15)',
                    letterSpacing: '5px',
                    textTransform: 'uppercase',
                    zIndex: 0
                }}
            >
                Education Hub
            </Typography>
        </Container>
    );
};

export default AnimatedDashboard;
