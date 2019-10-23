import AnchorEffect from './anchors';
import { CLASSPREFIX } from '../enums/constants';
import { PERSISTENT_ANCHORS } from '../enums/side-effects';

export default class PersistentAnchors extends AnchorEffect {
    static formalName () {
        return PERSISTENT_ANCHORS;
    }

    static defaultConfig () {
        return {
            className: `${CLASSPREFIX}-persistent-anchors`
        };
    }

    getTransitionConfig () {
        return {
            disabled: true
        };
    }

    // offset value by which anchor size is changed
    // Applied only on select interaction
    getAnchorSizeonInteraction () {
        return 50;
    }
}
