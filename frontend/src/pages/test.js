import ScrollBox from '../components/ScrollBox'

const Test = (props) => {

  const cellSet01 = [
    {
      color: '#FF0000',
      b: 0,
      m: 0.5
    },
    {
      color: '#00FF00',
      b: 80,
      m: -0.5
    }
  ]

  return (
    <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h1>Test</h1>
    <div style={{height: "300px", padding: "32px", width: "400px" }}>
      <ScrollBox pid={'test01'} cells={cellSet01}/>
    </div>
    <div style={{height: "300px", padding: "32px", width: "400px" }}>
      <ScrollBox pid={'test02'} cells={cellSet01}/>
    </div>
    </div>
  )
}

export default Test
