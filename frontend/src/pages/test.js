import ScrollBox from '../components/ScrollBox'
import Cell from '../cell'
import useSpriteLoader from '../hooks/useSpriteLoader'

const Test = (props) => {

  const sprites = useSpriteLoader([
    '/images/moon.png',
    '/images/mount.png',
    '/images/windows.png'
  ])

  const sky = new Cell(sprites[0], 'linear', 0.05, -20, null, {m: 0, b: 0})
  const mount = new Cell(sprites[1], 'linear', 0.12, -65, null, {m:0, b: 70})
  const windows = new Cell(sprites[2], 'linear', 0.67, -300, null, {m:0, b:0})
  const cellSet02 = [ sky, mount, windows ]

  return (
    <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h1>Test</h1>
    <div style={{height: "300px", padding: "32px", width: "400px" }}>
      <ScrollBox pid={'test01'} cells={cellSet02} scrollHeight={10000}/>
    </div>
    </div>
  )
}

export default Test
