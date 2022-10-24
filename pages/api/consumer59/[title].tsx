import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

const pretendard = {
  medium: fetch(new URL('../../../assets/Pretendard-Medium.otf', import.meta.url)).then(res => res.arrayBuffer()),
  black: fetch(new URL('../../../assets/Pretendard-Black.otf', import.meta.url)).then(res => res.arrayBuffer()),
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
        fontFamily: 'Pretendard Medium',
        fontFeatureSettings: '"case", "tnum", "ss05", "ss06"',
      }}>
        <div tw="flex flex-col justify-between items-center gap-16 text-center">
          <p tw="font-900 text-gray-900 text-4xl" style={{ fontFamily: 'Pretendard Black' }}>
            <span tw="text-5xl mr-4">"</span>

            {title}

            <span tw="text-4xl ml-4">"</span>
          </p>

          <p tw="text-blue-800">
            #멈춰라SPC #SPC불매 #소비자59
          </p>
        </div>

        <div tw="absolute bottom-4 flex justify-between w-full px-4 py-0 text-gray-600 text-xs">
          <p tw="m-0">
            소비자59는
            <b tw="mx-1" style={{ fontFamily: 'Pretendard Black' }}>
              파리바게뜨노동자 힘내라 공동행동
            </b>
            및
            <b tw="ml-1" style={{ fontFamily: 'Pretendard Black' }}>
              화섬식품노조 파리바게뜨지회
            </b>
            와는 관련없는 사이트임을 밝힙니다.
          </p>

          <p tw="m-0">
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
      fonts: [
        { name: 'Pretendard Medium', style: 'normal', data: await pretendard.medium },
        { name: 'Pretendard Black', style: 'normal', data: await pretendard.black },
      ]
    }
  )
}
