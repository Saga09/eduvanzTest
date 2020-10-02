
export function safeReturn(object,index,defaultValue)
    {
        defaultValue = defaultValue == undefined ? false : defaultValue;
        if(object == undefined || index == undefined)
        {
            return defaultValue;
        }
        if(object[index] == undefined || object[index] === '')
        {
            return defaultValue;
        }
        return object[index];
}
export function isEmptyObject( obj ) {
    let name;

    for ( name in obj ) {
        return false;
    }
    return true;
}