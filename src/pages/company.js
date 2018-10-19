import React from 'react'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Layout from '../components/Layout'
import { Zone, BoxWrapper, Box, Button } from '../elements'
import { serif } from '../utilities'

import hero from '../images/Home-HeroSpace.jpg'
import bluewater from '../images/bluewater-background.jpg'
import greatLakes from '../images/Great-Lakes-blue.png'
import barbara from '../images/barbara.jpg'
import waves from '../images/SarahAndrie-makingwaves.jpg'
import community from '../images/Andrie-biking-community.jpg'

const IndexPage = () => (
  <Layout>
    <div>
      <Zone modifiers={['right', 'dark', 'hero']} image={hero}>
        <div className="zone-content">
          <h2>About Andrie</h2>
          <p>
            From the Great Lakes to the Illinois and Mississippi river systems,
            Andrie is the Midwest’s premiere marine transportation and service
            company. Founded in 1988, we provide a wide range of award-winning
            services to a broad range of customers – from local, national, and
            global corporations to small and medium-sized companies alike.
          </p>
          <p>
            Andrie prides itself on our knowledge of the industry, experience on
            the water, our highly qualified people, and superior specialized
            equipment. Andrie’s multifaceted vessels lead the Great Lakes in
            quality, performance, and delivery.
          </p>
          <p>
            From our headquarters in Muskegon, Michigan, Andrie serves a diverse
            marine customer base by executing Great Lakes projects and ventures
            from the Atlantic to the Pacific, from Canada to the Gulf of Mexico.
          </p>
        </div>
      </Zone>
      <Zone modifiers={['dark', 'center', 'short']} image={bluewater}>
        <h3>First Choice</h3>
        <p>
          Our mission at Andrie is to empower our employees to server in a safe,
          cost effective and environmentally sound manner. In order to achieve
          this we have made the promise to be the company of First Choice.
        </p>
        <p>
          Andrie strives to be the company of First Choice for our employees,
          customers and our unique ecosystem that we operate within. We believe
          in achieving this we all leave the world in a better place for our
          future generations.
        </p>
      </Zone>
      <Zone modifiers={['solid', 'center', 'short', 'grey']}>
        <h3>Values</h3>
        <Values>
          <li>Honesty</li>
          <li>Safety</li>
          <li>Environment</li>
          <li>Quality</li>
          <li>Service</li>
          <li>Relationships</li>
          <li>Knowledge</li>
        </Values>
      </Zone>
      <Zone modifiers={['right', 'dark', 'hero']} image={hero}>
        <div className="zone-content">
          <h2>Awards</h2>
          <p>
            Andrie is proud of our work in marine transportation. Since 1988, we
            have been recognized by our industry and acknowledged by our
            customers. Our awards include:
          </p>
          <ul>
            <li>
              BP Shipping chose the tug KAREN ANDRIE / barge ENDEAVOUR as the
              recipient of their 2010 Ship of the Year for efforts above and
              beyond expected performance levels with respect to HSSE and the
              creation of a HSSE culture onboard.
            </li>
            <li>
              American Maritime Safety; Safety Advisory Committee selected
              Andrie the Responsible Vessel Carrier in recognition of our
              dedication to preserving the marine environment and promoting safe
              vessel navigation, operation and maritime work practices.
            </li>
            <li>
              The National Safety Council award for Occupational Excellence
              Achievement for having a 50% lower accident rate than the industry
              average.
            </li>
            <li>
              American Maritime Safety awarded Andrie the Safe Working Practices
              Award
            </li>
            <li>
              National Weather Service recognized the tugs KAREN ANDRIE and
              REBECCA LYNN for Outstanding Reporting
            </li>
            <li>Asphalt Institute Membership Longevity Award</li>
          </ul>
        </div>
      </Zone>
      <Zone modifiers={['solid', 'center', 'short', 'white']}>
        <h3>Memberships</h3>
      </Zone>
      <Zone modifiers={['solid', 'center', 'short']}>
        <h3>Community Sponsorships</h3>
        <p>
          Andrie supports many local and regional community organizations. Learn
          more about all of the groups that have strengthened by our involvement
          and ongoing commitment to their success.
        </p>
      </Zone>
      <Zone modifiers={['solid', 'center', 'short', 'grey']}>
        <h3>Work at Andrie</h3>
        <p>
          This is your opportunity to join the Midwest’s premier marine
          transportation company. Click the button below to see what current job
          openings we have. We look forward to sailing with you!
        </p>
      </Zone>
    </div>
  </Layout>
)

export default IndexPage

const Values = styled.ul`
  list-style: none;
  li {
    font-size: 1.2rem;
    display: inline-block;
    margin-left: 30px;
    ${serif()};
    &:first-child {
      margin-left: 0;
    }
    &:after {
      position: relative;
      content: '•';
      left: 15px;
    }
    &:last-child {
      &:after {
        content: '';
      }
    }
  }
`
