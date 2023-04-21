import { defineStore } from 'pinia';
import { store }  from '/@/store';


export const useAppStore = defineStore({
    id:"app",
    state:() => ({
    version: "1.0.0"
    }),
    getters:{

    },
    actions:{

    }
})

export const useAppStoreWithOut = () =>{
    return useAppStore(store);
}