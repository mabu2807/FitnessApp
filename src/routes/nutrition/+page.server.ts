import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { initChartData, allmaxvalues } from './initChartData';
import type { Prisma } from '@prisma/client';
import { calcMaxCalories, calcOneWeekBefore } from './calc';
import { calcChartValues } from './calcChartValues';

// Load function
export const load = (async () => {
	let responseUserDetails;
	let responseUsermeals;
	let responsedaymeal;
	let responseFoodDiaryID;
	let responseAllDishes;
	const oneWeekBefore = calcOneWeekBefore();
	let foodDiary = 0;
	try {
		//all calories request
		responseUserDetails = await prisma.userDetails.findUnique({
			where: {
				userId: 2
			}
		});

		// FoodDiaryID request
		responseFoodDiaryID = await prisma.foodDiary.findUnique({
			where: {
				userId: responseUserDetails?.userId
			}
		});
		// FoodDiaryID check
		if (responseFoodDiaryID != undefined) {
			foodDiary = responseFoodDiaryID.id;
		}

		// Chart data request
		responseUsermeals = await prisma.meal.findMany({
			where: {
				day: {
					gt: oneWeekBefore
				},
				foodDiaryId: foodDiary
			},
			include: {
				foodDiary: true,
				customDish: {
					include: {
						nutritionalValues: true
					}
				},
				dish: {
					include: {
						nutritionalValues: true
					}
				}
			}
		});
		// Meal for card request
		const todayMidnight = new Date();
		todayMidnight.setHours(2, 0, 0, 0);
		responsedaymeal = await prisma.meal.findMany({
			where: {
				day: {
					gt: todayMidnight
				},
				foodDiaryId: responseFoodDiaryID?.id
			},

			include: {
				customDish: {
					include: {
						nutritionalValues: true
					}
				},
				dish: {
					include: {
						nutritionalValues: true
					}
				}
			}
		});
		// All dishes request for template modal
		responseAllDishes = await prisma.dish.findMany({
			include: {
				nutritionalValues: true
			}
		});
	} catch (error) {
		return fail(400, { message: 'Bad request' });
	}
	if (responseUserDetails == null) {
		return fail(404, { message: 'UserID does not exist' });
	}
	if (responseUsermeals == null) {
		return fail(404, { message: 'User have no meals' });
	}
	if (responseAllDishes == null) {
		return fail(404, { message: 'User have no dishes' });
	}
	if (responsedaymeal == null) {
		return fail(404, { message: 'User have no meals' });
	}
	if (responseFoodDiaryID == null) {
		return fail(404, { message: 'User have no food diary' });
	}
	const maxCalories = calcMaxCalories(responseUserDetails);

	const allValues = calcChartValues(responseUsermeals);
	const allmaxValues = allmaxvalues(responseUserDetails, maxCalories);

	const chartdata = initChartData(allmaxValues, allValues);

	return {
		chartdata: chartdata,
		mealforCard: responsedaymeal,
		allmaxValues: allmaxValues,
		allValues: allValues,
		allDishes: responseAllDishes
	};
}) satisfies PageServerLoad;

//-------------------------------Actions--------------------------------------------------------------

