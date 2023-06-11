

export type nutritionalValues = {
    id: number,
    energy: number,
    fat: number,
    saturatedFat: number,
    carbohydrates: number,
    sugar: number,
    protein: number,
    salt: number
}
export type Dish = {
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

export type userdetail = {
    userId: number;
    gender: string;
    weight: number;
    height: number;
};

export type allmaxValues = {
    calories: number,
    fat: number,
    sugar: number,
    salt: number;
    protein: number,
    carbohydrates: number,
    saturatedFat: number,
}

export type allValues =  {
    calories: number[],
    fat: number[],
    sugar: number[],
    salt: number[],
    protein: number[],
    carbohydrates: number[],
    saturatedFat: number[],
}
export type article = {
    id: number,
    link: string,
    title: string,
    text: string,
    imagePath: string

}
