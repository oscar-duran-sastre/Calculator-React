import React from 'react';
import { Button } from 'reactstrap';

const Buttons = (props) => {
    return (
        <div>
            <Button className={props.title === 'C' ? 'deleteButton' : ''}
                outline color="secondary" onClick={() => { props.click(props.title) }}>{props.title}
            </Button>
        </div>
    )
}

export { Buttons };
