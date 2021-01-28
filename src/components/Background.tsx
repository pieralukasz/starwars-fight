import * as THREE from 'three'
import {useEffect} from "react";
import styled from "styled-components"

type BackgroundProps = {}

export const Background: React.FC<BackgroundProps> = ({children}) => {

  useEffect(() => {
    const { innerWidth, innerHeight } = window

    const scene: THREE.Scene = new THREE.Scene()

    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      50,
      innerWidth / innerHeight,
      0.1,
      1000
    )

    camera.position.z = 450

    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      antialias: true,
    })

    renderer.setSize(innerWidth, innerHeight)

    // @ts-ignore
    document.querySelector('.photo').appendChild(renderer.domElement)



    const addStar = (): void => {

      const vertices: [any?] = [];

      for (let i = 0; i < 1500; i ++ ) {

        const x: number = THREE.MathUtils.randFloatSpread( 1000 );
        const y: number = THREE.MathUtils.randFloatSpread( 800 );
        const z: number = THREE.MathUtils.randFloatSpread( 700 );

        vertices.push( x, y, z );

      }

      const geometry: THREE.BufferGeometry = new THREE.BufferGeometry();
      geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

      const material: THREE.PointsMaterial = new THREE.PointsMaterial( { color: 0xffffff } );

      const points: THREE.Points = new THREE.Points( geometry, material );

      scene.add( points );
    }

    addStar()

    const onWindowResize = (): void => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', onWindowResize, false)

    window.addEventListener('mousemove', (e) => {
      camera.position.x = e.clientX / 30
      camera.position.y = e.clientY / 30
    })

    const render = (): void => {

      renderer.render(scene, camera)

      setTimeout(() => {
        requestAnimationFrame(render)
      }, 1000 / 70)
    }


    render()

  }, [])

  return (<BackgroundStyle className={'photo'}>
    <ChildrenStyle>{ children }</ChildrenStyle>
  </BackgroundStyle>)

}

const BackgroundStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 95%;
  z-index: 10;
  background: #000;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    position: inherit;
  }

`

const ChildrenStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`
