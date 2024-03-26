import { Col, Container, Row, Carousel } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';
import styles from "./About.module.scss";
import classNames from "classnames";
import avatar1 from "../../../assets/images/avatar-1.webp";
import avatar2 from "../../../assets/images/avatar-2.webp";
import avatar3 from "../../../assets/images/avatar-3.webp";

const fullName = 'Duy, Phung Viet';
const altName = '(Jerry Feng)';
const typingNameSpeed = 50;
const delayAltName = fullName.length * typingNameSpeed + 1000;
const delayDesc = delayAltName + altName.length * typingNameSpeed + 1000;

const About = () => {
  return <div className={styles.root}>
    <Container fluid="xxl">
      <Row className={styles.sectionRow}>
        <Col sm={8}>
          <h1 className={styles.aboutTitle}>
            <code>Hi, my name is</code>
          </h1>

          <TypeAnimation
            sequence={[
              fullName,
              1000
            ]}
            wrapper="span"
            speed={typingNameSpeed}
            className={classNames(styles.fullName, styles.typingAnimation)}
          />

          <TypeAnimation
            sequence={[
              delayAltName,
              altName,
              1000,
            ]}
            wrapper="span"
            speed={typingNameSpeed}
            className={classNames(styles.altName, styles.typingAnimation)}
          />

          <TypeAnimation
            sequence={[
              delayDesc,
              'I am a former IT student of Hanoi University of Science and Technology and currently a full-stack developer.',
              1000,
            ]}
            wrapper="p"
            speed={50}
            className={classNames(styles.typingAnimation, styles.descText)}
          />
        </Col>

        <Col sm={4}>
          <Carousel
            className={styles.avatarCarousel}
            indicators={false}
            controls={false}
            translate="yes"
            interval={2000}
          >
            <Carousel.Item>
              <img
                className={styles.avatar}
                alt="avt-1"
                src={avatar1}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className={styles.avatar}
                alt="avt-2"
                src={avatar2}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className={styles.avatar}
                alt="avt-3"
                src={avatar3}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  </div>
}

export default About;