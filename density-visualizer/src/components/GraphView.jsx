import { useState, useEffect, useRef } from 'react'
import { ForceGraph2D } from 'react-force-graph'
import '../assets/graph.css'
import Dropdown from './Dropdown'

export default function GraphView() {
  const [total, setTotal] = useState(Math.floor(Math.random() * 1000));
  const fgRef = useRef()

  const [areaName, setAreaName] = useState()
  const changeAreaName = (event) => setAreaName(event.target.value)

  const [from, setFrom] = useState()

  const [to, setTo] = useState()

  const [evacuationNodes, setEvacuationNodes] = useState([]);

  const [myData, setMyData] = useState({
      "nodes": [ 
          
      ],
      "links": [
          
      ]
  });

  function addNode(){
      let graph = {...myData};
      let density = Math.floor(Math.random() * total);
      setTotal(total-density);
      graph.nodes.push({
          "id": `id${graph.nodes.length+1}`,
          "name": areaName,
          "val": 5,
          "density": density
      });

      setMyData(graph);
  }

  function addConnection(from, to){
      let graph = {...myData};
      graph.links.push({
          "source": from,
          "target": to
      })
      setMyData(graph);
  }



  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <div
        id='graph'
        className=''
      >
        <ForceGraph2D
          width={1000}
          height={1000}
          ref={fgRef}
          graphData={myData}
          linkDirectionalArrowLength={5}
          cooldownTicks={10}
          linkWidth={5}
          linkDirectionalArrowRelPos={1}
          nodeCanvasObjectMode={() => 'after'}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.name + `(${node.density})`
            const fontSize = 20 / globalScale
            ctx.font = `${fontSize}px Sans-Serif`
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillStyle = 'black' //node.color;
            ctx.fillText(label, node.x, node.y)
          }}
          nodeAutoColorBy={'id'}
          nodeColor = { node => evacuationNodes.indexOf(node.id) >= 0 && 'green'}
        />
      </div>

      <div className='flex justify-between w-[50%] flex-row-reverse gap-4 items-start'>
        <div className='flex gap-2 items-start'>
          <input
            className='border-gray-400 border-[1px] px-2 py-1'
            type='text'
            placeholder='Add Room/Area'
            onChange={changeAreaName}
          />
          <button
            className='px-2 py-1 bg-blue-600 hover:bg-blue-800 text-white  rounded-xl'
            onClick={addNode}
          >
            {' '}
            Add Room/Area{' '}
          </button>
        </div>
        <div className='flex items-start flex-col gap-4'>
          <div className='flex gap-6'>
            <div className='flex gap-2 items-center justify-between'>
              <h2>From:</h2>
              <Dropdown
                options={myData.nodes}
                onSelect={setFrom}
              />
            </div>
            <div className='flex gap-2 items-center justify-between'>
              <h2>To:</h2>
              <Dropdown
                options={myData.nodes}
                onSelect={setTo}
              />
            </div>
          </div>
          
          <button
            className='px-2 py-1 bg-blue-600 hover:bg-blue-800 text-white  rounded-xl'
            onClick={(event) => addConnection(from, to)}
          >
            Add Connection
          </button>

        </div>
      </div>
    </div>
  )
}
