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
          <p tw="font-black text-gray-900 text-5xl">
            <span tw="mr-4">"</span>

            {title}

            <span tw="ml-4">"</span>
          </p>

          <p tw="font-medium text-3xl text-blue-800">
            #멈춰라SPC #SPC불매 #소비자59
          </p>
        </div>

        <p tw="absolute bottom-4 right-4 font-light m-0">
          🕊️ 소비자59 | c59.dun.land
        </p>
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
