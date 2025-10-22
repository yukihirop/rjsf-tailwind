// Example usage of rjsf-tailwind library

import React from 'react'
import { Form, Theme, Button, DropdownMenu } from 'rjsf-tailwind'

// Example schema
const exampleSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      description: "Enter your full name"
    },
    email: {
      type: "string",
      title: "Email",
      format: "email",
      description: "Enter your email address"
    },
    age: {
      type: "number",
      title: "Age",
      minimum: 0,
      maximum: 120
    },
    country: {
      type: "string",
      title: "Country",
      enum: ["Japan", "United States", "Canada", "United Kingdom", "Australia"]
    },
    newsletter: {
      type: "boolean",
      title: "Subscribe to newsletter",
      default: false
    }
  },
  required: ["name", "email"]
}

// Example form data
const exampleFormData = {
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  country: "Japan",
  newsletter: true
}

function ExampleForm() {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">RJSF Tailwind Example</h1>

      <Form
        schema={exampleSchema}
        formData={exampleFormData}
        theme={Theme}
        onSubmit={handleSubmit}
        showErrorList="top"
      />

      <div className="mt-6 flex gap-4">
        <Button variant="default">Default Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>
    </div>
  )
}

export default ExampleForm
