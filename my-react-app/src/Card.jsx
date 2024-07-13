import profilePic from './assets/anotherProblem.jpg'

function Card() {

    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Mrki</h2>
            <p className="card-text">Ex-junior Software developer and amater NEET</p>
        </div>
    );
}

export default Card