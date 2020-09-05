import {createSelector} from "reselect"


const selectShop=state=>state.shop;

export const selectShopSelector=createSelector([selectShop],(shop)=>shop.collections)
