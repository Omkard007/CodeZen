"use server";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
  adapter,
});

export const getTestimonials = async () => {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return testimonials;
};

export const createTestimonial = async (
  name: string,
  email: string,
  message: string
) => {
  await prisma.testimonial.create({
    data: {
      name,
      email,
      message,
    },
  });
};
