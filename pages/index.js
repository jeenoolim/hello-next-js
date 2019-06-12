import React, { Component } from "react";
import faker from "faker";
import { decorate, observable } from "mobx";
import { observer } from "mobx-react";
import ProfileImage from "./components/ProfileImage";
faker.locale = "en";

class Data {
    @observable users = [];
}

@observer
export default class Index extends Component {
    data = new Data();
    state = {
        users: []
    };
    generate = async () => {
        // const user = {
        //     name: faker.name.findName(),
        //     avatar: faker.image.avatar(),
        //     email: faker.internet.email()
        // };
        // await this.setState({ users: [...this.state.users, user] });
        // console.log(this.state.users);
    };
    render() {
        return (
            <div>
                <h1>Facker Demo</h1>
                {this.data.users.map((user, i) => {
                    return (
                        <dl className="row" key={`user${i}`}>
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9">{user.name}</dd>
                            <dt className="col-sm-3">Avatar</dt>
                            <dd className="col-sm-9">
                                <ProfileImage url={user.avatar} />
                            </dd>
                            <dt className="col-sm-3">Email</dt>
                            <dd className="col-sm-9">{user.email}</dd>
                        </dl>
                    );
                })}

                <button className="btn btn-primary" onClick={this.generate}>
                    generate
                </button>
            </div>
        );
    }
}
