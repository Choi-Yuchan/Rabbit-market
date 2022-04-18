import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<LoginForm>({
    mode: "onBlur",
  });
  const onValid = (data: LoginForm) => {
    console.log("valid");
    setError("username", { message: "Taken username" });
  };
  const onInvalid = (errors: FieldErrors) => {
    console.error(errors);
  };

  setValue("username", "noname");
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="username"
      />
      <p>{errors.username?.message}</p>
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="email"
        className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
      />
      <p>{errors.email?.message}</p>
      <input
        {...register("password", {
          required: "Password is required",
        })}
        type="password"
        placeholder="password"
      />

      <input type="submit" value="Create" />
      {errors.errors?.message}
    </form>
  );
}
