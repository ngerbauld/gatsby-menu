import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import ChevronUp from './chevronUp'
import ChevronDown from './chevronDown'
import accordionStyles from './Accordion.module.scss'

const data =
  [
    {
    "section": "DAILY",
    "key": 0,
    "content":
          [
    "Sports Socks",
    "Running Socks",
    "Hockey Socks",
    "Ski Socks",
    "Flight Socks",
    "Hiking Socks",
    "Work Socks"
          ]
   },
   {
    "section": "SPORTS",
    "key": 1,
    "content":
          [
    "Sports Socks",
    "Running Socks",
    "Hockey Socks",
    "Ski Socks",
    "Flight Socks",
    "Hiking Socks",
    "Work Socks"
          ]
   },
   {
    "section": "TRAVEL",
    "key": 2,
    "content":
         [
    "Sports Socks",
    "Running Socks",
    "Hockey Socks",
    "Ski Socks",
    "Flight Socks",
    "Hiking Socks",
    "Work Socks"
          ]
   },
   {
    "section": "MEDICAL",
    "key": 3,
    "content":
          [
    "Sports Socks",
    "Running Socks",
    "Hockey Socks",
    "Ski Socks",
    "Flight Socks",
    "Hiking Socks",
    "Work Socks"
          ]
   },
   {
    "section": "MORE.",
    "key": 4,
    "content":
          [
    "Sports Socks",
    "Running Socks",
    "Hockey Socks",
    "Ski Socks",
    "Flight Socks",
    "Hiking Socks",
    "Work Socks"
          ]
   }
  ]

const MenuAccordion = () => {
  const [active, setActive] = useState(false)
  const toogleActive = () => {
    setActive(!active)
  }
  console.log("data123", data)
  console.log("content123", data[0].content)
    return (
      <Accordion>
        {data.map(item => (
          <Card>
            <Card.Header className={accordionStyles.card}>
              <Accordion.Toggle className={accordionStyles.header} as={Card.Header} eventKey={item.key} onClick={toogleActive}>
                <div className={accordionStyles.box}>
                  <div><strong>{item.section}</strong></div>
                  <div> {active ? <ChevronDown height={10} width={10} /> : <ChevronUp height={10} width={10} />} </div>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={item.key}>
              <Card.Body>
            {item.content.map(detail => (
               <div className={accordionStyles.content}>
                {detail}
              </div>
              ))
            }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          ))
        }
      </Accordion>
    )
  }
export default MenuAccordion
