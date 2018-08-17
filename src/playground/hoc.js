import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>{props.info}</p>
    </div>
)

const withAdminWarning = (WrappingComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info.</p> }
            <WrappingComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappingComponent) => {
    return (props) => (
        <div>
            { props.isAuthentication ? (
                <WrappingComponent {...props} />
            ) : (
                <p>Please Login</p>
            )}
        </div>
    )
}
const AdminWarning = withAdminWarning(Info);
const Authentication = requireAuthentication(Info);

ReactDOM.render(<Authentication isAuthentication={false} info="info"/>, document.getElementById('app'))

