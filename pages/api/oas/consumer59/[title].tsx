import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const url = new URL(req.url || '/', `https://${req.headers.get('host')}`)
  const pathChunks = url.pathname.split('/')
  const title = decodeURIComponent(pathChunks[pathChunks.length - 1])

  return new ImageResponse(
    (
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
        <div tw="flex flex-col justify-between items-center gap-16 text-center">
          <p tw="font-black text-gray-900 text-4xl">
            <span tw="mr-4">"</span>

            {title}

            <span tw="ml-4">"</span>
          </p>

          <p tw="font-medium text-blue-800">
            #멈춰라SPC #SPC불매 #소비자59
          </p>
        </div>

        <div tw="absolute bottom-4 flex justify-between w-full px-4 py-0 text-gray-600 text-xs">
          <p tw="m-0">
            소비자59는
            <b tw="font-bold mx-1">
              파리바게뜨노동자 힘내라 공동행동
            </b>
            및
            <b tw="font-bold ml-1">
              화섬식품노조 파리바게뜨지회
            </b>
            와는 관련없는 사이트임을 밝힙니다.
          </p>

          <p tw="font-light m-0">
            🕊️ 소비자59 | c59.dun.land
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'fluent',
      debug: false,
    }
  )
}
