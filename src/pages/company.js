import React from 'react'
import Img from 'gatsby-image'
import styled, { createGlobalStyle } from 'styled-components'
import { Link, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Everest from '../components/Everest'
import Memberships from '../components/Memberships'
import { Zone, darkBlue, Grid, Button, LargeP } from '../elements'
import { serif } from '../utilities'

import hero from '../images/SarahAndrie-company-pg.jpg'
import bluewater from '../images/bluewater-background.jpg'
import bike from '../images/biking-sponsorship-image.jpg'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressPage(slug: { eq: "company" }) {
          slug
          acf {
            zones_page {
              heading
              paragraph
            }
          }
        }
        allWordpressWpOfficer(sort: { fields: [acf___weight] }) {
          edges {
            node {
              title
              slug
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              content
              acf {
                board_member
                title
              }
            }
          }
        }
      }
    `}
    render={({ wordpressPage, allWordpressWpOfficer }) => {
      var chief = allWordpressWpOfficer.edges.filter(
        officer => !officer.node.acf.board_member
      )
      var board = allWordpressWpOfficer.edges.filter(
        officer => !!officer.node.acf.board_member
      )
      return (
        <Layout>
          <div>
            <Zone modifiers={['dark']} right={true} hero={true} image={hero}>
              <div className="zone-content">
                <h2>{wordpressPage.acf.zones_page[0].heading}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: wordpressPage.acf.zones_page[0].paragraph,
                  }}
                />
              </div>
            </Zone>
            <Zone
              modifiers={['dark', 'center', 'short']}
              image={bluewater}
              largep
            >
              <h3>{wordpressPage.acf.zones_page[1].heading}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.acf.zones_page[1].paragraph,
                }}
              />
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
            <Everest />
            <Zone modifiers={['solid', 'center', 'short', 'grey']}>
              <h3 style={{ color: 'white' }}>Board of Directors</h3>
              <Grid>
                {board.map(({ node }) => (
                  <Officers>
                    <Link to={`/officer/${node.slug}`}>
                      <Img
                        fluid={
                          node.featured_media.localFile.childImageSharp.fluid
                        }
                      />
                    </Link>
                    <h5>{node.title}</h5>
                    <p>{node.acf.title}</p>
                  </Officers>
                ))}
              </Grid>
            </Zone>
            <Zone modifiers={['solid', 'center', 'short', 'pale']}>
              <h3 style={{ color: 'white' }}>Chief Officers</h3>
              <Grid>
                {chief.map(({ node }) => (
                  <Officers>
                    <Link to={`/officer/${node.slug}`}>
                      <Img
                        fluid={
                          node.featured_media.localFile.childImageSharp.fluid
                        }
                      />
                    </Link>
                    <h5>{node.title}</h5>
                    <p>{node.acf.title}</p>
                  </Officers>
                ))}
              </Grid>
            </Zone>
            <Zone modifiers={['right', 'dark', 'hero']} image={hero}>
              <div className="zone-content">
                <h2>{wordpressPage.acf.zones_page[2].heading}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: wordpressPage.acf.zones_page[2].paragraph,
                  }}
                />
              </div>
            </Zone>
            <Memberships />
            <Zone modifiers={['center']} image={bike} largep>
              <h3>{wordpressPage.acf.zones_page[3].heading}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.acf.zones_page[3].paragraph,
                }}
              />
              <Button to="/community-sponsorships">Learn More</Button>
            </Zone>
            <Zone modifiers={['solid', 'center', 'short', 'grey']} largep>
              <h3>{wordpressPage.acf.zones_page[4].heading}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.acf.zones_page[4].paragraph,
                }}
              />
              <Button to="/jobs">Work At Andrie</Button>
            </Zone>
          </div>
        </Layout>
      )
    }}
  />
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

const Officers = styled.div`
  text-align: left;
  position: relative;
  h5 {
    margin: 10px 0;
    color: white;
    font-size: 24px;
  }
  p {
    ${serif()};
  }
`
