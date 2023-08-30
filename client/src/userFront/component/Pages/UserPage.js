// I need a user profile page so the user can access their account, orders, and be able to send/receive messages
import * as React from 'react';
import AccountInfo from '../UserPage/Account';
import Orders from '../UserPage/Orders';


function UserPage() {
    return (
        <div>
            <AccountInfo />
            <Orders />
        </div>
    );
}



export default UserPage