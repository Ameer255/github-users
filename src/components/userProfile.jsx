import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadIcon from '@mui/icons-material/Markunread';

const UserProfile = ({avatar, name, bio, location, email, followers, following, url}) => {

    return (

        <div className="profile-card">
            <section className="bg-image"></section>

            <section className="user-details">
                <div className="user-avatar">
                    <img src={avatar} alt="user image" />
                </div>

                <h2 className="user-name">{name}</h2>
                <p className="user-bio">{ bio ? bio : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptates quas fuga nostrum cum voluptatum doloremque'}</p>

                <div className="location-contact">
                    <div>
                        <i><LocationOnIcon /></i>
                        <span> <a href='' > {location ? location : 'Location' }</a> </span>
                    </div>

                    <div>
                        <i><MarkunreadIcon /></i>
                        <span><a href={email?`mailto:${email}`: '#'} > Contact </a></span>
                    </div>

                </div>
            </section>

            <section className="user-stats">
                <div className="followers">
                    <span className="count">{followers ? followers : '673' }</span> <br />
                    <span>Followers</span>
                </div>
                <div className="following">
                    <span className="count">{following ? following : '0' }</span> <br />
                    <span>Following</span>
                </div>
            </section>

           <a href={url}> <button className="follow-btn">Follow</button> </a>

        </div>
    )
}

export default UserProfile;