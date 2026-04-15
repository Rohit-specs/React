import { Avatar } from "./Avatar"
function Dynamic_card() {

    let userData = [
        {
            id: 1,
            name: "John Doe",
            role: "Frontend Development Student",
            userFeedback: "I enjoy building clean and responsive user interfaces using React",
            url: "https://www.svgrepo.com/show/420317/artist-avatar-marilyn.svg"
        },
        {
            id: 2,
            name: "Jennifer Martin",
            role: "Frontend Development Student",
            userFeedback: "I enjoy building clean and responsive user interfaces using React",
            url: "https://www.svgrepo.com/show/420319/actor-chaplin-comedy.svg"
        },
        {
            id: 3,
            name: "Thomas Smith",
            role: "Frontend Development Student",
            userFeedback: "I enjoy building clean and responsive user interfaces using React",
            url: "https://www.svgrepo.com/show/420331/avatar-lazybones-sloth.svg"
        }
    ]
    return (
        <main className="d-flex flex-wrap gap-2 justify-content-between">
            {
                userData.map(
                    (user) => (<div key={user.id} className="staticcard shadow">
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