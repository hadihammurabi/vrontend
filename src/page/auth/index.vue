<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { Form, Field, ErrorMessage } from 'vee-validate';

import { object, string } from 'yup';

const validationSchema = object({
  email: string().required().email(),
  password: string().required().min(8),
});

const onSubmit = (val: any) => {
  console.log(val);
};
</script>

<template>
  <h1>Login</h1>
  <Form :validation-schema="validationSchema" @submit="onSubmit">
    <div>
      <Field name="email" :as="InputText" />
      <div class="text-red">
        <ErrorMessage name="email"></ErrorMessage>
      </div>
    </div>

    <div class="mt-5">
      <Field name="password" :as="InputText" type="password" />
      <div class="text-red">
        <ErrorMessage name="password"></ErrorMessage>
      </div>
    </div>

    <div class="mt-5">
      <Button type="submit">Signin</Button>
    </div>
  </Form>

  <div>
    Don't have an account?
    <router-link to="/auth/register">Register Now!</router-link>
  </div>
</template>
