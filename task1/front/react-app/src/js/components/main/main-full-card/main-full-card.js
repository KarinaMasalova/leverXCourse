import React, { Component } from 'react';

import { fetchOneEmployee } from '../../../functions/repository';
import ReturnBtn from './return-btn';

export default class MainFullCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        }
    }

    componentDidMount() {
        fetchOneEmployee(this.props.match.params.id)
        .then(data => {
            this.setState({employee: data});
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <main className="main wrapper">
                <div className="employee-card">
                    <div className="employee">
                        <ReturnBtn />
                        <img className="employee__photo" alt="" src={this.state.employee.photo} />
                        <span className="employee__sex">— {this.state.employee.sex} —</span>
                        <h1 className="employee__name">{this.state.employee.engName}</h1>
                        <h2 className="employee__nativeName">{this.state.employee.ruName}</h2>
                        <div className="employee__tags">
                            <span className="tag">
                                <span className="id-tag">ID</span>
                                <span className="id-tag">{this.state.employee.id}</span>
                            </span>
                            <span className="tag">
                                <span className="business-card-tag">{this.state.employee.businessCard}</span>
                            </span>
                        </div>
                    </div>
                    <div className="employee-info">
                        <div className="general-info info">
                            <h3 className="info__title">general info</h3>
                            <p className="info__item">
                                <span>
                                    <span className="department__ico"></span>
                                    <span className="info__name">Department</span>
                                </span>
                                <span className="info__value">{this.state.employee.department}</span>
                            </p>
                            <p className="info__item">
                                <span>
                                    <span className="room__ico"></span>
                                    <span className="info__name">Room</span>
                                </span>
                                <span className="info__value">{this.state.employee.room}</span>
                            </p>
                        </div>
                        <div className="contacts info">
                            <h3 className="info__title">contacts</h3>
                            <p className="info__item">
                                <span>
                                    <span className="internal-phone__ico"></span>
                                    <span className="info__name">Internal phone</span>
                                </span>
                                <span className="info__value">{this.state.employee.internalPhone}</span>
                            </p>
                            <p className="info__item">
                                <span>
                                    <span className="mobile-phone__ico"></span>
                                    <span className="info__name">Mobile phone</span>
                                </span>
                                <span className="info__value">{this.state.employee.mobilePhone}</span>
                            </p>
                            <p className="info__item">
                                <span>
                                    <span className="email__ico"></span>
                                    <span className="info__name">Email</span>
                                </span>
                                <span className="info__value">{this.state.employee.email}</span>
                            </p>
                            <p className="info__item">
                                <span>
                                    <span className="skype__ico"></span>
                                    <span className="info__name">Skype ID</span>
                                </span>
                                <span className="info__value">{this.state.employee.skypeID}</span>
                            </p>
                            <p className="info__item">
                                <span>
                                    <span className="c-number__ico"></span>
                                    <span className="info__name">C-Number</span>
                                </span>
                                <span className="info__value">{this.state.employee.cNumber}</span>
                            </p>
                        </div>
                        <div className="profile-info info">
                            <h3 className="info__title">profile info</h3>
                            <p className="info__item">
                                <span>
                                    <span className="hire-date__ico"></span>
                                    <span className="info__name">Hire date</span>
                                </span>
                                <span className="info__value">{this.state.employee.hireDate}</span>
                            </p>
                            <p className="info__item">
                                <span>
                                    <span className="status__ico"></span>
                                    <span className="info__name">Status</span>
                                </span>
                                <span className="info__value">{this.state.employee.status}</span>
                            </p>
                        </div>
                        <div className="employment-info info">
                            <h3 className="info__title">employment info</h3>
                            <p className="info__item">
                                <span>
                                    <span className="start-period__ico"></span>
                                    <span className="info__name">Start of employment period</span>
                                </span>
                                <span className="info__value">{this.state.employee.startOfEmploymentPeriod}</span>
                            </p>
                            <p className="info__item">
                                <span>
                                    <span className="working-day__ico"></span>
                                    <span className="info__name">Working day duration</span>
                                </span>
                                <span className="info__value">{this.state.employee.workingDayDuration}</span>
                            </p>
                        </div>
                        <div className="additional-modules info">
                            <h3 className="info__title">additional modules</h3>
                            <p className="info__item">
                                <span>
                                    <span className="vacation__ico"></span>
                                    <span className="info__name">Vacation</span>
                                </span>
                                <span className="info__value">{this.state.employee.vacation}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
