import { Button } from "../Button";
import PropTypes from 'prop-types';

const Greeting = ({ name }) => {
    // let user = "Gunel"

    return (
        <div>Hello {name}
            <Button />
        </div>
    )
}

Greeting.propTypes = {
    name: PropTypes.string
}

export default Greeting