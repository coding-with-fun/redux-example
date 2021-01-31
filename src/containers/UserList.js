import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsersRequest } from "../actions/userAction";

class UserList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUsersRequest());
    }
    render() {
        const users = this.props.users;
        return (
            <div>
                {users.loading ? (
                    <h1>Loading</h1>
                ) : users.users ? (
                    users.users.map((user) => <p key={user.id}>{user.name}</p>)
                ) : (
                    <h3>{users.error}</h3>
                )}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        users: state.user,
    };
})(UserList);
