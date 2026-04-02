import { defineStore } from "pinia";
import bases from "../data/bases.json"
import creamers from "../data/creamers.json"
import syrups from "../data/syrups.json"
import tempretures from "../data/tempretures.json"
import { BeverageType } from "../types/beverage";



export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    base: bases,
    creamer: creamers,
    syrup: syrups,
    currentTemp: tempretures[0],
    currentBase: bases[0],
    currentSyrup: syrups[0],
    currentCreamer: creamers[0],
    nameId: "",
    bevList: [] as BeverageType[]
  }),

  actions: {
    makeBeverage() {
      const newId = this.bevList.length + 1;
      const beverage: BeverageType = {
        id: (newId).toString(),
        name: this.nameId.trim(),
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup
      }
      this.bevList.push(beverage);
      this.nameId = "";
    },
    showBeverage(bevId: string) {
      const newBev = this.bevList.find(bev => bev.id === bevId)
      if (newBev) {
        this.currentTemp = newBev.temp;
        this.currentBase = newBev.base;
        this.currentCreamer = newBev.creamer;
        this.currentSyrup = newBev.syrup;
      }
    },
  },
  persist: true,
});
