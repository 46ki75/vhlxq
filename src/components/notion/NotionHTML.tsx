/** @jsxImportSource @emotion/react */
'use client'

import React, { useState } from 'react'
import { css } from '@emotion/react'
import { type DOMJSON } from 'notion-markup-utils/dist/block/DOMJSON'
import { BookmarkCard } from '../typography/BookmarkCard'
import { type RichTextDOMJSON } from 'notion-markup-utils'
import { colors } from '../../colors'
import { Callout } from '../typography/Callout'
import { CodeBlock } from '../code/CodeBlock'
import { Linktext } from '../typography/Linktext'
import { Divider } from '../typography/Divider'
import { Heading2 } from '../typography/Heading2'
import { Heading3 } from '../typography/Heading3'
import { ImageWithModal } from '../typography/ImageWithModal'
import { Checkbox } from '../form/Checkbox'
import { Toggle } from '../typography/Toggle'

const convertRichTextDOMJSON = (
  richTextDOMJSON: RichTextDOMJSON[]
): React.ReactNode => {
  const results: React.ReactNode[] = []

  for (const dom of richTextDOMJSON) {
    if (dom.link != null) {
      return <Linktext text={dom.text} href={dom.link} />
    }

    let result = <>{dom.text}</>
    if (dom.code) result = <code>{result}</code>
    if (dom.bold) result = <strong>{result}</strong>
    if (dom.italic) result = <em>{result}</em>
    if (dom.italic) result = <em>{result}</em>
    if (dom.underline) result = <ins>{result}</ins>
    if (dom.strikethrough) result = <del>{result}</del>
    if (dom.color != null) {
      switch (dom.color) {
        case 'blue':
          result = <span style={{ color: colors.blue[800] }}>{result}</span>
          break
        case 'brown':
          result = <span style={{ color: colors.amber[800] }}>{result}</span>
          break
        case 'gray':
          result = <span style={{ color: colors.stone[500] }}>{result}</span>
          break
        case 'green':
          result = <span style={{ color: colors.green[800] }}>{result}</span>
          break
        case 'orange':
          result = <span style={{ color: colors.orange[800] }}>{result}</span>
          break
        case 'pink':
          result = <span style={{ color: colors.pink[800] }}>{result}</span>
          break
        case 'purple':
          result = <span style={{ color: colors.purple[800] }}>{result}</span>
          break
        case 'red':
          result = <span style={{ color: colors.red[800] }}>{result}</span>
          break
        case 'yellow':
          result = <span style={{ color: colors.yellow[800] }}>{result}</span>
          break
      }
    } else {
      result = <span>result</span>
    }

    results.push(result)
  }

  return results
}

