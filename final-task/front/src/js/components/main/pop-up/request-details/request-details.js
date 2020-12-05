import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import OneRequestCard from '../../all-requests/one-request-card';
import FormButton from '../../new-request/new-request-form/form-button';
import ApproversContainerTitle from './approvers-container-title';
import Approver from './approver';
import { fetchOneRequestCard } from '../../../../repository/repository';

export default function RequestDetailsPopup() {
    const dispatch = useDispatch();

    const getCurrentRequestCardID = (state) => state.currentRequestCardReducer.currentCardID;
    const currentCardId = useSelector(getCurrentRequestCardID);

    useEffect(() => {
        fetchOneRequestCard(currentCardId)
            .then(data => dispatch(setCurrentRequestCard(data)))
            .catch(err => console.log(err));
    }, [currentCardId]);

    return (
        <div className="popup-container">
            <div className="request-details-info">
                <p className="request-details__title">Request for vacation
                    <span className="ico copy-icon"></span>
                </p>
                <OneRequestCard
                    className={(currentCardId.type === 'Vacation')
                        ? 'request-card__icon request-card__icon_vacation'
                        : (currentCardId.type === 'Sick leave')
                            ? 'request-card__icon request-card__icon_sick-leave'
                            : 'request-card__icon request-card__icon_own-expense'}
                    type={currentCardId.type}
                    startDate={currentCardId.startDate}
                    endDate={currentCardId.endDate}
                    durationInDays={currentCardId.durationInDays}
                    creationDate={currentCardId.creationDate}
                    approve={currentCardId.approve}
                    key={currentCardId.id}
                />
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