export const actions: Actions = {
	createMealfromTemplate: async ({ request }) => {
		const data = await request.formData();
		const selectDish = data.get('selectDish');
		let category = data.get('category')?.toString();
		if (category == undefined) {
			category = 'Snack';
		}
		const day = new Date();
		const foodID = 1;
		if (selectDish != null) {
			const meal: Prisma.MealUncheckedCreateInput = {
				dishId: Number(selectDish),
				day: day,
				time: category,
				foodDiaryId: foodID
			};
			try {
				await prisma.meal.create({
					data: meal
				});
			} catch (error) {
				return fail(400, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
			}
		}
	},
	createCustomMeal: async ({ request }) => {
		let imagePath = '';
		const data = await request.formData();
		const name = data.get('mealText')?.toString();
		const category = data.get('category')?.toString() ?? 'Snack';
		const calories = Number(data.get('calories'));
		const fat = Number(data.get('fat')) ?? 0;
		const sugar = Number(data.get('sugar')) ?? 0;
		const salt = Number(data.get('salt')) ?? 0;
		const protein = Number(data.get('protein')) ?? 0;
		const carbohydrates = Number(data.get('carbohydrates')) ?? 0;
		const saturatedFat = Number(data.get('saturatedFat')) ?? 0;
		const day = new Date();
		const foodID = 1;
		let selected_customDish = null;

		if (name == undefined || name == '' || name == null) {
			return fail(403, { message: 'Bitte geben Sie einen Namen ein' });
		}
		if (calories == undefined || calories == null) {
			return fail(403, { message: 'Bitte geben Sie eine Kalorienanzahl ein' });
		}
		switch (category) {
			case 'Abendessen':
				imagePath = 'dinner2.jpeg';
				break;
			case 'Frühstück':
				imagePath = 'breakfast2.webp';
				break;
			case 'Mittagessen':
				imagePath = 'lunch2.jpeg';
				break;
			default:
				imagePath = 'dinner2.jpeg';
				break;
		}
		const customDish: Prisma.customDishCreateInput = {
			name: name,
			imagePath: imagePath,
			nutritionalValues: {
				create: {
					energy: calories,
					fat: fat,
					sugar: sugar,
					salt: salt,
					protein: protein,
					carbohydrates: carbohydrates,
					saturatedFat: saturatedFat
				}
			}
		};
		await prisma.customDish.create({
			data: customDish
		});
		const lastcustomDish = await prisma.customDish.findMany();
		if (lastcustomDish.length != 0) {
			selected_customDish = lastcustomDish[lastcustomDish.length - 1];
		}
		if (selected_customDish == undefined) {
			return fail(403, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
		}
		const customMeal: Prisma.MealUncheckedCreateInput = {
			day: day,
			time: category,
			foodDiaryId: foodID,
			customDishId: selected_customDish.id
		};

		try {
			await prisma.meal.create({
				data: customMeal
			});
		} catch (error) {
			return fail(400, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
		}
	},

	updateMeal: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		const mealid = Number(data.get('Mealid'));
		const newName = data.get('Meal')?.toString() ?? '';
		const newCategory = data.get('category')?.toString() ?? 'Snack';
		const newCalories = Number(data.get('calories')) ?? 0;
		const newFat = Number(data.get('fat')) ?? 0;
		const newSugar = Number(data.get('sugar')) ?? 0;
		const newSalt = Number(data.get('salt')) ?? 0;
		const newProtein = Number(data.get('protein')) ?? 0;
		const newCarbohydrates = Number(data.get('carbohydrates')) ?? 0;
		const newSaturatedFat = Number(data.get('saturatedFat')) ?? 0;
		let imagePath = '';
		let selected_customDish = null;
		switch (newCategory) {
			case 'Abendessen':
				imagePath = 'dinner2.jpeg';
				break;
			case 'Frühstück':
				imagePath = 'breakfast2.webp';
				break;
			case 'Mittagessen':
				imagePath = 'lunch2.jpeg';
				break;
			default:
				imagePath = 'dinner2.jpeg';
				break;
		}

		const responseMeal = await prisma.meal.findUnique({
			where: {
				id: mealid
			}
		});
		if (responseMeal == null) {
			return fail(404, { message: 'Meal not found' });
		}
		if (responseMeal.dishId == null) {
			await prisma.meal.update({
				include: {
					dish: {
						include: {
							nutritionalValues: true
						}
					},
					customDish: {
						include: {
							nutritionalValues: true
						}
					}
				},
				where: {
					id: mealid
				},
				data: {
					time: newCategory,
					dish: undefined,
					customDish: {
						update: {
							name: newName,
							imagePath: imagePath,
							nutritionalValues: {
								update: {
									energy: newCalories,
									fat: newFat,
									sugar: newSugar,
									salt: newSalt,
									protein: newProtein,
									carbohydrates: newCarbohydrates,
									saturatedFat: newSaturatedFat
								}
							}
						}
					}
				}
			});
		}

		if (responseMeal.dishId != null) {
			const customDish: Prisma.customDishCreateInput = {
				name: newName,
				imagePath: imagePath,
				nutritionalValues: {
					create: {
						energy: newCalories,
						fat: newFat,
						sugar: newSugar,
						salt: newSalt,
						protein: newProtein,
						carbohydrates: newCarbohydrates,
						saturatedFat: newSaturatedFat
					}
				}
			};
			await prisma.customDish.create({
				data: customDish
			});
			const lastcustomDish = await prisma.customDish.findMany();
			if (lastcustomDish.length != 0) {
				selected_customDish = lastcustomDish[lastcustomDish.length - 1];
			}
			if (selected_customDish == undefined) {
				return fail(403, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
			}
			await prisma.meal.update({
				where: {
					id: mealid
				},
				data: {
					time: newCategory,
					dish: undefined,
					customDishId: selected_customDish.id
				}
			});
		}
	},
	deleteMeal: async ({ request }) => {
		const data = await request.formData();
		const mealid = Number(data.get('Mealid'));
		if (mealid == null || isNaN(mealid)) {
			return fail(404, { message: 'Meal not found' });
		}
		console.log(mealid);
		const responseMeal = await prisma.meal.findUnique({
			where: {
				id: mealid
			}
		});
		if (responseMeal == null) {
			return fail(404, { message: 'Meal not found' });
		}
		if (responseMeal.dishId != null) {
			try {
				await prisma.meal.delete({
					where: {
						id: mealid
					}
				});
			} catch (error) {
				return fail(400, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
			}
		}

		const customDishId = responseMeal.customDishId ?? 0;
		if (responseMeal.dishId == null) {
			try {
				await prisma.customDish.delete({
					where: {
						id: customDishId
					},
					include: {
						nutritionalValues: true
					}
				});
				await prisma.meal.delete({
					where: {
						id: mealid
					}
				});
			} catch (error) {
				return fail(400, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
			}
		}
	}
} satisfies Actions;
