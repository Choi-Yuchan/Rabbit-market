import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    console.log("valid");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
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
      <input
        {...register("email", {
          required: "Email is required",
        })}
        type="email"
        placeholder="email"
      />

      <input
        {...register("password", {
          required: "Password is required",
        })}
        type="password"
        placeholder="password"
      />

      <input type="submit" value="Create" />
    </form>
  );
}