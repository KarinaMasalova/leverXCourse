import React from 'react';

import OneRequestCard from '../../all-requests/one-request-card';
import FormButton from '../../new-request/new-request-form/form-button';
import ApproversContainerTitle from './approvers-container-title';
import Approver from './approver';

export default function RequestDetailsPopup() {
    return (
        <div className="popup-container">
            <div className="request-details-info">
                <p className="request-details__title">Request for vacation
                    <span className="ico copy-icon"></span>
                </p>
                <OneRequestCard/>
                <div className="all-approvers">
                    <div className="approvers-container">
                        <ApproversContainerTitle title={'Already approved'}/>
                        <Approver
                            className={'people-approvers__icon people-approvers__icon_approved'}
                            name={'John Smith'}
                            comments={'Comments: Have a nice vacation!'}
                        />
                        <Approver
                            title={'Already approved'}
                            className={'people-approvers__icon people-approvers__icon_approved'}
                            name={'John Smith'}
                            comments={'Comments: Have a nice vacation!'}
                        />
                    </div>
                    <div className="approvers-container">
                        <ApproversContainerTitle title={'Current approver(s)'}/>
                        <Approver
                            className={'people-approvers__icon people-approvers__icon_will-mcconnel'}
                            name={'Will McConnel'}
                        />
                    </div>
                    <div className="approvers-container">
                        <ApproversContainerTitle title={'Next approver(s)'}/>
                        <Approver
                            className={'people-approvers__icon people-approvers__icon_john-smith'}
                            name={'John Smith'}
                        />
                        <Approver
                            className={'people-approvers__icon people-approvers__icon_mike-smith'}
                            name={'Mike Smith'}
                        />
                    </div>
                    <div className="approvers-container">
                        <ApproversContainerTitle title={'Documents registration (final step)'}/>
                        <Approver
                            className={'people-approvers__icon people-approvers__icon_katrin-brown'}
                            name={'Katrin Brown'}
                        />
                    </div>
                </div>
                <div className="request-details__buttons">
                    <FormButton text={'cancel request'} className={'button button_uncolored'}/>
                    <FormButton text={'change'} className={'button button_uncolored'}/>
                    <FormButton text={'submit'} className={'button button_colored'}/>
                </div>
            </div>
        </div>
    );
}