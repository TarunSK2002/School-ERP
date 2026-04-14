import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import logo from "../assets/Mi_logo_v001 - cropped.png";
import { LightPurpleButton } from '../components/buttonStyles';
import HeroAnimation from '../components/HeroAnimation';

const Homepage = () => {

    return (
        <StyledContainer>
            {/* Top Navigation Bar */}
            <Navbar>
                <BrandContainer>
                    <img src={logo} alt="Mi Software Logo" style={{ height: '60px' }} />
                    <BrandText>MISchool ERP</BrandText>
                </BrandContainer>
                <NavLinks style={{ marginRight: '80px'}}>
                    <Link to="/choose" style={{ textDecoration: 'none' }}>
                       <Button sx={{ color: '#7f56da', fontWeight: 'bold', fontSize: '1rem' }}>Login</Button>
                    </Link>
                    <Link to="/Adminregister" style={{ textDecoration: 'none' }}>
                        <LightPurpleButton variant="contained" sx={{ padding: '8px 24px', borderRadius: '50px', fontSize: '1rem' }}>
                            Sign Up
                        </LightPurpleButton>
                    </Link>
                </NavLinks>
            </Navbar>

            {/* Main Hero Section */}
            <HeroWrapper maxWidth="lg">
                <Grid container spacing={6} alignItems="center" justifyContent="space-between">
                    {/* Left Column: Typography & Actions */}
                    <Grid item xs={12} md={6}>
                        <HeroTextContainer>
                            <StyledBadge>Next-Gen School ERP System</StyledBadge>
                            <StyledTitle>
                                Manage Your School <br /> Smarter & Better
                            </StyledTitle>
                            <StyledSubtitle>
                                Streamline operations, empower your faculty, and enhance parent communication—all from one beautiful, centralized platform built for modern educational institutions.
                            </StyledSubtitle>
                            <ActionBox>
                                <Link to="/choose" style={{ textDecoration: 'none' }}>
                                    <LightPurpleButton variant="contained" sx={{ padding: '14px 36px', fontSize: '1.1rem', borderRadius: '50px' }}>
                                        Login to Portal
                                    </LightPurpleButton>
                                </Link>
                                <Link to="/Adminregister" style={{ textDecoration: 'none' }}>
                                    <Button variant="outlined" sx={{ padding: '13px 36px', fontSize: '1.1rem', borderRadius: '50px', color: '#7f56da', borderColor: '#7f56da', borderWidth: '2px', fontWeight: 600, '&:hover': { borderWidth: '2px', backgroundColor: 'rgba(127, 86, 218, 0.05)' } }}>
                                        Create Account
                                    </Button>
                                </Link>
                            </ActionBox>
                        </HeroTextContainer>
                    </Grid>

                    {/* Right Column: Visual Showcase */}
                    <Grid item xs={12} md={6}>
                        <VisualContainer>
                            <GlowingOrb style={{ top: '5%', left: '0%', background: 'rgba(127, 86, 218, 0.5)' }} />
                            <GlowingOrb style={{ bottom: '5%', right: '0%', background: 'rgba(85, 0, 128, 0.4)' }} />
                            
                            <HeroAnimation />
                        </VisualContainer>
                    </Grid>
                </Grid>
            </HeroWrapper>

            <StyledFooter>
                <p>Copyright &copy; 2026 Misoftware Solutions</p>
            </StyledFooter>
        </StyledContainer>
    );
};

export default Homepage;

// ---- Styled Components ----

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f0f4fd;
  overflow: hidden;
  position: relative;
`;

const Navbar = styled.nav`
  width: 100%;
  padding: 24px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 40px;
`;

const BrandText = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  color: #2c2143;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #1a1a2e 0%, #550080 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const HeroWrapper = styled(Container)`
  flex: 1;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 60px;
  position: relative;
  z-index: 5;
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const StyledBadge = styled.div`
  background: rgba(127, 86, 218, 0.1);
  color: #7f56da;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  color: #2c2143;
  margin: 0 0 24px 0;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #1a1a2e 0%, #550080 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 900px) {
    font-size: 3rem;
  }
`;

const StyledSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #666;
  margin: 0 0 40px 0;
  max-width: 90%;
`;

const ActionBox = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const VisualContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlowingOrb = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 1;
`;



const StyledFooter = styled.footer`
  padding: 24px 0;
  text-align: center;
  color: #888;
  font-size: 0.95rem;
  position: relative;
  z-index: 10;
`;
