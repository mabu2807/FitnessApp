type nutritionalValues = {
    id: number,
    energy: number,
    fat: number,
    saturatedFat: number,
    carbohydrates: number,
    sugar: number,
    protein: number,
    salt: number
}
type Dish = {
    id: number,
    name: string,
    imagePath: string,
    nutritionalValues: nutritionalValues,
    nutritionalValuesId: number
}
export type Meal = {

    id: number,
    foodDiaryId: number,
    day: Date,
    time: string,
    dish: Dish,
    dishId: number
    
}
// type FoodDiary ={
//     id: number,
//     userId: number,
//    }

export type userdetail = {
    userId: number;
    gender: string;
    weight: number;
    height: number;
};
