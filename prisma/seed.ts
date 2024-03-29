import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import userData from '../src/lib/testdata/User.json' assert { type: 'json' };
import userDetailsData from '../src/lib/testdata/UserDetails.json' assert { type: 'json' };
import sportData from '../src/lib/testdata/Sport.json' assert { type: 'json' };
import categoryData from '../src/lib/testdata/Category.json' assert { type: 'json' };
import sessionData from '../src/lib/testdata/Session.json' assert { type: 'json' };
import exerciseTemplateData from '../src/lib/testdata/ExerciseTemplate.json' assert { type: 'json' };
import exerciseData from '../src/lib/testdata/Exercise.json' assert { type: 'json' };
import liftingExercisePerformanceData from '../src/lib/testdata/LiftingExercisePerformance.json' assert { type: 'json' };
import cardioExercisePerformanceData from '../src/lib/testdata/CardioExercisePerformance.json' assert { type: 'json' };
import mealData from '../src/lib/testdata/Meal.json' assert { type: 'json' };
import dishData from '../src/lib/testdata/Dish.json' assert { type: 'json' };
import foodDiaryData from '../src/lib/testdata/FoodDiary.json' assert { type: 'json' };
import nutritionalValuesData from '../src/lib/testdata/NutritionalValues.json' assert { type: 'json' };
import reviewData from '../src/lib/testdata/Reviews.json' assert { type: 'json' };
import nutritionarticles from '../src/lib/testdata/articles.json' assert { type: 'json' };
import userSportData from '../src/lib/testdata/UserSport.json' assert { type: 'json' };
import trainingPlanData from '../src/lib/testdata/TrainingPlan.json' assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
	const salt = await bcrypt.genSalt(10);
	for (const user of userData) {
		await prisma.user.create({
			data: {
				id: user.id,
				email: user.email,
				username: user.username,
				image: Buffer.from(user.image, 'utf-8'),
				password: await bcrypt.hash(user.password, salt),
				authMethod: user.authMethod,
				token: user.token,
				verified: true
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

	for (const sport of sportData) {
		await prisma.sport.create({
			data: {
				id: sport.id,
				name: sport.name,
				description: sport.description,
				image: Buffer.from(sport.image, 'utf-8')
			}
		});
	}

	for (const userSport of userSportData) {
		await prisma.userSport.create({
			data: {
				userId: userSport.userId,
				sportId: userSport.sportId,
				active: userSport.active,
				assignedAt: new Date(userSport.assignedAt)
			}
		});
	}

	for (const trainingPlan of trainingPlanData) {
		await prisma.trainingPlan.create({
			data: {
				id: trainingPlan.id,
				name: trainingPlan.name,
				description: trainingPlan.description,
				image: Buffer.from(trainingPlan.image, 'utf-8'),
				sportId: trainingPlan.sportId
			}
		});
	}

	for (const session of sessionData) {
		await prisma.session.create({
			data: {
				id: session.id,
				userId: session.userId,
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
				image: Buffer.from(exerciseTemplate.image, 'utf-8')
			}
		});
	}

	for (const exercise of exerciseData) {
		await prisma.exercise.create({
			data: {
				id: exercise.id,
				sessionId: exercise.sessionId,
				exerciseTemplateId: exercise.exerciseTemplateId
			}
		});
	}

	for (const liftingExercisePerformance of liftingExercisePerformanceData) {
		await prisma.liftingExercisePerformance.create({
			data: {
				id: liftingExercisePerformance.id,
				repetitions: liftingExercisePerformance.repetitions,
				weight: liftingExercisePerformance.weight,
				exerciseId: liftingExercisePerformance.exerciseId
			}
		});
	}

	for (const cardioExercisePerformance of cardioExercisePerformanceData) {
		await prisma.cardioExercisePerformance.create({
			data: {
				id: cardioExercisePerformance.id,
				time: cardioExercisePerformance.time,
				distance: cardioExercisePerformance.distance,
				exerciseId: cardioExercisePerformance.exerciseId
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
