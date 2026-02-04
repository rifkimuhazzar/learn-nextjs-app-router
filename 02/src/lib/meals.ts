import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

type Meal = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

type Meals = Meal[];

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all() as Meals;
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as
    | Meal
    | undefined;
}

export async function saveMeal(meal: any) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}-${Date.now()}.${extension}`;

  // buffer biasa -> buffer stream
  const bufferedImage = await meal.image.arrayBuffer();
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
  `).run(meal);
}
