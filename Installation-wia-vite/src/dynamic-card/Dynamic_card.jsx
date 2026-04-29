import { Avatar } from "./Avatar"
import { userData } from "../data/users_data"
function Dynamic_card() {
    return (
        <main className="d-flex flex-wrap gap-2 justify-content-center">
            {
                userData.map(
                    (user) => (<div key={user.id} className="dynamiccard shadow">
                        <Avatar avatarImage={user.url} />
                        <div className="cardContenent">
                            <h2 className="fontsizelg fw-bold mt-2 mb-3">{user.name}</h2>
                            <p className="role fw-bold mb-2">{user.role}</p>
                            <p className="mt-1 fw-medium">{user.userFeedback}</p>

                        </div>
                    </div>)
                )
            }

        </main>
    )
}
export default Dynamic_card