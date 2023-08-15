import styled from "@emotion/styled";
import { Box } from "@mui/material";

const SectionSubtext = styled.div`

padding: ${(props) => (props.p ? props.p : "")};
font-size: ${(props) => (props.fs ? props.fs : "15px")};
color: ${(props) => (props.color ? props.color : props.theme.textPrimary)};
  /* margin: 10px 0px; */
    font-family: "Poppins-SemiBold";
  text-align: ${(props) => (props.align ? props.align : "left")};

  @media screen and (max-width: 599px) {
    padding: ${(props) => (props.p599 ? props.p599 : "")};
  }
`;

const NextBox = styled(Box)`
padding: 10px;
@media screen and (max-width:599px){
  padding: 0px;
}
@media screen and (max-width:459px){
  padding: 40px 0 0 0 ;
}
`
const Text = styled.p`
  margin: 10px 0px 30px 0px;
  max-width: 50%;
  text-align: center;
  padding: 0 20px;
  font-size: 14px;
  z-index: 1;
  @media screen and (max-width: 899px) {
    max-width: 70%;
  }
  @media screen and (max-width: 599px) {
    max-width: 100%;
  }
`;

const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.pageColor};
  min-height: 100vh;
`;

const SectionWrapper = styled.div`
position: relative;
display: flex;
    align-items: center;
  padding: ${(props) => (props.p ? props.p : "0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  text-align: ${(props) => (props.align ? props.align : "center")};

  @media screen and (max-width: 799px) {
    padding: ${(props) => (props.p799 ? props.p799 : "30px 0")};
  }
  @media screen and (max-width: 599px) {
    padding: ${(props) => (props.p599 ? props.p599 : "30px 0")};
  }
`;



const SectionMainWrapper = styled.div`
  /* min-height: 100vh; */
  position: relative;
  padding: ${(props) => (props.p ? props.p : "0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  text-align: ${(props) => (props.align ? props.align : "center")};

  @media screen and (max-width: 799px) {
    padding: ${(props) => (props.p799 ? props.p799 : "30px 0")};
  }
  @media screen and (max-width: 599px) {
    padding: ${(props) => (props.p599 ? props.p599 : "30px 0")};
  }
`;
const SectionMainWrapperWitdraw = styled.div`
  /* min-height: 100vh; */
  position: relative;
  padding: ${(props) => (props.p ? props.p : "0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  text-align: ${(props) => (props.align ? props.align : "center")};

  @media screen and (max-width: 799px) {
    padding: ${(props) => (props.p799 ? props.p799 : "30px 0")};
  }
  @media screen and (max-width: 599px) {
    padding: ${(props) => (props.p599 ? props.p599 : "30px 0")};
  }
`;

const SectionSubWrapper = styled.div`
border-radius: ${(props) => (props.br ? props.br : "0 0 24px 24px")};
background-color: ${(props) => props.theme.bgTertiary};
position: relative;
  padding: ${(props) => (props.p ? props.p : "5px 0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  text-align: ${(props) => (props.align ? props.align : "left")};

  @media screen and (max-width: 799px) {
    padding: ${(props) => (props.p799 ? props.p799 : "30px 0")};
    display: ${(props) => (props.display ? props.display : "")};

  }
  @media screen and (max-width: 599px) {
    padding: ${(props) => (props.p599 ? props.p599 : "30px 0")};
  }
`;
const P = styled.p`
  font-weight: ${(props) => (props.fw ? props.fw : "")};
  font-family: "Poppins-Regular";
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  color: ${(props) => (props.color ? props.color : props.theme.textPrimary)};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  margin: ${(props) => (props.m ? props.m : "20px 0")};
  padding: ${(props) => (props.p ? props.p : "")};
  display: ${(props) => (props.display ? props.display : "")};
  justify-content: ${(props) => (props.jc ? props.jc : "")};
  @media (max-width: 600px) {
    padding: ${(props) => (props.p600 ? props.p600 : "")};
    font-size: ${(props) => (props.fs599 ? props.fs599 : "")};
    max-width: 100%;
  }
  @media (max-width: 1440px) and (max-height: 620px) {
    padding-top: ${(props) => (props.pt630 ? props.pt630 : "0px")};
  }
`;
const CustomContainer = styled.div`
  max-width: 2600px;
`;
const Heading = styled.div`
  font-size: ${(props) => (props.fs ? props.fs : "35px")};
  color: ${(props) => (props.colors ? props.colors : props.theme.textSecondary)};
  padding: ${(props) => (props.p ? props.p : "")};
  margin: ${(props) => (props.m ? props.m : "0")};
  max-width: ${(props) => (props.mw ? props.mw : "100%")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-family: "Poppins-SemiBold";

  @media (max-width: 1199px) {
  }
  @media (max-width: 599px) {
    font-size: ${(props) => (props.fs599 ? props.fs599 : "")};
  }
`;
const SectionFooterHeading = styled.div`
  font-size: ${(props) => (props.fs ? props.fs : "20px")};
 color: ${(props) => (props.colors ? props.colors : props.theme.textSecondary)};
  padding: ${(props) => (props.p ? props.p : "")};
  margin: ${(props) => (props.m ? props.m : "0")};
  max-width: ${(props) => (props.mw ? props.mw : "100%")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-family: "Poppins-SemiBold";

  @media (max-width: 1199px) {
  }
  @media (max-width: 599px) {

  }
`;
const SectionHeading = styled.h2`
color: ${(props) => (props.colors ? props.colors : props.theme.textTertiary)};
  font-size: ${(props) =>props.fs? props.fs: "calc(37px + (46 - 22) * ((100vw - 146px) / (1600 - 25)))"};
  font-family: "Poppins-SemiBold";
  width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  padding: ${(props) => (props.p ? props.p : "70px 0")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  margin: ${(props) => (props.m ? props.m : "")};

  @media screen and (max-width: 972px) {
    font-size: ${(props) =>
      props.fs
        ? props.fs
        : "calc(30px + (26 - 20) * ((100vw - 16px) / (1600 - 250)))"};
  }
  @media screen and (max-width: 419px) {
    font-size: ${(props) =>
      props.fs
        ? props.fs
        : "calc(20px + (26 - 10) * ((100vw - 26px) / (1600 - 250)))"};
  }
`;
const SectionSubHeading = styled.h3`
font-family: "Poppins-SemiBold";
  font-size: ${(props) => (props.fs ? props.fs : "48px")};
  color: ${(props) => props.theme.textSecondary};
  padding: ${(props) => (props.p ? props.p : "20px 0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  /* line-height: ${(props) => (props.lh ? props.lh : "50px")}; */
  max-width: ${(props) => (props.mw ? props.mw : "100%")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  @media screen and (max-width: 1199px) {
    /* font-size: 30px; */
  }
  @media (max-width: 599px) {
    /* line-height: ${(props) => (props.lh ? props.lh : "35px")}; */
    max-width: 100%;
    /* font-size: ${(props) => (props.fs599 ? props.fs599 : "25px")}; */
  }
`;
const SectionSmallHeading = styled.h3`
  z-index: 1;
  font-family: "Poppins-SemiBold";
  font-size: ${(props) => (props.fs ? props.fs : "50px")};
  text-transform: ${(props) => (props.tt ? props.tt : "")};

  color: ${(props) => props.theme.textPrimary};
  padding: ${(props) => (props.p ? props.p : "0px 0 0px 0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  max-width: ${(props) => (props.mw ? props.mw : "100%")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  @media (max-width: 799px) {
    padding: ${(props) => (props.p799 ? props.p799 : "")};
    line-height: ${(props) => (props.lh ? props.lh : "")};
    max-width: 100%;
    font-size: ${(props) => (props.fs599 ? props.fs599 : "30px")};
  }
  @media (max-width: 599px) {
    line-height: ${(props) => (props.lh ? props.lh : "")};
    max-width: 100%;
    font-size: ${(props) => (props.fs599 ? props.fs599 : "30px")};
  }
`;
const FooterImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 90px;
`;

const LogoText = styled.div`
  color: ${(props) => props.theme.textPrimary};
  font-family: "Poppins-Bold";
  font-size: 23px;
  line-height: 21px;
`;
const Split = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: ${(props) => (props.p ? props.p : " 4px 0")};
`;
const LogoImage = styled.a`
  display: flex;
  gap: 13px;
  align-items: center;
`;
const TransBtn = styled.a`
text-decoration: none !important;
border:1px solid ${(props) => props.theme.btnPrimary};
padding: 5px 14px;
border-radius: 20px;
font-family: "Poppins-SemiBold";
color: ${(props) => props.theme.btnPrimary};
font-size: 14px;
float: left;
`
const RowStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 2fr 2fr;
    text-align: center;
    text-transform: capitalize;
    &.row{
      background-color: ${props=>props.theme.bgTertiary};
      border-top: 1px solid #e0e0e0;
    }
    &>div{
        color: ${props=>props.theme.textPrimary};
        padding: 20px 10px;
    }
    a{
        color: ${props=>props.theme.textPrimary};
        text-decoration: underline;
    }
    b{color: ${props=>props.theme.textPrimary};}
`
export {SectionMainWrapperWitdraw,NextBox,RowStyle, Split,SectionSubWrapper,SectionMainWrapper,SectionFooterHeading,Text,SectionSubtext,SectionHeading,FooterImage,LogoText,LogoImage,PageWrapper,SectionWrapper,P,SectionSubHeading,CustomContainer,SectionSmallHeading,Heading,TransBtn,};
