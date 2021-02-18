import React from 'react';
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

import Container from '../Container';
import Grid from '../Grid';
import Heading from '../Heading';
import { FooterLink, Root } from './styles';

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Nardini Auto Escola</h6>
          </Heading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A officiis
            reiciendis, quas voluptatem unde deserunt non facere amet excepturi,
            doloremque, numquam cupiditate porro ipsa atque sunt facilis. Quas,
            temporibus repellendus!
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <span>
              <FaPhone />
            </span>
            (71) 12345-6789
          </p>
          <p>
            <span>
              <FaBuilding />
            </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
          </Heading>
          <p>
            <FooterLink target="_blank" href="https://www.facebook.com/">
              <span>
                <FaFacebookF />
              </span>
              Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="https://www.linkedin.com/feed/">
              <span>
                <FaLinkedinIn />
              </span>
              Linkedin
            </FooterLink>
          </p>
          <p>
            <FooterLink
              target="_blank"
              href="https://twitter.com/login?lang=pt"
            >
              <span>
                <FaTwitter />
              </span>
              Twitter
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
