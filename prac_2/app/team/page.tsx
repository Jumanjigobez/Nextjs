import TeamList from "../components/teamList"


const Team = () => {
  return (
    <>
        <div className="title">
            <h1 className="text-red-300 text-4xl text-center">Meet the Team</h1>
        </div>

        <div className="team">
            <TeamList/>
        </div>
    </>
    
  )
}

export default Team