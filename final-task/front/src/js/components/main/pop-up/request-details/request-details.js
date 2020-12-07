import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from 'react-dom';

import OneRequestCard from '../../all-requests/one-request-card';
import FormButton from '../../new-request/new-request-form/form-button';
import ApproversContainerTitle from './approvers-container-title';
import Approver from './approver';
import { fetchOneRequestCard } from '../../../../repository/repository';
import setCurrentRequestCard from '../../../../store/actionCreators/setCurrentRequestCard';
// import setRequestDetailsPopup from '../../../../store/actionCreators/setRequestDetailsPopup';

export default function RequestDetailsPopup() {
    const dispatch = useDispatch();

    const currentCardID = useSelector((state) => state.currentRequestCardIdReducer.currentCardID);

    useEffect(() => {
        fetchOneRequestCard(currentCardID)
            .then(data => {
                console.log(data);
                dispatch(setCurrentRequestCard(data));
            })
            .catch(err => console.log(err));
    }, [currentCardID]);

    // const onCancelButtonClicked = (isShown) => {
    //     dispatch(setRequestDetailsPopup(isShown));
    // }

    const currentCard = useSelector((state) => state.currentRequestCardReducer.currentCard);

    return createPortal(
        <>
            <div className="overlay"></div>
            <div className="popup-container">
                <div className="request-details-info">
                    <p className="request-details__title">Request for vacation
                    <span className="ico copy-icon"></span>
                    </p>
                    <OneRequestCard
                        className={(currentCard.type === 'Vacation')
                            ? 'request-card__icon request-card__icon_vacation'
                            : (currentCard.type === 'Sick leave')
                                ? 'request-card__icon request-card__icon_sick-leave'
                                : 'request-card__icon request-card__icon_own-expense'}
                        type={currentCard.type}
                        startDate={currentCard.startDate}
                        endDate={currentCard.endDate}
                        durationInDays={currentCard.durationInDays}
                        creationDate={currentCard.creationDate}
                        approve={currentCard.approve}
                        key={currentCard.id}
                    />
                    <div className="all-approvers">
                        <div className="approvers-container">
                            <ApproversContainerTitle title={'Already approved'} />
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
                            <ApproversContainerTitle title={'Current approver(s)'} />
                            <Approver
                                className={'people-approvers__icon people-approvers__icon_will-mcconnel'}
                                name={'Will McConnel'}
                            />
                        </div>
                        <div className="approvers-container">
                            <ApproversContainerTitle title={'Next approver(s)'} />
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
                            <ApproversContainerTitle title={'Documents registration (final step)'} />
                            <Approver
                                className={'people-approvers__icon people-approvers__icon_katrin-brown'}
                                name={'Katrin Brown'}
                            />
                        </div>
                    </div>
                    <div className="request-details__buttons">
                        <FormButton
                            text={'cancel request'}
                            className={'button button_uncolored'}
                            // onClick={onCancelButtonClicked(true)}
                        />
                        <FormButton text={'change'} className={'button button_uncolored'} />
                        <FormButton text={'submit'} className={'button button_colored'} />
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("portalDetailsPopup")
    );
}