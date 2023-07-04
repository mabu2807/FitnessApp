import { PrismaClient } from '@prisma/client';
import userData from '../src/lib/testdata/User.json' assert { type: 'json' };
import userDetailsData from '../src/lib/testdata/UserDetails.json' assert { type: 'json' };
import trainingPlanData from '../src/lib/testdata/Trainingplan.json' assert { type: 'json' };
import userTrainingPlanData from '../src/lib/testdata/UserTrainingPlan.json' assert { type: 'json' };
import categoryData from '../src/lib/testdata/Category.json' assert { type: 'json' };
import sessionTemplateData from '../src/lib/testdata/SessionTemplate.json' assert { type: 'json' };
import sessionData from '../src/lib/testdata/Session.json' assert { type: 'json' };
import exerciseTemplateData from '../src/lib/testdata/ExerciseTemplate.json' assert { type: 'json' };
import exerciseData from '../src/lib/testdata/Exercise.json' assert { type: 'json' };
import liftingExercisePerformanceData from '../src/lib/testdata/LiftingExercisePerformance.json' assert { type: 'json' };
import mealData from '../src/lib/testdata/Meal.json' assert { type: 'json' };
import dishData from '../src/lib/testdata/Dish.json' assert { type: 'json' };
import foodDiaryData from '../src/lib/testdata/FoodDiary.json' assert { type: 'json' };
import nutritionalValuesData from '../src/lib/testdata/NutritionalValues.json' assert { type: 'json' };
import reviewData from '../src/lib/testdata/Reviews.json' assert { type: 'json' };
import nutritionarticles from '../src/lib/testdata/articles.json' assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
	for (const user of userData) {
		await prisma.user.create({
			data: {
				id: user.id,
				email: user.email,
				username: user.username,
				image: Buffer.from(user.image, "utf-8"),
				password: user.password,
				authMethod: user.authMethod,
				token: user.token
			}
		});
	}

	for (const userDetails of userDetailsData) {
		await prisma.userDetails.create({
			data: {
				userId: userDetails.userId,
				gender: userDetails.gender,
				weight: userDetails.weight,
				height: userDetails.height,
				dob: new Date(userDetails.dob),
				goal: userDetails.goal,
				activityLevel: userDetails.activityLevel
			}
		});
	}

	for (const category of categoryData) {
		await prisma.category.create({
			data: {
				id: category.id,
				name: category.name,
				description: category.description,
				imagePath: category.imagePath
			}
		});
	}

	for (const review of reviewData) {
		await prisma.review.create({
			data: {
				id: review.id,
				text: review.text,
				userId: review.userId
			}
		});
	}

	for (const trainingPlan of trainingPlanData) {
		await prisma.trainingPlan.create({
			data: {
				id: trainingPlan.id,
				title: trainingPlan.title,
				description: trainingPlan.description,
				imagePath: trainingPlan.imagePath,
				categoryId: trainingPlan.categoryId
			}
		});
	}

	for (const userTrainingPlan of userTrainingPlanData) {
		await prisma.userTrainingPlan.create({
			data: {
				userId: userTrainingPlan.userId,
				trainingPlanId: userTrainingPlan.trainigPlanId,
				active: userTrainingPlan.active
			}
		});
	}

	for (const sessionTemplate of sessionTemplateData) {
		await prisma.sessionTemplate.create({
			data: {
				id: sessionTemplate.id,
				description: sessionTemplate.description,
				categoryId: sessionTemplate.categoryId,
				trainingPlans: {
					connect: [{ id: sessionTemplate.trainingPlanId }]
				}
			}
		});
	}

	for (const session of sessionData) {
		await prisma.session.create({
			data: {
				id: session.id,
				userId: session.userId,
				sessionTemplateId: session.sessionTemplateId,
				date: new Date(session.date)
			}
		});
	}

	for (const exerciseTemplate of exerciseTemplateData) {
		await prisma.exerciseTemplate.create({
			data: {
				id: exerciseTemplate.id,
				title: exerciseTemplate.title,
				description: exerciseTemplate.description,
				sessionTemplates: {
					connect: [{ id: exerciseTemplate.sessionTemplateId }]
				}
			}
		});
	}

	for (const exercise of exerciseData) {
		await prisma.exercise.create({
			data: {
				id: exercise.id,
				sessionId: exercise.sessionId,
				exerciseTemplateId: exercise.exerciseTemplateId,
				title: exercise.title
			}
		});
	}

	for (const liftingExercisePerformance of liftingExercisePerformanceData) {
		await prisma.liftingExercisePerformance.create({
			data: {
				id: liftingExercisePerformance.id,
				set: liftingExercisePerformance.set,
				repetitions: liftingExercisePerformance.repetitions,
				weight: liftingExercisePerformance.weight,
				exerciseId: liftingExercisePerformance.exerciseId
			}
		});
	}

	for (const foodDiary of foodDiaryData) {
		await prisma.foodDiary.create({
			data: {
				id: foodDiary.id,
				userId: foodDiary.userId
			}
		});
	}

	for (const nutritionalValues of nutritionalValuesData) {
		await prisma.nutritionalValues.create({
			data: {
				id: nutritionalValues.id,
				energy: nutritionalValues.energy,
				fat: nutritionalValues.fat,
				saturatedFat: nutritionalValues.saturedFat,
				carbohydrates: nutritionalValues.carbohydrates,
				sugar: nutritionalValues.sugar,
				protein: nutritionalValues.protein,
				salt: nutritionalValues.salt
			}
		});
	}

	for (const dish of dishData) {
		await prisma.dish.create({
			data: {
				id: dish.id,
				name: dish.name,
				imagePath: dish.imagePath,
				nutritionalValuesId: dish.nutritionalValuesId
			}
		});
	}

	for (const meal of mealData) {
		await prisma.meal.create({
			data: {
				id: meal.id,
				foodDiaryId: meal.foodDiaryId,
				day: new Date(),
				time: meal.time,
				dishId: meal.dishId
			}
		});
	}
	for (const article of nutritionarticles) {
		await prisma.nutritionTippsArticles.create({
			data: {
				id: article.id,
				title: article.title,
				imagePath: article.imagePath,
				link: article.link,
				text: article.Text
			}
		});
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
