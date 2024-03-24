export const seed = [
  {
    type: 'heading_1',
    rich_text: [
      {
        text: 'Reactの特徴',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  { type: 'paragraph', rich_text: [], caption: [], children: [] },
  {
    type: 'paragraph',
    rich_text: [
      {
        text: 'Reactを使用した基本的なコードスニペットの一例を以下に示します：',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'code',
    rich_text: [
      {
        text: 'import React from \'react\';\n\nclass Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n\nfunction App() {\n  return <Welcome name="World" />;\n}\n\nexport default App;\n',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: [],
    language: 'javascript'
  },
  {
    type: 'paragraph',
    rich_text: [
      {
        text: '上記のコードでは、',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      },
      {
        text: 'Welcome',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'default',
        link: null
      },
      {
        text: 'という名前のReactコンポーネントを作成しています。このコンポーネントは、',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      },
      {
        text: 'render',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'default',
        link: null
      },
      {
        text: 'メソッド内でHTMLタグのように見えるJSXを使用して、ユーザーインターフェースを返しています。',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      },
      {
        text: 'Welcome',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'default',
        link: null
      },
      {
        text: 'コンポーネントは、',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      },
      {
        text: 'this.props.name',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'default',
        link: null
      },
      {
        text: 'を使用して',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      },
      {
        text: 'name',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'default',
        link: null
      },
      {
        text: 'プロパティを表示します。',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'paragraph',
    rich_text: [
      {
        text: 'App',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'default',
        link: null
      },
      {
        text: '関数は、',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      },
      {
        text: 'Welcome',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'default',
        link: null
      },
      {
        text: 'コンポーネントを使用し、その',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      },
      {
        text: 'name',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'default',
        link: null
      },
      {
        text: 'プロパティに',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      },
      {
        text: '"World"',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'default',
        link: null
      },
      {
        text: 'という値を渡します。最後に、',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      },
      {
        text: 'App',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: true,
        color: 'default',
        link: null
      },
      {
        text: '関数をエクスポートして、他のファイルからインポートできるようにします。',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  { type: 'paragraph', rich_text: [], caption: [], children: [] },
  { type: 'paragraph', rich_text: [], caption: [], children: [] },
  {
    type: 'image',
    rich_text: [],
    caption: [],
    children: [],
    url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/81a75787-a812-4e6c-ac7f-03fa8025f38b/817dc8bf-0a19-42e0-a43c-b791a4fd23ab/image_%282%29.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240324T140825Z&X-Amz-Expires=3600&X-Amz-Signature=709730abf126e85a6c686735be2c6ab07f730d3aff34f9f002645c2c06ddd0bf&X-Amz-SignedHeaders=host&x-id=GetObject'
  },
  {
    type: 'heading_2',
    rich_text: [
      {
        text: 'Reactの特徴',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'paragraph',
    rich_text: [
      {
        text: 'Reactは以下のような特徴を持っています：',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'ul',
    rich_text: [],
    caption: [],
    children: [
      {
        type: 'bulleted_list_item',
        rich_text: [
          {
            text: 'コンポーネントベース',
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          },
          {
            text: '：Reactはコンポーネントベースのアーキテクチャを採用しています。各コンポーネントは独立して動作し、再利用可能です。これにより、開発者はコードの再利用性を向上させ、保守性を高めることができます。',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      },
      {
        type: 'bulleted_list_item',
        rich_text: [
          {
            text: '仮想DOM',
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          },
          {
            text: '：Reactは仮想DOM (Virtual DOM) を使用します。これにより、実際の画面更新が必要な場合のみDOMの更新が行われ、パフォーマンスが向上します。',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      },
      {
        type: 'bulleted_list_item',
        rich_text: [
          {
            text: 'JSX',
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          },
          {
            text: '：ReactはJavaScript XML（JSX）という特殊な構文を使用します。これにより、JavaScript内でHTMLのような構文を使うことができ、コンポーネントの見た目を直感的に理解しやすくなります。',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      }
    ]
  },
  { type: 'divider', rich_text: [], caption: [], children: [] },
  {
    type: 'heading_2',
    rich_text: [
      {
        text: 'Reactの基本的な利用方法',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'ol',
    rich_text: [],
    caption: [],
    children: [
      {
        type: 'numbered_list_item',
        rich_text: [
          {
            text: 'コンポーネントの作成',
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          },
          {
            text: '：Reactでは、UIの一部を表現するコンポーネントを作成します。コンポーネントはクラスまたは関数で宣言することができます。',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      },
      {
        type: 'numbered_list_item',
        rich_text: [
          {
            text: 'propsの利用',
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          },
          {
            text: '：コンポーネントに情報を渡すために、propsを使用します。これは親コンポーネントから子コンポーネントへデータを渡すための手段です。',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      },
      {
        type: 'numbered_list_item',
        rich_text: [
          {
            text: 'stateの利用',
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          },
          {
            text: '：コンポーネント内部で管理するデータはstateとして管理します。stateが更新されると、コンポーネントは再レンダリングされます。',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      },
      {
        type: 'numbered_list_item',
        rich_text: [
          {
            text: 'イベントハンドリング',
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          },
          {
            text: '：Reactでは、ユーザーのアクションに対応するためのイベントハンドラを設定することができます。これにより、ユーザーのインタラクションに応じてアプリケーションの状態を制御することができます。',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      }
    ]
  },
  {
    type: 'paragraph',
    rich_text: [
      {
        text: '以上がReactの基本的な特徴と利用方法です。これらを理解し、適切に活用することで、効率的に高品質なWebアプリケーションを開発することができます。',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'quote',
    rich_text: [
      {
        text: '"学ぶことは成長すること。コードは詩であり、それぞれの開発者は独自の詩を書く。"',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  { type: 'paragraph', rich_text: [], caption: [], children: [] },
  {
    type: 'toggle',
    rich_text: [
      {
        text: 'Reactのインストール方法',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: [
      {
        type: 'paragraph',
        rich_text: [
          {
            text: 'Reactを使用するためにはまずその環境を設定する必要があります。Node.jsとnpmがインストールされていることを確認し、次にnpmを使ってCreate React Appをインストールします。これは新しいReactアプリケーションを作成するための公式ツールチェーンです。',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      },
      {
        type: 'paragraph',
        rich_text: [
          {
            text: '以下に、Reactをインストールする手順を示します：',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      },
      {
        type: 'ol',
        rich_text: [],
        caption: [],
        children: [
          {
            type: 'numbered_list_item',
            rich_text: [
              {
                text: 'Node.jsとnpmのインストール',
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              },
              {
                text: '：まず、開発環境にNode.jsとnpmがインストールされていることを確認してください。Node.jsをインストールすると、npmも自動的にインストールされます。インストールは',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              },
              {
                text: 'Node.jsの公式サイト',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: 'https://nodejs.org/'
              },
              {
                text: 'から行うことができます。',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              }
            ],
            caption: [],
            children: []
          },
          {
            type: 'numbered_list_item',
            rich_text: [
              {
                text: 'Create React Appのインストール',
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              },
              {
                text: '：次に、npmを使ってCreate React Appをインストールします。これは、新しいReactアプリケーションを作成するための公式ツールチェーンです。次のコマンドを実行してCreate React Appをインストールします：',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              },
              {
                text: 'npm install -g create-react-app',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: 'default',
                link: null
              }
            ],
            caption: [],
            children: []
          },
          {
            type: 'numbered_list_item',
            rich_text: [
              {
                text: '新しいReactアプリケーションの作成',
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              },
              {
                text: '：Create React Appがインストールされたら、次のコマンドを実行して新しいReactアプリケーションを作成します：',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              },
              {
                text: 'npx create-react-app your-app-name',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: 'default',
                link: null
              },
              {
                text: ' （',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              },
              {
                text: 'your-app-name',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: 'default',
                link: null
              },
              {
                text: 'はあなたが作成するアプリケーションの名前に置き換えてください）',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              }
            ],
            caption: [],
            children: []
          },
          {
            type: 'numbered_list_item',
            rich_text: [
              {
                text: 'アプリケーションの起動',
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              },
              {
                text: '：作成したReactアプリケーションを起動するには、次のコマンドを実行します：',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              },
              {
                text: 'cd your-app-name',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: 'default',
                link: null
              },
              {
                text: ' そして ',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
                link: null
              },
              {
                text: 'npm start',
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: 'default',
                link: null
              }
            ],
            caption: [],
            children: []
          }
        ]
      },
      {
        type: 'paragraph',
        rich_text: [
          {
            text: 'これにより、Reactアプリケーションが起動し、ブラウザで',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          },
          {
            text: 'http://localhost:3000',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: true,
            color: 'default',
            link: null
          },
          {
            text: 'にアクセスすることで表示を確認できます。',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      },
      {
        type: 'code',
        rich_text: [
          {
            text: 'npm install react',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: [],
        language: 'bash'
      }
    ]
  },
  {
    type: 'toggle',
    rich_text: [
      {
        text: 'Reactの学習リソース',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: [
      {
        type: 'paragraph',
        rich_text: [
          {
            text: 'Reactを学習するためのリソースはインターネット上に数多く存在します。公式ドキュメンテーションは詳細で初心者向けの情報が豊富です。また、様々なチュートリアルやブログ、ビデオ教材も利用可能です。',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      },
      {
        type: 'callout',
        rich_text: [
          {
            text: 'sadffffffffffffffffffffffff',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: [],
        color: 'blue_background'
      }
    ]
  },
  {
    type: 'toggle',
    rich_text: [
      {
        text: 'Reactのコミュニティ',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: [
      {
        type: 'paragraph',
        rich_text: [
          {
            text: 'Reactは活発なコミュニティを持っています。問題を解決するための助けを求めたり、新しいアイデアを共有したりすることが可能です。また、開発者としてスキルを磨くための機会もたくさんあります。',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        caption: [],
        children: []
      }
    ]
  },
  { type: 'paragraph', rich_text: [], caption: [], children: [] },
  {
    type: 'to_do',
    rich_text: [
      {
        text: 'Reactの公式ドキュメンテーションを読む',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'to_do',
    rich_text: [
      {
        text: 'JSXの構文を学ぶ',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'to_do',
    rich_text: [
      {
        text: 'コンポーネントベースのアーキテクチャについて理解する',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'to_do',
    rich_text: [
      {
        text: '仮想DOMとその働きについて学ぶ',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'to_do',
    rich_text: [
      {
        text: 'Reactの環境設定を行う',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'to_do',
    rich_text: [
      {
        text: 'シンプルなReactアプリケーションを作成する',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'to_do',
    rich_text: [
      {
        text: 'propsとstateの使い方を学ぶ',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'to_do',
    rich_text: [
      {
        text: 'イベントハンドリングについて学ぶ',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'paragraph',
    rich_text: [
      {
        text: '\n',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  {
    type: 'callout',
    rich_text: [
      {
        text: 'Reactを学び始める際は、まず公式ドキュメンテーションを読むことを強くお勧めします。それは、Reactの基本的な概念を理解するための最良のリソースです。',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: [],
    color: 'blue_background'
  },
  {
    type: 'heading_3',
    rich_text: [
      {
        text: '他のフレームワークとの比較',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
        link: null
      }
    ],
    caption: [],
    children: []
  },
  { type: 'paragraph', rich_text: [], caption: [], children: [] },
  {
    type: 'table',
    rich_text: [],
    caption: [],
    children: [],
    table: [
      [
        [
          {
            text: 'フレームワーク',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: '仮想DOM',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: 'コンポーネントベース',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: 'パフォーマンス',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: 'コミュニティの大きさ',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ]
      ],
      [
        [
          {
            text: 'React',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: 'はい',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: 'はい',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: '中',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: '大',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ]
      ],
      [
        [
          {
            text: 'Vue',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: 'はい',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: 'はい',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: '高',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: '中',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ]
      ],
      [
        [
          {
            text: 'Svelte',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: 'いいえ',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: 'はい',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: '高',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: '小',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ]
      ],
      [
        [
          {
            text: 'Angular',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: 'いいえ',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: 'はい',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: '中',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ],
        [
          {
            text: '大',
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
            link: null
          }
        ]
      ]
    ]
  },
  { type: 'paragraph', rich_text: [], caption: [], children: [] },
  {
    type: 'bookmark',
    url: 'https://github.com/46ki75',
    rich_text: [],
    caption: [],
    children: [],
    bookmark: {
      title: '46ki75 - Overview',
      description:
        '46ki75 has 13 repositories available. Follow their code on GitHub.',
      image: 'https://avatars.githubusercontent.com/u/85323087?v=4?s=400'
    }
  },
  { type: 'paragraph', rich_text: [], caption: [], children: [] }
]
