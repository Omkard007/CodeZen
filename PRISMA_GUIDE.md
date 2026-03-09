# Prisma Development Guide for CodeZen

This document serves as a comprehensive reference for Prisma ORM integration within the CodeZen project. Use this guide for managing the database schema, connectivity, and data operations.

---

## 1. Quick Copy Commands
Run these commands from the project root.

### Schema Management
| Action | Command |
| :--- | :--- |
| **Generate Client** | `npx prisma generate` |
| **Create Migration** | `npx prisma migrate dev --name init` |
| **Push Schema** | `npx prisma db push` |
| **Open Studio** | `npx prisma studio` |
| **Seed Database** | `npx prisma db seed` |

---

## 2. How to Create a New Table
Follow these steps to add a new model/table to the database.

### Step 1: Update `prisma/schema.prisma`
Add your new model to the end of the file.
```prisma
model NewTable {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  createdAt DateTime @default(now())
}
```

### Step 2: Create a Migration
Run this command to create the table in your database and update the Prisma Client.
```bash
npx prisma migrate dev --name add_new_table
```

### Step 3: Verify in Studio
Open the visual editor to see your new table.
```bash
npx prisma studio
```

---

## 3. Overview
CodeZen uses **Prisma ORM** with a **PostgreSQL** database (via `@prisma/adapter-pg`).

- **Schema Location:** `prisma/schema.prisma`
- **Client Location:** `app/generated/prisma`
- **Database URL:** Defined in `.env` as `DATABASE_URL`

---

## 4. Connectivity & Initialization
CodeZen uses a custom initialization pattern to support serverless environments and PostgreSQL adapters.

### Client Instance (`lib/actions.ts`)
```typescript
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});
```

---

## 5. Schema Definition (`schema.prisma`)
The current schema includes a `Testimonial` model:

```prisma
model Testimonial {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
}
```

### Key Field Types:
- `Int`: Integer
- `String`: Text
- `DateTime`: Date and time
- `@id`: Primary key
- `@default(autoincrement())`: Automatically increments the ID
- `@default(now())`: Sets current timestamp on creation

---

## 6. Common Data Operations (Uses)

### Create Record
```typescript
await prisma.testimonial.create({
  data: {
    name: "User Name",
    email: "user@example.com",
    message: "Great platform!",
  },
});
```

### Read Multiple Records
```typescript
const testimonials = await prisma.testimonial.findMany({
  orderBy: {
    createdAt: "desc",
  },
});
```

### Update Record
```typescript
await prisma.testimonial.update({
  where: { id: 1 },
  data: { message: "Updated feedback" },
});
```

---

