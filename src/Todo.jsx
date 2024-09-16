import './App.css'

const practiceStyle = {

    padding : '20px',
    margin : '20px',
    border : '2px solid purple',
    borderRadius : '20px'
  }


export default function Todo({info}){

    return (
        <div style={practiceStyle}>
            {/* {info.isDone ? "Done" : "On Going"} */}
            <li>{info.id} Project {info.name} is {info.isDone && "Done"} {info.isDone || "On Going"}</li>
        </div>
    )
}