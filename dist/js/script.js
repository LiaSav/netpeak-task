'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const plansPricing = document.querySelector('.plans-pricing'),
        itemsMonthlyWrapper = plansPricing.querySelector('.plans-pricing__items-monthly'),
        itemsYearlyWrapper = plansPricing.querySelector('.plans-pricing__items-yearly');

    const itemsMonthly = [
        {
            priceNum: '$19',
            priceText: '/month',
            title: 'Starter',
            text: 'Unleash the power of automation.',
            lists: [
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Multi-step Zaps',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: '3 Premium Apps',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: '2 Users team',
                },
            ],
            btn: 'Choose plan'
        },
        {
            priceNum: '$54',
            priceText: '/month',
            title: 'Professional',
            text: 'Advanced tools to take your work to the next level.',
            lists: [
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Multi-step Zaps',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Unlimited Premium',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: '50 Users team',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Shared Workspace',
                },
            ],
            btn: 'Choose plan'
        },
        {
            priceNum: '$89',
            priceText: '/month',
            title: 'Company',
            text: 'Automation plus enterprise-grade features.',
            lists: [
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Multi-step Zap',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Unlimited Premium',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Unlimited Users Team',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Advanced Admin',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Custom Data Retention',
                },
            ],
            btn: 'Choose plan'
        },
    ];

    const itemsYearly = [
        {
            priceNum: '$12',
            priceText: '/month',
            title: 'Starter',
            text: 'Unleash the power of automation.',
            lists: [
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Multi-step Zaps',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: '3 Premium Apps',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: '2 Users team',
                },
            ],
            btn: 'Choose plan'
        },
        {
            priceNum: '$36',
            priceText: '/month',
            title: 'Professional',
            text: 'Advanced tools to take your work to the next level.',
            lists: [
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Multi-step Zaps',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Unlimited Premium',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: '50 Users team',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Shared Workspace',
                },
            ],
            btn: 'Choose plan'
        },
        {
            priceNum: '$56',
            priceText: '/month',
            title: 'Company',
            text: 'Automation plus enterprise-grade features.',
            lists: [
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Multi-step Zap',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Unlimited Premium',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Unlimited Users Team',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Advanced Admin',
                },
                {
                    useXlinkHref: 'sprite-svg/sprite.svg#plans-pricing__item-list-svg',
                    text: 'Custom Data Retention',
                },
            ],
            btn: 'Choose plan'
        },
    ];

    function createItems(wrapper, size, itemsArr) {
        wrapper.innerHTML = Array.from(Array(size).keys()).map((key, index) => (
            `<div class="plans-pricing__item ${(size - 1) === index ? 'plans-pricing__item_active' : ''}">
                <div class="plans-pricing__item-top">
                    <div class="plans-pricing__item-popular" style="display: ${(size - 1) === index ? 'inline-block' : 'none'};">
                        <div class="plans-pricing__item-popular-text">MOST POPULAR</div>
                    </div>
                    <div class="plans-pricing__item-price">
                        <div class="plans-pricing__item-price-num">${itemsArr[key].priceNum}</div>
                        <div class="plans-pricing__item-price-text">${itemsArr[key].priceText}</div>
                    </div>
                    <div class="plans-pricing__item-body">
                        <div class="plans-pricing__item-title">${itemsArr[key].title}</div>
                        <div class="plans-pricing__item-text">${itemsArr[key].text}</div>
                        <ul class="plans-pricing__item-lists">
                            ${itemsArr[key].lists.map(list => `
                                <li class="plans-pricing__item-list">
                                    <div class="plans-pricing__item-list-round">
                                        <svg class="plans-pricing__item-list-svg">
                                            <use xlink:href="${(size - 1) === index ? `${list.useXlinkHref}-white` : `${list.useXlinkHref}`}"></use>
                                        </svg>
                                    </div>
                                    <div class="plans-pricing__item-list-text">${list.text}</div>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                <button class="plans-pricing__item-btn btn-hover">${itemsArr[key].btn}</button>
            </div>`
        )).join('');
    }

    createItems(itemsMonthlyWrapper, itemsMonthly.length, itemsMonthly);
    createItems(itemsYearlyWrapper, itemsYearly.length, itemsYearly);


    const buttonsWrapper = plansPricing.querySelector('.plans-pricing__buttons'),
        buttons = buttonsWrapper.querySelectorAll('.plans-pricing__btn'),
        contents = plansPricing.querySelectorAll('.plans-pricing__content');

    buttonsWrapper.addEventListener('click', (e) => clickTab(e));

    function clickTab(e) {
        const btnToActive = e.target.closest('.plans-pricing__btn');
        if (!btnToActive) return;

        const dataBtn = btnToActive.dataset.forTab;
        const contentToActive = plansPricing.querySelector(`.plans-pricing__content[data-tab="${dataBtn}"]`);

        buttons.forEach(tab => {
            tab.classList.remove('plans-pricing__btn_active');
        });

        contents.forEach(content => {
            content.classList.remove('plans-pricing__content_active', 'fade');
        });

        btnToActive.classList.add('plans-pricing__btn_active');
        contentToActive.classList.add('plans-pricing__content_active', 'fade');
    }

});