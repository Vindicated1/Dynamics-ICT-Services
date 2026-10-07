This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Admin authentication

The admin dashboard and enquiry list require an administrator account. There
is no public sign-up page. Admin passwords are stored as scrypt hashes, and
sign-in sessions use random, database-backed tokens in HTTP-only cookies.

Admin users can create, edit, publish, and unpublish projects from
`/admin/projects`. Published project entries are shared by the public Projects
and Portfolio pages and the homepage portfolio; choose the sections and
display order for each entry in the admin form. Admins can select project and
blog images from their device and upload them to Supabase Storage.

Contact submissions from `/contact` are saved as enquiries and can be reviewed
and assigned a status at `/admin/enquiries`. Blog articles can be drafted,
edited, featured, published, or unpublished at `/admin/blog`; published
articles appear on `/blog` and their corresponding article pages.

### Admin image uploads

Create a **public** bucket in Supabase Storage, then set these environment
variables in `.env` and in the deployment environment. Find the project URL and
service-role key in your Supabase project's API settings; keep the service-role
key private and do not prefix it with `NEXT_PUBLIC_`.

```dotenv
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_STORAGE_BUCKET=your-public-bucket-name
```

Set `SUPABASE_URL` and `SUPABASE_STORAGE_BUCKET` before starting the dev server
or building the app; Next.js uses them to allow optimization of bucket images.

The upload endpoint requires an active admin session and accepts JPEG, PNG,
WebP, AVIF, and GIF files up to 8 MB. Files are sent to the server and uploaded
to Supabase; the service-role key is never sent to the browser. No bucket CORS
configuration is needed for this server-side upload flow. Existing images
stored in `public/` continue to work, and previously saved S3 image URLs remain
valid when `S3_PUBLIC_BASE_URL` is still configured.

Supabase's Free plan currently includes 1 GB of file storage and 5 GB of
egress. Free projects may be paused after a week of inactivity. Check
[Supabase pricing](https://supabase.com/pricing) for current quotas and terms.

### Deploying to Vercel with Supabase

1. In the Supabase project, open **Connect** and copy the **Transaction pooler**
   connection string for the app's `DATABASE_URL`. Replace its password
   placeholder with the project's database password. Use the transaction
   pooler for Vercel's serverless runtime.
2. Copy the **Direct connection** string for `DIRECT_URL`, also replacing its
   password placeholder. Prisma uses this connection for schema migrations.
   If your local network cannot reach Supabase's direct endpoint, use its
   **Session pooler** connection for running migrations instead.
3. Apply migrations to the new database once, before deployment. In
   PowerShell, set `DIRECT_URL` in the current terminal session to the
   connection string, then run:

   ```powershell
   npx prisma migrate deploy
   ```

   This creates the schema and the initial sample project/blog content. It
   does not copy records from your local development database.
4. Create the production admin account using the hosted database connection.
   In PowerShell, set `DATABASE_URL` in the current terminal session to the
   transaction pooler string, then run `npm run admin:create` and follow the
   prompts. Do not put production passwords or connection strings in source
   control.
5. In Vercel, import `Vindicated1/Dynamics-ICT-Services` from GitHub. Vercel
   detects Next.js automatically. Add the following environment variables to
   **Production** (and Preview if needed):

   ```dotenv
   DATABASE_URL=your-supabase-transaction-pooler-connection-string
   SUPABASE_URL=https://your-project-ref.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   SUPABASE_STORAGE_BUCKET=admin-images
   ```

   Set `DIRECT_URL` in Vercel only if you intend to run migrations from a
   Vercel build or function; the recommended workflow above runs migrations
   manually before deployment. Never expose the service-role key with a
   `NEXT_PUBLIC_` variable.
6. Deploy from Vercel. The build reads the hosted database while rendering
   database-backed pages, so `DATABASE_URL` must be set before the first
   deployment. After deployment, sign in at `/admin/login` using the new
   production admin account.

For current connection-string details, see Supabase's
[Postgres connection guide](https://supabase.com/docs/guides/database/connecting-to-postgres)
and Vercel's [Git deployment guide](https://vercel.com/docs/git).

1. Configure `DATABASE_URL` in `.env`.
2. Start the local Prisma Postgres instance used by the development connection:

   ```bash
   npx prisma dev start default
   ```

   If the `default` instance has not been created yet, run `npx prisma dev`
   once to create it, then use the start command when it is stopped.
3. Apply the database migrations:

   ```bash
   npx prisma migrate deploy
   ```

4. Create an admin account from an interactive terminal. The password is
   entered without being echoed:

   ```bash
   npm run admin:create
   ```

5. Start the site and open `/admin/login`.

Run `npm run admin:create` again to add another administrator. To revoke an
account's access, set its `isActive` field to `false` in the database; existing
sessions for that account will no longer authorize admin access.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
