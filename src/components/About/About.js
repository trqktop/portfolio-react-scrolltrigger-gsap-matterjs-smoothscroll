import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './about.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Matter from 'matter-js'
import sprt_1 from '../../images/about/cat_color.png'
import sprt_2 from '../../images/about/cat_color-1.png'
import block_1 from '../../images/about/Block.svg'
import block_2 from '../../images/about/Block-1.svg'
import block_3 from '../../images/about/Block-3.svg'
import block_4 from '../../images/about/Block-4.svg'
import block_5 from '../../images/about/Block-5.svg'
import block_6 from '../../images/about/Block-6.svg'
import block_7 from '../../images/about/Перфекционист.svg'

gsap.registerPlugin(ScrollTrigger, Matter)


export function About(props) {
    const panelAbout = useRef()
    const timeline_3 = useRef(null)
    const timeline_4 = useRef(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const matter_gravity = useRef(null)

    useLayoutEffect(() => {

        timeline_3.current = gsap.matchMedia();
        const breakPoint = 900;
        timeline_3.current.add({
            isDesktop: `(min-width: ${breakPoint}px)`,
            isMobile: `(max-width: ${breakPoint - 1}px)`,
        }, (context) => {
            let { isDesktop } = context.conditions;
            let { isMobile } = context.conditions;
            if (isDesktop) {
                timeline_4.current = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.about',
                        pin: true,
                        start: "bottom bottom",
                        end: 'bottom+=350px top',
                        pinSpacing: false,
                        onUpdate: e => matter_gravity.current = e.direction,
                        scrub: 2,
                        anticipatePin: .1,
                        fastScrollEnd: true,
                        pinType: 'fixed',
                    }
                })
            }
            if (isMobile) {

            }
        });
        return () => timeline_3.current.revert();
    }, [])


    const container = useRef(null)

    const timeline_9 = useRef(null)
    useLayoutEffect(() => {
        timeline_9.current = gsap.matchMedia();
        const breakPoint = 900;
        timeline_9.current.add({
            isDesktop: `(min-width: ${breakPoint}px)`,
            isMobile: `(max-width: ${breakPoint - 1}px)`,
        }, (context) => {
            let { isDesktop } = context.conditions;
            let { isMobile } = context.conditions;
            if (isDesktop) {
                var Engine = Matter.Engine,
                    Render = Matter.Render,
                    Runner = Matter.Runner,
                    Composites = Matter.Composites,
                    Common = Matter.Common,
                    MouseConstraint = Matter.MouseConstraint,
                    Mouse = Matter.Mouse,
                    World = Matter.World,
                    Composite = Matter.Composite,
                    Body = Matter.Body,
                    Bodies = Matter.Bodies;
                // create engine

                const engine = Engine.create(),
                    world = engine.world,
                    gravity = engine.gravity;

                // create renderer
                const render = Render.create({
                    element: container.current,
                    engine: engine,
                    options: {
                        width: window.innerWidth,
                        height: window.innerHeight,
                        showAngleIndicator: false,
                        background: 'transperent',
                        wireframes: false
                    }
                });

                // create runner


                // add bodies

                // these static walls will not be rendered in this sprites example, see options
                Composite.add(world, [
                    Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 100, {//top
                        isStatic: true,
                        render: {
                            visible: false
                        }
                    }),
                    Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 100, {//bottom
                        isStatic: true,
                        render: {
                            visible: false
                        }
                    }),
                    Bodies.rectangle(window.innerWidth - 50, window.innerHeight / 2, 100, window.innerHeight, {//right
                        isStatic: true,
                        render: {
                            visible: false
                        }
                    }),
                    Bodies.rectangle(50, window.innerHeight / 2, 100, window.innerHeight, {//left
                        isStatic: true,
                        render: {
                            visible: false
                        }
                    })
                ]);




                const stack = Composites.stack(window.innerWidth / 4, 0, 10, 4, 0, 0, function (x, y) {
                    if (Common.random() > 0.35) {
                        return Bodies.circle(x, y, 40, {
                            render: {
                                density: 0.0005,
                                frictionAir: 0.06,
                                restitution: 0.3,
                                friction: 0.01,

                                // strokeStyle: '#ffffff',
                                sprite: {
                                    texture: sprt_1,
                                    yScale: .14,
                                    xScale: .14,
                                }
                            }
                        });
                    } else {
                        return Bodies.circle(x, y, 40, {
                            density: 0.0005,
                            frictionAir: 0.06,
                            restitution: 0.3,
                            friction: 0.01,
                            render: {
                                sprite: {
                                    texture: sprt_2,
                                    yScale: .14,
                                    xScale: .14,
                                }
                            }
                        });
                    }
                });

                const block_1_rectangle = Bodies.rectangle(window.innerWidth / 2, 11, 320, 95, {
                    chamfer: 30,
                    render: {
                        sprite: {
                            texture: block_1,
                            yScale: .35,
                            xScale: .35,
                        }
                    }
                })
                const block_2_rectangle = Bodies.rectangle(window.innerWidth / 3 * 2, 25, 250, 95, {
                    chamfer: 30,
                    render: {
                        sprite: {
                            texture: block_2,
                            yScale: .35,
                            xScale: .35,
                        }
                    }
                })
                const block_3_rectangle = Bodies.rectangle(window.innerWidth / 4 * 2, 55, 220, 95, {
                    chamfer: 30,
                    render: {
                        sprite: {
                            texture: block_3,
                            yScale: .35,
                            xScale: .35,
                        }
                    }
                })
                const block_4_rectangle = Bodies.rectangle(window.innerWidth / 4 * 3, 66, 240, 95, {
                    chamfer: 30,
                    render: {
                        sprite: {
                            texture: block_4,
                            yScale: .35,
                            xScale: .35,
                        }
                    }
                })
                const block_5_rectangle = Bodies.rectangle(window.innerWidth / 4, 77, 320, 95, {
                    chamfer: 30,
                    render: {
                        sprite: {
                            texture: block_5,
                            yScale: .35,
                            xScale: .35,
                        }
                    }
                })
                const block_6_rectangle = Bodies.rectangle(window.innerWidth / 5 * 2, 88, 335, 95, {
                    chamfer: 30,
                    render: {
                        sprite: {
                            texture: block_6,
                            yScale: .35,
                            xScale: .35,
                        }
                    }
                })
                const block_7_rectangle = Bodies.rectangle(window.innerWidth / 7 * 2, 100, 280, 95, {
                    chamfer: 30,
                    render: {
                        sprite: {
                            texture: block_7,
                            yScale: .35,
                            xScale: .35,
                        }
                    }
                })




                var explosion = function (engine, velocity) {
                    var bodies = Composite.allBodies(engine.world);
                    for (var i = 0; i < bodies.length; i++) {
                        var body = bodies[i];
                        if (!body.isStatic) {// && body.position.y >= 500
                            var forceMagnitude = (velocity / 400000 * -1) * body.mass;
                            Body.applyForce(body, body.position, {
                                x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]),
                                y: -forceMagnitude + Common.random() * -forceMagnitude
                            });
                        }
                    }
                };




                // add mouse control
                var mouse = Mouse.create(render.canvas),
                    mouseConstraint = MouseConstraint.create(engine, {
                        mouse: mouse,
                        constraint: {
                            stiffness: 0.2,
                            render: {
                                visible: false
                            }
                        }
                    });
                // keep the mouse in sync with rendering

                // fit the render viewport to the scene
                Render.lookAt(render, {
                    min: { x: 0, y: 0 },
                    max: { x: window.innerWidth, y: window.innerHeight }
                });

                world.current = render.canvas
                render.canvas.width = window.innerWidth;
                render.canvas.height = window.innerHeight;
                render.engine.width = window.innerWidth;
                render.engine.height = window.innerHeight;

                const ST = ScrollTrigger.create({
                    trigger: '.about__container',
                    start: 'center-=20% center',
                    scrub: false,
                    onEnter: (e) => {
                        const runner = Runner.create();
                        Render.run(render);
                        Runner.run(runner, engine);
                        render.mouse = mouse;
                        Composite.add(world, mouseConstraint);
                        Composite.add(world, [block_1_rectangle, block_2_rectangle, block_3_rectangle, block_4_rectangle, block_5_rectangle, block_6_rectangle, block_7_rectangle, stack])//block_2_rectangle, block_3_rectangle, block_4_rectangle, block_5_rectangle, block_6_rectangle, block_7_rectangle,
                    },
                    once: true,
                })
                const ST_2 = ScrollTrigger.create({
                    trigger: '.about__ST',
                    start: 'top bottom',
                    scrub: false,
                    onUpdate: e => {
                        explosion(engine, e.getVelocity() / 2)
                    },
                })

                mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
                mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

                ScrollTrigger.refresh()
                return () => {
                    Render.stop(render)
                    World.clear(engine.world)
                    Engine.clear(engine)
                    Composite.allBodies(engine.world).forEach((body) => { Matter.Composite.remove(engine.world, body) })
                    engine.world.bodies.forEach((body) => { Matter.Composite.remove(engine.world, body) })
                    render.canvas.remove()
                    render.canvas = null
                    render.context = null
                    render.textures = {}
                    engine.events = {}
                    ST.kill()
                    ST_2.kill()
                    render.controller = {}
                    render.mouse = {}
                    render.options = {}
                }
            }
        })

        return () => {
            timeline_9.current.revert()
        }
    }, [windowWidth])

    useEffect(() => {
        window.addEventListener('resize', resize, true)
        function resize() {
            setWindowWidth(window.innerWidth)
        }
        return () => window.removeEventListener('resize', resize)
    }, [windowWidth])

    return (
        <section className='about__ST' ref={panelAbout}>
            <div className='about'>
                <div className='about__container' ref={container}>
                </div>
            </div >
        </section>
    );
}
