import NavPageComponent from '../sp-tab-page/sp-tab-page';
import NavComponent from '../sp-tab-container/sp-tab-container';
import page from './sp-accordion-page.stache';
import container from './sp-accordion.stache';
import './accordion.less';

export const AccordionPageComponent = NavPageComponent.extend({
    tag: 'sp-sp-accordion-page',
    view: page
});

export const AccordionComponent = NavComponent.extend({
    tag: 'sp-accordion',
    view: container
});
