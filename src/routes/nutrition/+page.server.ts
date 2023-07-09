import prisma from '$lib/prisma';
import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { initChartData, allmaxvalues } from './initChartData';
import type { Prisma } from '@prisma/client';
import { calcMaxCalories, calcOneWeekBefore } from './calc';
import { calcChartValues } from './calcChartValues';

// Load function
export const load = (async ({ cookies, locals }) => {
	const session = await locals.getSession();
	if (!session?.user) throw redirect(303, '/auth/sigin');
	const userID = cookies.get('user_id');
	
	const oneWeekBefore = calcOneWeekBefore();
	
	const responseUserDetails = await prisma.userDetails.findUnique({
		where: {
			userId: Number(userID)
		}
	});
	if (responseUserDetails == null || responseUserDetails == undefined) {
		throw error(404, { message: 'User not found' })
	}

	const responseFoodDiaryID = await prisma.foodDiary.findUnique({
		where: {
			userId: responseUserDetails?.userId
		}
	});
	if (responseFoodDiaryID == null || responseFoodDiaryID == undefined) {
		throw error(404, { message: 'User have no FoodDiary' })
	}

	// Chart data request
	const responseUsermeals = await prisma.meal.findMany({
		where: {
			day: {
				gt: oneWeekBefore
			},
			foodDiaryId: responseFoodDiaryID?.id
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
	const responsedaymeal = await prisma.meal.findMany({
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
	const responseAllDishes = await prisma.dish.findMany({
		include: {
			nutritionalValues: true
		}
	});
	

	if (responseAllDishes == null || responseAllDishes == undefined) {
		throw error(404, { message: 'No templates available' });
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
	createMealfromTemplate: async ({ request, cookies }) => {
		const day = new Date();

		const data = await request.formData();
		const selectDish = data.get('selectDish');
		let category = data.get('category')?.toString();
		if (category == undefined) {
			category = 'Snack';
		}
		const userID = cookies.get('user_id');
		const responseFoodDiaryID = await prisma.foodDiary.findUnique({
			where: {
				userId: Number(userID)
			}
		});
		const foodID = responseFoodDiaryID?.id ?? 0;

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
	createCustomMeal: async ({ request, cookies }) => {
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
		const userID = cookies.get('user_id');
		const responseFoodDiaryID = await prisma.foodDiary.findUnique({
			where: {
				userId: Number(userID)
			}
		});
		const foodID = responseFoodDiaryID?.id ?? 0;

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
			throw fail(403, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
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
			throw fail(400, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
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
			throw fail(404, { message: 'Meal not found' });
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
				throw fail(403, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
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
			throw fail(404, { message: 'Meal not found' });
		}
		console.log(mealid);
		const responseMeal = await prisma.meal.findUnique({
			where: {
				id: mealid
			}
		});
		if (responseMeal == null) {
			throw fail(404, { message: 'Meal not found' });
		}
		if (responseMeal.dishId != null) {
			try {
				await prisma.meal.delete({
					where: {
						id: mealid
					}
				});
			} catch (error) {
				throw fail(400, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
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
				throw fail(400, { message: 'Es gab leider ein Problem bitte versuchen sie es nochmal' });
			}
		}
	}
} satisfies Actions;
