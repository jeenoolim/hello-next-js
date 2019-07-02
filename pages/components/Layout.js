import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Store from '../store';

@observer
export default class Layout extends Component {
	login = () => {
		Store.session = { name: '임진우', no: 1234 };
	};
	render() {
		const { session } = Store;
		return (
			<div id="layout" style={{ display: 'flex', flexDirection: 'column' }}>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>
						</ul>
						<div className="my-2 my-lg-0">
							{(session && `${session.name}님 반갑습니다.`) || (
									<button className="btn btn-primary" onClick={this.login}>
										로그인 해주세요.
									</button>
								)}
						</div>
					</div>
				</nav>
				<div style={{ flexGrow: 1 }} className="my-2 my-lg-0">
					{this.props.children}
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100px',
						background: '#f8f9fa',
						position: 'relative',
						bottom: 0
					}}
				>
					footer section
				</div>
			</div>
		);
	}
}
