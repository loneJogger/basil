import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import useInterval from '../hooks/useInterval'

const ScrollBox = (props) => {

  const [ frame, setFrame ] = useState(0)
  const canvasRef = useRef(null)

  useInterval(() => {
    setFrame(getScrollHeight(props.pid))
  }, 42)

  useEffect(() => {
    const canvas =  canvasRef.current
    const context = canvas.getContext('2d')
    draw(context, canvas)
  }, [frame])

  const getScrollHeight = (id) => {
    const d = document.getElementById(id)
    const h = d.scrollTop
    return h
  }

  const draw = (context, canvas) => {
    context.clearRect(0,0, canvas.width, canvas.height)
    context.fillStyle = 'rgb(256, 256, 256)'
    context.fillRect(0,0, canvas.width, canvas.height)
    props.cells.forEach(cell => {
      context.fillStyle = cell.color
      const x = frame/24.631
      const y = cell.m * x + cell.b/100 * canvas.height
      context.fillRect(x, y, 15, 15)
    })
  }

  return (
    <Wrapper id={props.pid + '_wrap'}>
      <Scrollable id={props.pid}>
        <img style={{opacity: '0'}} src='/images/long.png' />
      </Scrollable>
      <Interior id={props.pid + '_int'}>
        <canvas
          ref={canvasRef}
          width={canvasRef.current !== null ? document.getElementById(props.pid + '_int').clientWidth : 0}
          height={canvasRef.current !== null ? document.getElementById(props.pid + '_int').clientHeight : 0}
        />
      </Interior>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  border: 2px solid black;
`

const Scrollable = styled.div`
  opacity: 0.1;
  background-color: #F0D0D0;
  overflow-y: scroll;
  width: 100%;
  z-index: 2;
`

const Interior = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  z-index: 1;
`

export default ScrollBox
