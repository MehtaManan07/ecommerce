import {SHOP_DATA} from '../../shared/ShopData'

const initialState = {
    collections: SHOP_DATA
}

export const shopReducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    default:
        return state
    }
}
