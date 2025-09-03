# School Management System MVP Todo

## Overview
Create a Next.js application with two main pages for school data management using MySQL database.

## Database Schema
- Table: schools
- Fields: id (int AUTO_INCREMENT), name (text), address (text), city (text), state (text), contact (number), image (text), email_id (text)

## Files to Create/Modify

### 1. Database & API Setup
- `lib/db.ts` - MySQL database connection configuration
- `pages/api/schools.ts` - API endpoint for CRUD operations on schools
- `pages/api/upload.ts` - API endpoint for image upload handling

### 2. Components
- `components/SchoolForm.tsx` - Form component with react-hook-form validation
- `components/SchoolCard.tsx` - Card component to display individual school
- `components/Layout.tsx` - Common layout wrapper

### 3. Pages
- `pages/addSchool.tsx` - Form page to add new schools
- `pages/showSchools.tsx` - Display page showing all schools in grid layout
- `pages/index.tsx` - Home page with navigation

### 4. Utilities
- `lib/validations.ts` - Form validation schemas
- `lib/types.ts` - TypeScript interfaces

## Key Features
1. Responsive design for mobile and desktop
2. Form validation (email, required fields)
3. Image upload to schoolImages folder
4. E-commerce style school listing
5. MySQL integration

## Implementation Priority
1. Setup database connection and API routes
2. Create form with validation
3. Implement image upload
4. Create school display page
5. Add responsive styling