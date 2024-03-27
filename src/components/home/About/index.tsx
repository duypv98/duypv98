import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Envelope
} from "react-bootstrap-icons";
import { TypeAnimation } from 'react-type-animation';
import avatar1 from "../../../assets/images/avatar-1.webp";
import avatar2 from "../../../assets/images/avatar-2.webp";
import avatar3 from "../../../assets/images/avatar-3.webp";
import styles from "./About.module.scss";

const fullName = 'Duy, Phung Viet';
const altName = '(Jerry Feng)';
const typingNameSpeed = 50;
const delayAltName = fullName.length * typingNameSpeed + 1000;
const delayDesc = delayAltName + altName.length * typingNameSpeed + 1000;

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return <section id="about" ref={sectionRef}>
    <div className={styles.root}>
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

            <div id="contact" className={classNames(styles.contact, { [styles["contact-fixed"]]: !visible })}>
              <a href="https://www.facebook.com/duy.real.1998" target="_blank" rel="noopener noreferrer">
                <Facebook size={40} color="var(--jf-primary-text-color)" />
              </a>

              <a href="https://github.com/duypv98" target="_blank" rel="noopener noreferrer">
                <Github size={40} color="var(--jf-primary-text-color)" />
              </a>

              <a href="https://www.instagram.com/_duy_pt" target="_blank" rel="noopener noreferrer">
                <Instagram size={40} color="var(--jf-primary-text-color)" />
              </a>

              <a href="https://www.linkedin.com/in/ijduypv" target="_blank" rel="noopener noreferrer">
                <Linkedin size={40} color="var(--jf-primary-text-color)" />
              </a>

              <a href="mailto:duypv98@gmail.com">
                <Envelope size={40} color="var(--jf-primary-text-color)" />
              </a>
            </div>
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
  </section>
}

export default About;