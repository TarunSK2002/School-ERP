import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, Typography } from '@mui/material';

const floatCore = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const floatNode1 = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const floatNode2 = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(15px); }
  100% { transform: translateY(0px); }
`;

const floatNode3 = keyframes`
  0% { transform: translateX(0px); }
  50% { transform: translateX(-15px); }
  100% { transform: translateX(0px); }
`;

const pulseConnection = keyframes`
  0% { opacity: 0.2; stroke-dashoffset: 40; }
  50% { opacity: 0.8; }
  100% { opacity: 0.2; stroke-dashoffset: 0; }
`;

const pulseRing = keyframes`
  0% { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(1.5); opacity: 0; }
`;

const Container = styled.div`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoreCard = styled.div`
  width: 220px;
  height: 220px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(25px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 20px 50px rgba(127, 86, 218, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  animation: ${floatCore} 6s ease-in-out infinite;
  position: relative;
`;

const CoreRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #7f56da;
  animation: ${pulseRing} 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
`;

const NodeCard = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 1);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  font-weight: bold;
  color: #2c2143;
  z-index: 6;
  animation: ${(props) => props.$anim} ${(props) => props.$duration} ease-in-out infinite;
`;

const SVGContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const AnimatedLine = styled.line`
  fill: none;
  stroke: #7f56da;
  stroke-width: 3;
  stroke-dasharray: 8 8;
  animation: ${pulseConnection} 3s linear infinite;
`;

const HeroAnimation = () => {
    return (
        <Container>
            {/* SVG Connecting Lines */}
            <SVGContainer>
                {/* Lines connect from center (50%, 50%) to nodes */}
                <AnimatedLine x1="50%" y1="50%" x2="15%" y2="25%" style={{ animationDelay: '0s' }} />
                <AnimatedLine x1="50%" y1="50%" x2="85%" y2="35%" style={{ animationDelay: '1s' }} />
                <AnimatedLine x1="50%" y1="50%" x2="30%" y2="85%" style={{ animationDelay: '2s' }} />
            </SVGContainer>

            {/* Central Hub */}
            <CoreCard>
                <CoreRing style={{ animationDelay: '0s' }} />
                <CoreRing style={{ animationDelay: '1.5s' }} />
                <Box sx={{ width: 70, height: 70, borderRadius: '20px', background: 'linear-gradient(135deg, #550080 0%, #7f56da 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '2.5rem', mb: 2, boxShadow: '0 10px 20px rgba(85,0,128,0.3)' }}>
                    🏫
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#2c2143' }}>ERP Core</Typography>
                <Typography variant="body2" sx={{ color: '#666', fontWeight: 600 }}>System Active</Typography>
            </CoreCard>

            {/* Node: Students */}
            <NodeCard $anim={floatNode1} $duration="5s" style={{ top: '15%', left: '-5%' }}>
                <Box sx={{ width: 45, height: 45, borderRadius: '50%', background: '#e3f2fd', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.3rem' }}>👨‍🎓</Box>
                <Box>
                    <Typography variant="body1" sx={{ fontWeight: 800, lineHeight: 1 }}>Students</Typography>
                    <Typography variant="caption" sx={{ color: '#7f56da', fontWeight: 600 }}>Mobile App</Typography>
                </Box>
            </NodeCard>

            {/* Node: Faculty */}
            <NodeCard $anim={floatNode2} $duration="6s" style={{ top: '25%', right: '-5%' }}>
                <Box sx={{ width: 45, height: 45, borderRadius: '50%', background: '#fce4ec', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.3rem' }}>👩‍🏫</Box>
                <Box>
                    <Typography variant="body1" sx={{ fontWeight: 800, lineHeight: 1 }}>Faculty</Typography>
                    <Typography variant="caption" sx={{ color: '#7f56da', fontWeight: 600 }}>Portal Active</Typography>
                </Box>
            </NodeCard>

            {/* Node: Parents */}
            <NodeCard $anim={floatNode3} $duration="7s" style={{ bottom: '5%', left: '15%' }}>
                <Box sx={{ width: 45, height: 45, borderRadius: '50%', background: '#fff3e0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.3rem' }}>👨‍👩‍👧</Box>
                <Box>
                    <Typography variant="body1" sx={{ fontWeight: 800, lineHeight: 1 }}>Parents</Typography>
                    <Typography variant="caption" sx={{ color: '#7f56da', fontWeight: 600 }}>Notifications</Typography>
                </Box>
            </NodeCard>
        </Container>
    );
};

export default HeroAnimation;
