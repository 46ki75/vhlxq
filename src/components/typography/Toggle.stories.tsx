import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from './Toggle'
import { CodeBlock } from '../code/CodeBlock'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Typography/Toggle',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Primary: Story = {
  args: {
    summary: 'Equation',
    children: (
      <div>
        Equation block objects are represented as children of paragraph blocks.
        They are nested within a rich text object and contain the following
        information within the equation property:
      </div>
    )
  }
}
const code = `
use reqwest::Error;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct Post {
    #[serde(rename = "userId")]
    user_id: u32,
    id: u32,
    title: String,
    body: String,
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let response = reqwest::get(url).await?;
    let posts: Vec<Post> = response.json().await?;

    for post in posts.iter().take(5) {
        println!("ID: {}, Title: {}", post.id, post.title);
    }

    Ok(())
}
`

export const Code: Story = {
  args: {
    summary: 'Code Snippets',
    children: (
      <div>
        <CodeBlock code={code} language={'rust'} />
      </div>
    )
  }
}
