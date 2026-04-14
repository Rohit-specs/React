import {Avatar} from "./Avatar"
function Card(){
    return(
        <main>
            <div className="staticcard shadow">
                <Avatar />
                <div className="cardContenent">
                    <h2 className="fontsizelg fw-bold mt-2 mb-3">John Doe</h2>
                    <p className="role fw-bold mb-2">Frontend Development Student</p>
                    <p className="mt-1 fw-medium">I enjoy building clean and responsive user interfaces using React.</p>

                </div>
            </div>
        </main>
    )
}
export default Card