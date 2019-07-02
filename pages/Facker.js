import React, { Component } from 'react';
import faker from 'faker';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Layout from './components/Layout';
import ProfileImage from './components/ProfileImage';
faker.locale = 'ko';

class Data {
	@observable users = [];
}

@observer
export default class Facker extends Component {
	data = new Data();
	generate = () => {
		this.data.users = [
			...this.data.users,
			{
				name: faker.name.findName(),
				avatar: faker.image.avatar(),
				email: faker.internet.email()
			}
		];
	};

	render() {
		return (
			<Layout>
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
			</Layout>
		);
	}
}
