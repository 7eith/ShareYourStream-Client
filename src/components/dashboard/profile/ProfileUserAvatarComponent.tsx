const ProfileUserAvatarComponent = () => {

    const DEBUG_link = "https://i.pinimg.com/originals/88/c1/2d/88c12dfcb28c16e51b30234a0513a74c.jpg";

    // TODO: edit avatar
    return (
        <div className="userAvatar" >
            <img src={DEBUG_link} />
            {/* <ThumbnailICO className="editIco" /> */}
        </div>
    )

}

export default ProfileUserAvatarComponent;