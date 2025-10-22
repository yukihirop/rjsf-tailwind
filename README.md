# RJSF Tailwind

React JSON Schema Form components with Tailwind CSS styling.

## Installation

```bash
npm install rjsf-tailwind
# or
yarn add rjsf-tailwind
# or
pnpm add rjsf-tailwind
```

## Usage

```tsx
import { Form, Theme } from 'rjsf-tailwind'

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name"
    },
    email: {
      type: "string",
      title: "Email",
      format: "email"
    }
  }
}

function MyForm() {
  return (
    <Form
      schema={schema}
      theme={Theme}
      onSubmit={(data) => console.log(data)}
    />
  )
}
```

## Components

### RJSF Components
- `Form` - Main form component
- `Theme` - Tailwind CSS theme configuration
- `Templates` - Custom templates
- `Widgets` - Custom widgets
- Various field templates and widgets

### UI Components
- `Button` - Styled button component
- `DropdownMenu` - Dropdown menu component

### Utility Components
- `Icons` - Icon components
- `JsonEditor` - JSON editor component
- `ThemeProvider` - Theme provider component

## Requirements

- React 18+
- Tailwind CSS
- @rjsf/core

## License

MIT
