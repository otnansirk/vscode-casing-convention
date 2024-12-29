/**
 * Convert object to url params
 * 
 * @param objData object
 * @returns 
 */
export const object2UrlParams = (objData: object) => {
    const params = new URLSearchParams();
    Object.entries(objData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
        value.forEach(val => params.append(key, val));
    } else {
        params.append(key, value);
    }
    });
    return params.toString();    
};