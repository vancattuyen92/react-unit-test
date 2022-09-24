import React from 'react'

type IProps = {
    firstName: string;
    lastName: string;
    open?: boolean;
}

export default function HelloWorld({ firstName, lastName, open = true}: IProps): JSX.Element {
    return (
        <div>
            Helloworld
            <div data-testid="firstName">{firstName}</div>
            <div data-testid="lastName">{lastName}</div>
             <div data-testid="open">{open && 'open'}</div>
        </div>
    )
}