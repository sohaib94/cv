import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./home.css";
import BashWindow from "../components/BashWindow";
import Stars from "../assets/stars.svg";
import Satellite from "../assets/satellite4.svg";
import Cloud from "../assets/cloud.svg";
import Earth from "../assets/earth.svg";

// Little helpers ...
// const url = (name, wrap = false) =>
//     `${
//         wrap ? "url(" : ""
//     }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
//         wrap ? ")" : ""
//     }`;
// const Pink = ({ children }) => (
//     <span style={{ color: "#FF6AC1" }}>{children}</span>
// );
// const Yellow = ({ children }) => (
//     <span style={{ color: "#EFF59B" }}>{children}</span>
// );
// const Lightblue = ({ children }) => (
//     <span style={{ color: "#9AEDFE" }}>{children}</span>
// );
// const Green = ({ children }) => (
//     <span style={{ color: "#57EE89" }}>{children}</span>
// );
// const Blue = ({ children }) => (
//     <span style={{ color: "#57C7FF" }}>{children}</span>
// );
// const Gray = ({ children }) => (
//     <span style={{ color: "#909090" }}>{children}</span>
// );

class Home extends React.Component {
    render() {
        return (
            <Parallax ref={(ref) => (this.parallax = ref)} pages={3}>
                <ParallaxLayer
                    offset={1}
                    speed={1}
                    style={{ backgroundColor: "#805E73" }}
                />
                <ParallaxLayer
                    offset={2}
                    speed={1}
                    style={{ backgroundColor: "#87BCDE" }}
                />

                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: `url(${Stars})`,
                        backgroundSize: "cover",
                    }}
                />

                <ParallaxLayer
                    offset={1.3}
                    speed={-0.3}
                    style={{ pointerEvents: "none" }}>
                    <img
                        alt=''
                        src={Satellite}
                        style={{ width: "15%", marginLeft: "70%" }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img
                        alt=''
                        src={Cloud}
                        style={{
                            display: "block",
                            width: "20%",
                            marginLeft: "55%",
                        }}
                    />
                    <img
                        alt=''
                        src={Cloud}
                        style={{
                            display: "block",
                            width: "10%",
                            marginLeft: "15%",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.75}
                    speed={0.5}
                    style={{ opacity: 0.1 }}>
                    <img
                        alt=''
                        src={Cloud}
                        style={{
                            display: "block",
                            width: "20%",
                            marginLeft: "70%",
                        }}
                    />
                    <img
                        alt=''
                        src={Cloud}
                        style={{
                            display: "block",
                            width: "20%",
                            marginLeft: "40%",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img
                        alt=''
                        src={Cloud}
                        style={{
                            display: "block",
                            width: "10%",
                            marginLeft: "10%",
                        }}
                    />
                    <img
                        alt=''
                        src={Cloud}
                        style={{
                            display: "block",
                            width: "20%",
                            marginLeft: "75%",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.6}
                    speed={-0.1}
                    style={{ opacity: 0.4 }}>
                    <img
                        alt=''
                        src={Cloud}
                        style={{
                            display: "block",
                            width: "20%",
                            marginLeft: "60%",
                        }}
                    />
                    <img
                        alt=''
                        src={Cloud}
                        style={{
                            display: "block",
                            width: "25%",
                            marginLeft: "30%",
                        }}
                    />
                    <img
                        alt=''
                        src={Cloud}
                        style={{
                            display: "block",
                            width: "10%",
                            marginLeft: "80%",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.6}
                    speed={0.4}
                    style={{ opacity: 0.6 }}>
                    <img
                        alt=''
                        src={Cloud}
                        style={{
                            display: "block",
                            width: "20%",
                            marginLeft: "5%",
                        }}
                    />
                    <img
                        alt=''
                        src={Cloud}
                        style={{
                            display: "block",
                            width: "15%",
                            marginLeft: "75%",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none",
                    }}>
                    <img alt='' src={Earth} style={{ width: "60%" }} />
                </ParallaxLayer>

                {/* <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: "80%",
                        backgroundPosition: "center",
                        backgroundImage: url("clients", true),
                    }}
                /> */}

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    // onClick={() => this.parallax.scrollTo(1)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <BashWindow
                        logo='profile.png'
                        main_info={["Sohaib Ashraf"]}
                        sub_info={[
                            "Software Developer",
                            <a
                                href='https://www.linkedin.com/in/sohaib-ashraf-609a40b6/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                LinkedIn
                            </a>,
                        ]}
                        backgroundColour='#101010'
                        textColour='white'
                    />
                    {/* <img alt='' src={url("server")} style={{ width: "20%" }} /> */}
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    // onClick={() => this.parallax.scrollTo(2)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <BashWindow
                        logo='Kings_College_London_logo.svg'
                        main_info={["King's College London"]}
                        sub_info={["Mathematics", "Class of 2016"]}
                        backgroundColour='#101010'
                        textColour='white'
                    />
                    {/* <img alt='' src={url("bash")} style={{ width: "40%" }} /> */}
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                    }}
                    // onClick={() => this.parallax.scrollTo(0)}
                >
                    <BashWindow
                        logo='ibm_logo.png'
                        main_info={["IBM"]}
                        sub_info={["Software developer", "Feb 2020 - Present"]}
                        backgroundColour='white'
                        textColour='black'
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        paddingTop: "20vh",
                    }}>
                    <BashWindow
                        logo='deloitte_logo.png'
                        main_info={["Deloitte"]}
                        sub_info={[
                            "Technology Consultant",
                            "Sep 2017 - Jan 2020",
                        ]}
                        backgroundColour='white'
                        textColour='black'
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        paddingLeft: "60vw",
                        paddingTop: "20vh",
                        zIndex: 2,
                    }}>
                    <BashWindow
                        logo='apadmi-logo.svg'
                        main_info={["Apadmi"]}
                        sub_info={[
                            "Developer in Test",
                            "Sept 2016 - Sept 2017",
                        ]}
                        backgroundColour='white'
                        textColour='black'
                    />
                </ParallaxLayer>
            </Parallax>
        );
    }
}

export default Home;
