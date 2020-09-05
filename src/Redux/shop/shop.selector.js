import {createSelector} from "reselect"


const selectShop=state=>state.shop;

export const selectShopSelector=createSelector([selectShop],(shop)=>shop.collections)


export const selectCollection=collectionUrlParam=>createSelector([selectShopSelector],collections=>collections[collectionUrlParam])


export const selectCollectionsForPreview=(createSelector([selectShopSelector],(collections)=>Object.keys(collections).map(key=>collections[key])))