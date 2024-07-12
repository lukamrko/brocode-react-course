function ProfilePicture() {
    const imageUrl = './src/assets/gojo.png';

    const handleClick = (e) => e.target.style.display = "none";


    return (<img onClick={(e)=>handleClick(e)} src={imageUrl} alt="The strongest fraud"></img>);
}

export default ProfilePicture