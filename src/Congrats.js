import React from 'react';
import PropTypes from 'prop-types'


/**
 * Functional react component fro gratulatory message.
 * @function
 * @params {object} props - React props.
 * @returns {JSX.Element}
 */

const Congrats = (props)=>{

    if (props.success){
        return (
                <div data-test="component-congrats" className="alern alert-success">
                    <span data-test="congrats-message">
                            Congratulations! You guessed the word!
                    </span>
                </div>
            );
    } else {
        return (
            <div data-test="component-congrats"/>
        )
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired, 


}

export default Congrats