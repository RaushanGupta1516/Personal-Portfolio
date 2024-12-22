 
import projectdata from "./project"
import "./Mywork.css"
const Mywork = () => {
  return (
    <div className="mywork" id="mywork">
         <h1>My Latest Work</h1>
       <div className="workbox">
      {projectdata.map((work,index) => {
                    return <div key={index} className="work">
                      <img src={work.img} alt="work" width="350px" height="300px"/>
                    </div>
                })}
    </div>
   </div>
  )
}
export default Mywork
