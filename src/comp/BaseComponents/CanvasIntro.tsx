import React from "react";
import ucbanner from '../../../public/undercover.png'
import p5Types from "p5";
import dynamic from 'next/dynamic'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod: any) => mod.default), {
    ssr: false,
})

interface ComponentProps {

}

let x = 50;
const y = 50;


const CanvasIntro: React.FC<ComponentProps> = (props: ComponentProps) => {

    let max_distance;
    //See annotations in JS for more information
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(window.innerWidth, 700, p5.WEBGL).parent(canvasParentRef);
        max_distance = p5.dist(0, 0, window.innerWidth, 700);
    };

    const windowResized = (p5: p5Types) => {
        p5.resizeCanvas(window.innerWidth, 700);
    }
    const draw = (p5: p5Types) => {
        p5.background(250);
        p5.rotateY(p5.frameCount * 0.01);

        for (let j = 0; j < 5; j++) {
            p5.push();
            for (let i = 0; i < 80; i++) {
                p5.translate(
                    p5.sin(p5.frameCount * 0.001 + j) * 100,
                    p5.sin(p5.frameCount * 0.001 + j) * 100,
                    i * 0.1
                );
                p5.rotateZ(p5.frameCount * 0.002);
                p5.push();
                p5.sphere(8, 6, 4);
                p5.pop();
            }
            p5.pop();
        }
    };



    return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default CanvasIntro;