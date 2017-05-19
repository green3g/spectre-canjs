import {NavPageComponent} from '../nav-container/nav-container';
import NavComponent from '../nav-container/nav-container';
import page from './accordion-page.stache';
import container from './accordion-container.stache';
import './accordion.less';

export const AccordionPageComponent = NavPageComponent.extend({
    tag: 'accordion-page',
    view: page
});

export const AccordionComponent = NavComponent.extend({
    tag: 'accordion-container',
    view: container
});
