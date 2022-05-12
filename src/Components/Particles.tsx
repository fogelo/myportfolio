import styled from "styled-components";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

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
    };
    return (
        <ParticlesStyled>
            <Particles width={"100%"} height={"100%"}
                       id="tsparticles"
                       init={particlesInit}
                       canvasClassName={"canvas"}
                       options={{
                           fullScreen: false,
                           fpsLimit: 120,
                           interactivity: {
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
                                   opacity: 0.1,
                                   width: 1,
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
                                   value: 0.2,
                               },
                               shape: {
                                   type: "circle",
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
    height: 100vh;
    width: 100%;
  }
`

export default ParticlesContainer;