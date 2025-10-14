"use server";

import { ZodError } from "zod";

import { headers } from "next/headers";

import { redirect } from "next/navigation";

import { auth } from "@/auth";

import { AUTH_ERROR, FormSchema } from "@/app/_features/authentication";

const redirectUserToDashboard = () => {
  redirect("/dashboard/monitors");
};

export const authenticate = async (_state: unknown, data: FormData) => {
  const validatedResult = FormSchema.safeParse({
    email: data.get("email"),
    password: data.get("password"),
  });

  try {
    if (!validatedResult.success) {
      throw validatedResult.error;
    }

    const { email, password } = validatedResult.data;

    const response = await auth.api.signUpEmail({
      body: {
        name: "",
        email,
        password,
      },
      asResponse: true,
    });

    if (!response.ok) {
      throw new Error();
    }

    await response.json();
  } catch (error) {
    console.error({ error });

    if (error instanceof ZodError) {
      return error.issues[0].message;
    }

    return AUTH_ERROR.SIGN_UP_FAILED;
  }

  return redirectUserToDashboard();
};

export const signInUser = async (_state: unknown, data: FormData) => {
  const validatedResult = FormSchema.safeParse({
    email: data.get("email"),
    password: data.get("password"),
  });

  try {
    if (!validatedResult.success) {
      throw validatedResult.error;
    }

    const { email, password } = validatedResult.data;

    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      asResponse: true,
    });

    if (!response.ok) {
      throw new Error();
    }

    await response.json();
  } catch (error) {
    console.error({ error });

    if (error instanceof ZodError) {
      return error.issues[0].message;
    }

    return AUTH_ERROR.SIGN_IN_FAILED;
  }

  return redirectUserToDashboard();
};

export const signOutUser = async () => {
  try {
    const response = await auth.api.signOut({
      headers: headers(),
      asResponse: true,
    });

    if (!response.ok) {
      throw new Error();
    }

    await response.json();
  } catch (error) {
    console.error(error);

    return AUTH_ERROR.SIGN_OUT_FAILED;
  }

  redirect("/signin");
};
