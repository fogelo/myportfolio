// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import styled from "styled-components";
import {ComponentClass} from "react";

const ParticlesContainer = () => {
    const particlesInit = async (main: any) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container: any) => {
        console.log(container);
        return new Promise(() => {
        })
    };


    return (
        <ParticlesStyled>
            <Particles width="100%" height="100vh"

                       id="tsparticles"
                       init={async (main) => {
                           console.log(main);

                           await loadFull(main);
                       }}
                       loaded={(container) => {
                           console.log(container);
                           return new Promise(() => {
                           })
                       }}
                       style={{padding: "10px !important"}}
                       params={{
                           size: {
                               width: '10px',
                               height: '10px'
                           },
                           background: {
                               color: {
                                   value: "#0d47a1",
                               },
                           },
                           fpsLimit: 120,
                           interactivity: {
                               events: {
                                   onClick: {
                                       enable: true,
                                       mode: "attract",
                                   },
                                   onHover: {
                                       enable: true,
                                       mode: "bounce",
                                   },
                                   resize: true,
                               },
                               modes: {
                                   push: {
                                       quantity: 4,
                                   },
                                   repulse: {
                                       distance: 200,
                                       duration: 0.4,
                                   },
                               },
                           },
                           particles: {
                               color: {
                                   value: "#ffffff",
                               },
                               links: {
                                   color: "#ffffff",
                                   distance: 150,
                                   enable: true,
                                   opacity: 0.5,
                                   width: 1,
                               },
                               collisions: {
                                   enable: true,
                               },
                               move: {
                                   direction: "none",
                                   enable: true,
                                   outModes: {
                                       default: "bounce",
                                   },
                                   random: false,
                                   speed: 1,
                                   straight: false,
                               },
                               number: {
                                   density: {
                                       enable: true,
                                       area: 800,
                                   },
                                   value: 80,
                               },
                               opacity: {
                                   value: 0.5,
                               },
                               shape: {
                                   type: "circle",
                                   stroke: {
                                       width: 0
                                   },
                                   polygon: {
                                       nb_sides: 6
                                   }
                               },
                               size: {
                                   value: {min: 1, max: 5},
                               },
                           },
                           detectRetina: true,
                       }}
            />
        </ParticlesStyled>


    );
};

const ParticlesStyled = styled.div`
  #tsparticles {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100vh;
  }
`

export default ParticlesContainer;