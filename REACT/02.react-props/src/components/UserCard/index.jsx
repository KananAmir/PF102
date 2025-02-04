import PropTypes from 'prop-types';

const UserCard = ({ name, age, avatar, email }) => {

    // const { name, age, avatar, email } = props

    console.log(name);

    name = "John"

    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "5px" }}>
            <img src={avatar} alt={name} width="100" height="100" style={{ borderRadius: "50%" }} />
            <h2 style={{ color: "orange" }}>{name}</h2>
            <p>Yaş: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
};


UserCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    avatar: PropTypes.string,
    email: PropTypes.string,
}
export default UserCard;