const convertJSONtoDOM = (domjson: DOMJSON[]): React.ReactNode => {
  const reactNodes: React.ReactNode[] = []

  for (const dom of domjson) {
    switch (dom.type) {
      case 'bookmark': {
        if (dom.bookmark != null) {
          const node = (
            <BookmarkCard
              title={dom.bookmark.title}
              description={dom.bookmark.description}
              image={dom.bookmark.image}
              url={dom.url ?? ''}
            />
          )
          reactNodes.push(node)
          break
        } else {
          break
        }
      }

      case 'breadcrumb': {
        break
      }

      case 'bulleted_list_item': {
        break
      }

      case 'ul': {
        const node = (
          <ul
            css={css`
              padding-left: 1.5rem;
              li {
                margin: 0.5rem 0;
                list-style-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20512%22%20height%3D%2216%22%20width%3D%2216%22%3E%3Cpath%20d%3D%22M296%20160H180.6l42.6-129.8C227.2%2015%20215.7%200%20200%200H56C44%200%2033.8%208.9%2032.2%2020.8l-32%20240C-1.7%20275.2%209.5%20288%2024%20288h118.7L96.6%20482.5c-3.6%2015.2%208%2029.5%2023.3%2029.5%208.4%200%2016.4-4.4%2020.8-12l176-304c9.3-15.9-2.2-36-20.7-36z%22%20fill%3D%22steelblue%22%20opacity%3D%220.8%22%2F%3E%3C%2Fsvg%3E');
                &::before {
                  padding-right: 0.25rem;
                  content: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%20height%3D%2214%22%20width%3D%2216%22%3E%3Cpath%20d%3D%22M224.3%20273l-136%20136c-9.4%209.4-24.6%209.4-33.9%200l-22.6-22.6c-9.4-9.4-9.4-24.6%200-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6%200-33.9L54.3%20103c9.4-9.4%2024.6-9.4%2033.9%200l136%20136c9.5%209.4%209.5%2024.6%20.1%2034zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9%200l-22.6%2022.6c-9.4%209.4-9.4%2024.6%200%2033.9l96.4%2096.4-96.4%2096.4c-9.4%209.4-9.4%2024.6%200%2033.9l22.6%2022.6c9.4%209.4%2024.6%209.4%2033.9%200l136-136c9.4-9.2%209.4-24.4%200-33.8z%22%20fill%3D%22darkblue%22%20opacity%3D%220.5%22%2F%3E%3C%2Fsvg%3E');
                }
              }
            `}
          >
            {dom.children.map((li, index) => {
              console.log(li)
              return (
                <li key={index}>
                  {convertRichTextDOMJSON(li.rich_text)}
                  {convertJSONtoDOM(li.children)}
                </li>
              )
            })}
          </ul>
        )
        reactNodes.push(node)
        break
      }

      case 'callout': {
        let color: keyof typeof colors = 'stone'
        switch (dom.color) {
          case 'blue':
          case 'blue_background':
            color = 'blue'
            break

          case 'brown':
          case 'brown_background':
            color = 'amber'
            break

          case 'default':
          case 'gray':
          case 'gray_background':
            color = 'stone'
            break

          case 'green':
          case 'green_background':
            color = 'green'
            break

          case 'orange':
          case 'orange_background':
            color = 'orange'
            break

          case 'pink':
          case 'pink_background':
            color = 'pink'
            break

          case 'purple':
          case 'purple_background':
            color = 'purple'
            break

          case 'red':
          case 'red_background':
            color = 'red'
            break

          case 'yellow':
          case 'yellow_background':
            color = 'yellow'
            break
        }
        const node = (
          <Callout color={color}>
            {convertRichTextDOMJSON(dom.rich_text)}
          </Callout>
        )
        reactNodes.push(node)
        break
      }

      case 'child_database': {
        break
      }

      case 'child_page': {
        break
      }

      case 'code': {
        const node = (
          <CodeBlock
            language={dom.language ?? 'txt'}
            code={dom.rich_text.map((text) => text.text).join('')}
            caption={
              dom.caption.length === 0
                ? dom.language
                : dom.caption.map((text) => text.text).join('')
            }
          />
        )
        reactNodes.push(node)
        break
      }

      case 'column': {
        break
      }

      case 'column_list': {
        break
      }

      case 'divider': {
        reactNodes.push(
          <React.Fragment>
            <Divider />
          </React.Fragment>
        )
        break
      }

      case 'embed': {
        break
      }

      case 'equation': {
        break
      }

      case 'file': {
        break
      }

      case 'heading_1': {
        reactNodes.push(
          <Heading2 content={dom.rich_text.map((text) => text.text).join('')} />
        )
        break
      }

      case 'heading_2': {
        reactNodes.push(
          <Heading3 content={dom.rich_text.map((text) => text.text).join('')} />
        )
        break
      }

      case 'heading_3': {
        reactNodes.push(
          <h4> content={dom.rich_text.map((text) => text.text).join('')}</h4>
        )
        break
      }

      case 'image': {
        reactNodes.push(<ImageWithModal src={String(dom.url)} />)
        break
      }

      case 'link_preview': {
        break
      }

      case 'mention': {
        break
      }

      case 'numbered_list_item': {
        break
      }

      case 'ol': {
        const node = (
          <ol
            css={css`
              padding-left: 1.5rem;
              li {
                margin: 0.5rem 0;
                list-style-type: decimal;

                &::before {
                  padding-right: 0.25rem;
                  content: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%20height%3D%2214%22%20width%3D%2216%22%3E%3Cpath%20d%3D%22M224.3%20273l-136%20136c-9.4%209.4-24.6%209.4-33.9%200l-22.6-22.6c-9.4-9.4-9.4-24.6%200-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6%200-33.9L54.3%20103c9.4-9.4%2024.6-9.4%2033.9%200l136%20136c9.5%209.4%209.5%2024.6%20.1%2034zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9%200l-22.6%2022.6c-9.4%209.4-9.4%2024.6%200%2033.9l96.4%2096.4-96.4%2096.4c-9.4%209.4-9.4%2024.6%200%2033.9l22.6%2022.6c9.4%209.4%2024.6%209.4%2033.9%200l136-136c9.4-9.2%209.4-24.4%200-33.8z%22%20fill%3D%22darkblue%22%20opacity%3D%220.5%22%2F%3E%3C%2Fsvg%3E');
                }
                &::marker {
                  color: darkblue;
                  opacity: 0.8;
                  font-weight: bold;
                }
              }
            `}
          >
            {dom.children.map((li, index) => {
              console.log(li)
              return (
                <li key={index}>
                  {convertRichTextDOMJSON(li.rich_text)}
                  {convertJSONtoDOM(li.children)}
                </li>
              )
            })}
          </ol>
        )
        reactNodes.push(node)
        break
      }

      case 'paragraph': {
        reactNodes.push(<p>{convertRichTextDOMJSON(dom.rich_text)}</p>)
        break
      }

      case 'pdf': {
        break
      }

      case 'quote': {
        reactNodes.push(
          <blockquote
            css={css`
              width: 100%;
              margin: 0;
              padding: 1rem;
              border-left: solid 3px rgba(0, 0, 0, 0.3);
            `}
          >
            {convertRichTextDOMJSON(dom.rich_text)}
            {convertJSONtoDOM(dom.children)}
          </blockquote>
        )
        break
      }

      case 'synced_block': {
        reactNodes.push(<>{convertJSONtoDOM(dom.children)}</>)
        break
      }

      case 'table': {
        if (dom.table == null) break
        const rows = dom.table.map((row) =>
          row.map((cell) => convertRichTextDOMJSON(cell))
        )
        const table = (
          <table
            css={css`
              width: fit-content;
              max-width: 100%;
              display: block;
              overflow-x: auto;
              scrollbar-width: thin;
              border-collapse: collapse;
              margin: 25px 0;
              font-size: 0.9em;
              font-family: sans-serif;
              box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);

              * {
                transition: all 0.2s;
              }

              &::-webkit-scrollbar {
                height: 6px;
                width: 6px;
              }

              &::-webkit-scrollbar-thumb {
                background-color: rgb(138, 148, 191, 0.8);
                border-radius: 3px;
                opacity: 0.6;
              }

              &::-webkit-scrollbar-track {
                background-color: #f3f3f3;
              }

              thead tr {
                background-color: rgba(0, 0, 0, 0.75);
                color: #ffffff;
                text-align: left;
              }

              th,
              td {
                padding: 12px 15px;
                white-space: nowrap;
              }

              thead tr th {
                border-right: 1px dashed #aaada9;
              }

              thead tr th:last-child {
                border-right: none;
              }

              tbody tr td {
                border-right: 1px dashed #dddddd;
              }

              tbody tr td:last-child {
                border-right: none;
              }

              tbody tr {
                border-bottom: 1px solid #dddddd;
              }

              tbody tr:nth-of-type(even) {
                background-color: #f3f3f3;
              }

              tbody tr.active-row {
                font-weight: bold;
                color: #005998;
              }

              tbody tr:hover {
                background-color: #e7eef6;
              }
            `}
          >
            <thead>
              <tr>
                {rows
                  .shift()
                  ?.map((node, index) => <th key={index}>{node}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, index) => (
                    <td key={index}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )

        reactNodes.push(table)
        break
      }

      case 'table_row': {
        break
      }

      case 'table_of_contents': {
        break
      }

      case 'to_do': {
        const [isChecked, setIsChecked] = useState<boolean>(false)
        reactNodes.push(
          <Checkbox
            label={dom.rich_text.map((text) => text.text).join('')}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        )
        break
      }

      case 'toggle': {
        reactNodes.push(
          <Toggle summary={dom.rich_text.map((text) => text.text).join('')}>
            {convertJSONtoDOM(dom.children)}
          </Toggle>
        )
        break
      }

      case 'video': {
        break
      }

      case 'root': {
        break
      }
    }
  }

  return <>{reactNodes.map((node) => node)}</>
}

export const NotionHTML = ({
  domjson
}: {
  domjson: DOMJSON[]
}): React.JSX.Element => {
  return <div>{convertJSONtoDOM(domjson)}</div>
}
