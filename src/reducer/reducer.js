import data from '../data/data';
const initialState = {
    data,
    catch: false,
    searchData:data
}
const reducer = (state = initialState, action) => {
   
    if (action.type === 'search') {
       
            
        let d = state.searchData.filter(d => d.name.toLocaleLowerCase().indexOf(action.v.toLocaleLowerCase()) > -1);
        return {
            ...state,
            data: d
                }
    }
    return state;
}
export default reducer;