import React from 'react';
import AdminSidebar from './adminSidebar';
import SignOutHeader from './signOutHeader';

function AdminDashboard() {
    return (  
        <React.Fragment>
            <SignOutHeader/>
            <AdminSidebar/>
        </React.Fragment>
    );
}

export default AdminDashboard;