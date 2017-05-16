import connect from 'can-connect';


/**
 * @module {Behavior} can/util/transformParameters transformParameters
 * @parent util/behaviors
 * @description Converts spectre-canjs parameters into a customized
 * rest service `getListData` parameter set. For example, if a rest server uses
 * a different filter syntax, implementing this syntax in a
 * `ParameterMap` with a custom serialize function will allow spectre-canjs
 * to work directly with the service.
 * @group transformParameters.props Properties
 */
export default connect.behavior('transformParameters', function (base) {
    return {
        /**
         * @property {Constructor} transformParameters.props.ParameterMap ParameterMap
         * @parent transformParameters.props
         */
        ParameterMap: null,
        getListData (params) {
            if (this.parametermap) {
                // transform spectre-canjs params into
                // something our server can understand
                params = new this.ParameterMap(params).serialize();
            }
            return base.getListData.call(this, params);
        }
    };
});
