import connect from 'can-connect';

export default connect.behavior('transformParameters', function (base) {
    return {
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
