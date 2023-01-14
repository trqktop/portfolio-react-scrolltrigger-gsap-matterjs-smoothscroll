import './modals.css'
import React, { useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';

const modalRoot = document.getElementById('react-modals')

export default function Modals(props) {
    const { data, modalIsOpened, blackTheme, modalState, windowWidth, gsap } = { ...props }
    const modalContainer = useRef(null)
    function closeModalHandler(e) {
        const elClass = e.target.classList
        const closeButton = 'modal-container__close-button'
        const overlay = 'work-modal'
        if (elClass.contains(closeButton) || elClass.contains(overlay))
            modalState(false)
    }
    useEffect(() => {
        if (windowWidth < 900) {
            const ctx = gsap.context(() => {
                gsap.fromTo(modalContainer.current, {
                    yPercent: +100
                }, {
                    yPercent: 0
                })
            }, modalContainer)
            return () => ctx.revert();
        }
        if (modalIsOpened) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'auto'
        }
    }, [modalIsOpened])
    return ReactDOM.createPortal(
        (
            <div
                onClick={closeModalHandler}
                className={
                    modalIsOpened ?
                        `work-modal ${data.projectName + '-modal work-modal_opened'}` :
                        `work-modal ${data.projectName + '-modal'}`
                }>
                <div ref={modalContainer} className={blackTheme ? "modal-container modal-container_black" : "modal-container"}>
                    <button
                        onClick={() => modalState(false)}
                        className="modal-container__close-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.70526 3.29619C4.31572 2.90469 3.68414 2.90469 3.2946 3.29619C2.90506 3.68769 2.90506 4.32245 3.2946 4.71395L10.5893 12.0453L3.3847 19.2861C2.99515 19.6776 2.99515 20.3124 3.3847 20.7039C3.77424 21.0954 4.40581 21.0954 4.79536 20.7039L11.9999 13.4631L19.2045 20.7039C19.594 21.0954 20.2256 21.0954 20.6152 20.7039C21.0047 20.3124 21.0047 19.6776 20.6152 19.2861L13.4106 12.0453L20.7053 4.71395C21.0948 4.32245 21.0948 3.68769 20.7053 3.29619C20.3157 2.90469 19.6841 2.90469 19.2946 3.29619L11.9999 10.6276L4.70526 3.29619Z" fill="#98A2B3" />
                        </svg>
                    </button>
                    <div className="modal__header">
                        <div>
                            <a href={data.gitHubPage} className="modal__header-link" target="_blank" id="gitHubPage">
                                <span className='modal__header-link-title'>Github pages</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <path
                                        d="M18.8334 9.99996C18.8334 13.9283 18.8334 15.8925 17.613 17.1129C16.3926 18.3333 14.4285 18.3333 10.5001 18.3333C6.57171 18.3333 4.60752 18.3333 3.38714 17.1129C2.16675 15.8925 2.16675 13.9283 2.16675 9.99996C2.16675 6.07159 2.16675 4.1074 3.38714 2.88701C4.60752 1.66663 6.57171 1.66663 10.5001 1.66663"
                                        stroke="#595BA7" strokeWidth="1.5" strokeLinecap="round" />
                                    <mask id="path-3-inside-1_152_1206" fill="white">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.8913 9.60857C10.6472 9.36449 10.6472 8.96876 10.8913 8.72468L17.3244 2.29163H14.3801C14.0349 2.29163 13.7551 2.0118 13.7551 1.66663C13.7551 1.32145 14.0349 1.04163 14.3801 1.04163H18.8333C19.1784 1.04163 19.4583 1.32145 19.4583 1.66663V6.11975C19.4583 6.46493 19.1784 6.74475 18.8333 6.74475C18.4881 6.74475 18.2083 6.46493 18.2083 6.11975V3.17551L11.7752 9.60857C11.5311 9.85265 11.1354 9.85265 10.8913 9.60857Z" />
                                    </mask>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M10.8913 9.60857C10.6472 9.36449 10.6472 8.96876 10.8913 8.72468L17.3244 2.29163H14.3801C14.0349 2.29163 13.7551 2.0118 13.7551 1.66663C13.7551 1.32145 14.0349 1.04163 14.3801 1.04163H18.8333C19.1784 1.04163 19.4583 1.32145 19.4583 1.66663V6.11975C19.4583 6.46493 19.1784 6.74475 18.8333 6.74475C18.4881 6.74475 18.2083 6.46493 18.2083 6.11975V3.17551L11.7752 9.60857C11.5311 9.85265 11.1354 9.85265 10.8913 9.60857Z"
                                        fill="#595BA7" />
                                    <path
                                        d="M10.8913 8.72468L11.952 9.78534L11.952 9.78534L10.8913 8.72468ZM10.8913 9.60857L11.952 8.54791L11.952 8.54791L10.8913 9.60857ZM17.3244 2.29163L18.385 3.35229L20.9457 0.791626H17.3244V2.29163ZM18.2083 3.17551H19.7083V-0.44581L17.1476 2.11485L18.2083 3.17551ZM11.7752 9.60857L10.7145 8.54791L10.7145 8.54791L11.7752 9.60857ZM9.83065 7.66402C9.00078 8.49389 9.00078 9.83936 9.83065 10.6692L11.952 8.54791C12.2937 8.88962 12.2937 9.44364 11.952 9.78534L9.83065 7.66402ZM16.2637 1.23097L9.83065 7.66402L11.952 9.78534L18.385 3.35229L16.2637 1.23097ZM14.3801 3.79163H17.3244V0.791626H14.3801V3.79163ZM12.2551 1.66663C12.2551 2.84023 13.2065 3.79163 14.3801 3.79163V0.791626C14.8634 0.791626 15.2551 1.18338 15.2551 1.66663H12.2551ZM14.3801 -0.458374C13.2065 -0.458374 12.2551 0.493022 12.2551 1.66663H15.2551C15.2551 2.14988 14.8634 2.54163 14.3801 2.54163V-0.458374ZM18.8333 -0.458374H14.3801V2.54163H18.8333V-0.458374ZM20.9583 1.66663C20.9583 0.493022 20.0069 -0.458374 18.8333 -0.458374V2.54163C18.35 2.54163 17.9583 2.14988 17.9583 1.66663H20.9583ZM20.9583 6.11975V1.66663H17.9583V6.11975H20.9583ZM18.8333 8.24475C20.0069 8.24475 20.9583 7.29336 20.9583 6.11975H17.9583C17.9583 5.6365 18.35 5.24475 18.8333 5.24475V8.24475ZM16.7083 6.11975C16.7083 7.29336 17.6596 8.24475 18.8333 8.24475V5.24475C19.3165 5.24475 19.7083 5.6365 19.7083 6.11975H16.7083ZM16.7083 3.17551V6.11975H19.7083V3.17551H16.7083ZM12.8359 10.6692L19.2689 4.23617L17.1476 2.11485L10.7145 8.54791L12.8359 10.6692ZM9.83065 10.6692C10.6605 11.4991 12.006 11.4991 12.8359 10.6692L10.7145 8.54791C11.0562 8.2062 11.6103 8.2062 11.952 8.54791L9.83065 10.6692Z"
                                        fill="#595BA7" mask="url(#path-3-inside-1_152_1206)" />
                                </svg>
                            </a>
                        </div>
                        <h4 className="modal__header-title" id="title">{data.title}</h4>
                        <div>
                            <a href={data.repository} className="modal__header-link" target="_blank" id="repository">
                                <span className='modal__header-link-title'>Repository</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <path
                                        d="M18.8334 9.99996C18.8334 13.9283 18.8334 15.8925 17.613 17.1129C16.3926 18.3333 14.4285 18.3333 10.5001 18.3333C6.57171 18.3333 4.60752 18.3333 3.38714 17.1129C2.16675 15.8925 2.16675 13.9283 2.16675 9.99996C2.16675 6.07159 2.16675 4.1074 3.38714 2.88701C4.60752 1.66663 6.57171 1.66663 10.5001 1.66663"
                                        stroke="#595BA7" strokeWidth="1.5" strokeLinecap="round" />
                                    <mask id="path-3-inside-1_152_1206" fill="white">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.8913 9.60857C10.6472 9.36449 10.6472 8.96876 10.8913 8.72468L17.3244 2.29163H14.3801C14.0349 2.29163 13.7551 2.0118 13.7551 1.66663C13.7551 1.32145 14.0349 1.04163 14.3801 1.04163H18.8333C19.1784 1.04163 19.4583 1.32145 19.4583 1.66663V6.11975C19.4583 6.46493 19.1784 6.74475 18.8333 6.74475C18.4881 6.74475 18.2083 6.46493 18.2083 6.11975V3.17551L11.7752 9.60857C11.5311 9.85265 11.1354 9.85265 10.8913 9.60857Z" />
                                    </mask>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M10.8913 9.60857C10.6472 9.36449 10.6472 8.96876 10.8913 8.72468L17.3244 2.29163H14.3801C14.0349 2.29163 13.7551 2.0118 13.7551 1.66663C13.7551 1.32145 14.0349 1.04163 14.3801 1.04163H18.8333C19.1784 1.04163 19.4583 1.32145 19.4583 1.66663V6.11975C19.4583 6.46493 19.1784 6.74475 18.8333 6.74475C18.4881 6.74475 18.2083 6.46493 18.2083 6.11975V3.17551L11.7752 9.60857C11.5311 9.85265 11.1354 9.85265 10.8913 9.60857Z"
                                        fill="#595BA7" />
                                    <path
                                        d="M10.8913 8.72468L11.952 9.78534L11.952 9.78534L10.8913 8.72468ZM10.8913 9.60857L11.952 8.54791L11.952 8.54791L10.8913 9.60857ZM17.3244 2.29163L18.385 3.35229L20.9457 0.791626H17.3244V2.29163ZM18.2083 3.17551H19.7083V-0.44581L17.1476 2.11485L18.2083 3.17551ZM11.7752 9.60857L10.7145 8.54791L10.7145 8.54791L11.7752 9.60857ZM9.83065 7.66402C9.00078 8.49389 9.00078 9.83936 9.83065 10.6692L11.952 8.54791C12.2937 8.88962 12.2937 9.44364 11.952 9.78534L9.83065 7.66402ZM16.2637 1.23097L9.83065 7.66402L11.952 9.78534L18.385 3.35229L16.2637 1.23097ZM14.3801 3.79163H17.3244V0.791626H14.3801V3.79163ZM12.2551 1.66663C12.2551 2.84023 13.2065 3.79163 14.3801 3.79163V0.791626C14.8634 0.791626 15.2551 1.18338 15.2551 1.66663H12.2551ZM14.3801 -0.458374C13.2065 -0.458374 12.2551 0.493022 12.2551 1.66663H15.2551C15.2551 2.14988 14.8634 2.54163 14.3801 2.54163V-0.458374ZM18.8333 -0.458374H14.3801V2.54163H18.8333V-0.458374ZM20.9583 1.66663C20.9583 0.493022 20.0069 -0.458374 18.8333 -0.458374V2.54163C18.35 2.54163 17.9583 2.14988 17.9583 1.66663H20.9583ZM20.9583 6.11975V1.66663H17.9583V6.11975H20.9583ZM18.8333 8.24475C20.0069 8.24475 20.9583 7.29336 20.9583 6.11975H17.9583C17.9583 5.6365 18.35 5.24475 18.8333 5.24475V8.24475ZM16.7083 6.11975C16.7083 7.29336 17.6596 8.24475 18.8333 8.24475V5.24475C19.3165 5.24475 19.7083 5.6365 19.7083 6.11975H16.7083ZM16.7083 3.17551V6.11975H19.7083V3.17551H16.7083ZM12.8359 10.6692L19.2689 4.23617L17.1476 2.11485L10.7145 8.54791L12.8359 10.6692ZM9.83065 10.6692C10.6605 11.4991 12.006 11.4991 12.8359 10.6692L10.7145 8.54791C11.0562 8.2062 11.6103 8.2062 11.952 8.54791L9.83065 10.6692Z"
                                        fill="#595BA7" mask="url(#path-3-inside-1_152_1206)" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="modal__description">
                        <h4 className="modal__desctiption-title" >{data.projectTheme}</h4>
                        <p className="modal__description-text" >{data.description}</p>
                    </div>
                    <div className="modal__tech">
                        <ul className="modal__tech-flex">
                            <li className="modal__tech-stack">
                                <p className='modal__list-title'>Стек технологий</p>
                                <ul className="modal__tech-stack-list">
                                    {data.tech.map((item, i) => (<li key={i} className="modal__tech-stack-item">{item}</li>))}
                                </ul>
                            </li>
                            <li className="modal__tech-new-stack">
                                <p className='modal__list-title'>Что нового освоил</p>
                                <ul className="modal__tech-stack-list">
                                    {data.newKnowledge.map((item, i) => (<li key={i} className="modal__tech-stack-item" >{item}</li>))}
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        ), modalRoot
    )
}