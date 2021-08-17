import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube,} from "react-icons/fa"
import {
  FooterContainer,
 FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,

} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {

     const toggleHome=()=>{
    scroll.scrollToTop()
  }
    return (
        <>
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                             <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How It Works</FooterLink>
                             <FooterLink to="/signin">Testimonials</FooterLink>
                             <FooterLink to="/signin">Careers</FooterLink>
                             <FooterLink to="/signin">Investors</FooterLink>
                             <FooterLink to="/signin">Term of Services</FooterLink>
                        </FooterLinkItems>
                         <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                             <FooterLink to="/signin">Support</FooterLink>
                             <FooterLink to="/signin">Deatinations</FooterLink>
                             <FooterLink to="/signin">Sponsorships</FooterLink>
                            
                        </FooterLinkItems>
                       
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Submit Videos</FooterLink>
                             <FooterLink to="/signin">Ambassadors</FooterLink>
                             <FooterLink to="/signin">Agency</FooterLink>
                             <FooterLink to="/signin">Influencer</FooterLink>
                          
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                             <FooterLink to="/signin">Facebook</FooterLink>
                             <FooterLink to="/signin">Twitter</FooterLink>
                             <FooterLink to="/signin">YouTube</FooterLink>
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome} to="/">
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            dolla  © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target='_blank'
                            aria-label="Facebook">
                         <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target='_blank'
                            aria-label="Instagram">
                         <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target='_blank'
                            aria-label="Twitter">
                         <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target='_blank'
                            aria-label="Youtube">
                         <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
        </>
    )
}
