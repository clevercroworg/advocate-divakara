This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

---

## Adding a New Blog Post (AI Prompt)

Whenever you want to add a new blog post using AI, copy and paste the following prompt into your chat window. Just replace the **[TOPIC]** and **[DESCRIPTION]** placeholders with your actual ideas.

> I want to add a new blog post to my Next.js website about **[TOPIC]**. 
> The description/focus of the article should be: **[DESCRIPTION]**
> 
> My blog uses a dynamic, centralized architecture. Please follow these exact steps to add the blog:
> 
> **1. Create the Content Component:**
> Create a new file in `src/data/blog-content/` (e.g., `src/data/blog-content/new-topic.tsx`). 
> - It must export a default React component returning a Fragment `<>...</>`.
> - Write rich, professional content inside it. 
> - Use standard HTML tags (`<p>`, `<ul>`, `<li>`), but for headings use this exact Tailwind styling: `<h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">`.
> - Use `lucide-react` icons (like `CheckCircle2`) for bullet points.
> 
> **2. Register the Blog in the Data Source:**
> Edit `src/data/blogs.tsx`.
> - Import the new component you just created at the top of the file.
> - Add a new object to the top of the `blogs` array that perfectly matches the `BlogPost` interface (slug, title, shortTitle, category, description, excerpt, author, datePublished, and the content component).
> - Make sure the SEO `description` and `excerpt` are compelling and professional.
> 
> **3. Strict Rule:**
> DO NOT attempt to modify `src/app/page.tsx`, `src/app/blog/page.tsx`, or `src/app/blog/[slug]/page.tsx`. The architecture is dynamic and these pages will automatically pull the new data from `blogs.tsx` once you register it.

---

### Existing Blog Topics (Already Published)
- **Property Document Verification Checklist**: A complete guide to verifying titles and documents before buying a house in Shivamogga.
- **Why Banks Reject Property Titles (LSR)**: Exploring the common legal pitfalls in Legal Scrutiny Reports (like missing mother deeds and unapproved layouts) that lead to loan rejections.
- **Understanding Encumbrance Certificates (EC) & Revenue Records**: A guide to reading and interpreting ECs, Khata, and RTC (Pahani) in Karnataka.
