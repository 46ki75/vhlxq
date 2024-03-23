import type { Meta, StoryObj } from '@storybook/react'

import { Tabs, Tab } from './Tabs'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Tabs/Tabs',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  render: () => (
    <Tabs>
      <Tab label='JavaScript'>
        <h1>JavaScript (JS)</h1>

        <p>
          JavaScript is a high-level, interpreted programming language known for
          its role in web development. Initially designed to create dynamic web
          pages, it has grown to become a versatile language used both on the
          client-side and server-side.
        </p>

        <h2>Key Features</h2>

        <ul>
          <li>
            <strong>Dynamic Typing</strong>: JavaScript uses dynamic typing,
            allowing variables to hold any type of data at any time.
          </li>
          <li>
            <strong>First-Class Functions</strong>: Functions in JavaScript are
            treated as first-class citizens, meaning they can be assigned to
            variables, passed as arguments, and returned from other functions.
          </li>
          <li>
            <strong>Prototype-based Object Orientation</strong>: Unlike
            classical object-oriented languages, JavaScript uses prototypes for
            inheritance.
          </li>
          <li>
            <strong>Asynchronous Programming</strong>: With features like
            Promises and async/await, JavaScript handles asynchronous operations
            smoothly, making it ideal for tasks that don&apos;t need to complete
            immediately, such as web requests.
          </li>
          <li>
            <strong>Event-driven Programming</strong>: JavaScript is well-suited
            for developing interactive web applications due to its event-driven
            model.
          </li>
          <li>
            <strong>Cross-platform</strong>: JavaScript runs on nearly every
            platform, making it a universal choice for web development.
          </li>
        </ul>

        <h2>Common Use Cases</h2>

        <ul>
          <li>Web development (front-end and back-end with Node.js)</li>
          <li>Mobile app development (with frameworks like React Native)</li>
          <li>Game development</li>
          <li>
            Desktop application development (with frameworks like Electron)
          </li>
        </ul>
      </Tab>
      <Tab label='TypeScript'>
        <h1>TypeScript</h1>

        <p>
          TypeScript is an open-source language developed and maintained by
          Microsoft. It is a superset of JavaScript, adding optional static
          typing and other features to the language, making it more robust and
          easier to maintain for large-scale projects.
        </p>

        <h2>Key Features</h2>

        <ul>
          <li>
            <strong>Static Type Checking</strong>: TypeScript provides optional
            static typing, allowing developers to catch errors at compile time.
          </li>
          <li>
            <strong>Class and Interface Support</strong>: Offers full support
            for classes and interfaces, aligning it closely with object-oriented
            programming paradigms.
          </li>
          <li>
            <strong>Advanced Type System</strong>: TypeScript&apos;s type system
            includes enums, tuples, generics, and union/intersection types,
            enabling more precise code structuring and validation.
          </li>
          <li>
            <strong>Compatibility with JavaScript</strong>: Being a superset of
            JavaScript, any valid JavaScript code is also valid TypeScript code.
            This makes migration easier for existing JavaScript projects.
          </li>
          <li>
            <strong>Tooling Support</strong>: Excellent integration with code
            editors (like Visual Studio Code) for better autocompletion, code
            navigation, and refactoring support.
          </li>
          <li>
            <strong>Gradual Adoption</strong>: You can adopt TypeScript
            gradually, starting with simple type annotations and evolving
            towards more sophisticated types and features.
          </li>
        </ul>

        <h2>Common Use Cases</h2>

        <ul>
          <li>Large-scale application development</li>
          <li>Projects where maintainability and scalability are a priority</li>
          <li>
            Development environments that benefit from enhanced tooling support
          </li>
          <li>
            Teams looking for a typed superset of JavaScript to improve code
            quality and consistency
          </li>
        </ul>
      </Tab>
      <Tab label='Rust'>
        <h1>Rust</h1>

        <p>
          Rust is a multi-paradigm programming language focused on performance
          and safety, particularly safe concurrency. It&apos;s designed to be a
          &quot;systems programming language&quot; that is suitable for critical
          software, including operating systems and game engines, with a strong
          emphasis on zero-cost abstractions, memory safety, and concurrency.
        </p>

        <h2>Key Features</h2>

        <ul>
          <li>
            <strong>Memory Safety Without Garbage Collection</strong>: Rust
            achieves memory safety without needing a garbage collector, through
            its ownership system, which manages memory through a set of rules
            that the compiler checks at compile time.
          </li>
          <li>
            <strong>Concurrency Without Data Races</strong>: Rust&apos;s type
            system and ownership model ensure that data races cannot happen,
            making concurrent programming safer and easier.
          </li>
          <li>
            <strong>Zero-cost Abstractions</strong>: Rust provides abstractions
            that have zero runtime cost, meaning you can use higher-level
            programming constructs without a performance penalty.
          </li>
          <li>
            <strong>Cargo</strong>: Rust&apos;s package manager and build
            system, making
            <strong>Cargo</strong>: Rust&apos;s package manager and build
            system, making it easy to share libraries and ensure that projects
            build reproducibly.
          </li>
          <li>
            <strong>Rich Type System and Pattern Matching</strong>: Offers
            advanced features like algebraic data types (enums in Rust) and
            pattern matching, which facilitate writing concise and expressive
            code.
          </li>
          <li>
            <strong>Immutability by Default</strong>: Variables in Rust are
            immutable by default, encouraging a functional programming style and
            making code easier to reason about.
          </li>
        </ul>

        <h2>Common Use Cases</h2>

        <ul>
          <li>Systems programming</li>
          <li>Web assembly applications</li>
          <li>Embedded systems</li>
          <li>Game development</li>
          <li>Network services</li>
          <li>Cross-platform development</li>
        </ul>

        <img src='https://source.unsplash.com/random' alt='' />
      </Tab>
    </Tabs>
  )
}
