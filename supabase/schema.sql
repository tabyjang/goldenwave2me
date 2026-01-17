-- Supabase Database Schema
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- Enable Row Level Security (RLS)
-- Supabase Auth already creates auth.users table

-- Create profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updated_at on profiles
DROP TRIGGER IF EXISTS profiles_updated_at ON public.profiles;
CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

-- ============================================
-- Optional: Posts table example
-- ============================================

-- CREATE TABLE IF NOT EXISTS public.posts (
--   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
--   author_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
--   title TEXT NOT NULL,
--   content TEXT,
--   published BOOLEAN DEFAULT FALSE,
--   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
--   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- );

-- ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- CREATE POLICY "Anyone can view published posts"
--   ON public.posts
--   FOR SELECT
--   USING (published = true);

-- CREATE POLICY "Users can view their own posts"
--   ON public.posts
--   FOR SELECT
--   USING (auth.uid() = author_id);

-- CREATE POLICY "Users can create their own posts"
--   ON public.posts
--   FOR INSERT
--   WITH CHECK (auth.uid() = author_id);

-- CREATE POLICY "Users can update their own posts"
--   ON public.posts
--   FOR UPDATE
--   USING (auth.uid() = author_id);

-- CREATE POLICY "Users can delete their own posts"
--   ON public.posts
--   FOR DELETE
--   USING (auth.uid() = author_id);
