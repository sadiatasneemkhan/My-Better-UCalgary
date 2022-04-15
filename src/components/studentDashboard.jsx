import React from 'react';
import StudentSidebar from './studentSidebar';
import SignOutHeader from './signOutHeader';

function StudentDashboard() {
    return (  
        <React.Fragment>
            <SignOutHeader/>
            <StudentSidebar/>
        </React.Fragment>
    );
}

export default StudentDashboard;