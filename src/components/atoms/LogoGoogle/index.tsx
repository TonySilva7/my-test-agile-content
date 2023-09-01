import { ComponentProps } from 'react';

type LogoGoogleProps = ComponentProps<'svg'>;

function LogoGoogle({ width = 200, height = 66, ...props }: LogoGoogleProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M85.5881 34.7325C85.5881 44.228 78.1782 51.2251 69.0846 51.2251C59.991 51.2251 52.5811 44.228 52.5811 34.7325C52.5811 25.1701 59.991 18.24 69.0846 18.24C78.1782 18.24 85.5881 25.1701 85.5881 34.7325ZM78.3636 34.7325C78.3636 28.7988 74.069 24.7389 69.0846 24.7389C64.1001 24.7389 59.8055 28.7988 59.8055 34.7325C59.8055 40.6068 64.1001 44.7262 69.0846 44.7262C74.069 44.7262 78.3636 40.5994 78.3636 34.7325Z"
        fill="#EA4335"
      />
      <path
        d="M121.192 34.7325C121.192 44.228 113.782 51.2251 104.688 51.2251C95.5945 51.2251 88.1846 44.228 88.1846 34.7325C88.1846 25.1776 95.5945 18.24 104.688 18.24C113.782 18.24 121.192 25.1701 121.192 34.7325ZM113.967 34.7325C113.967 28.7988 109.673 24.7389 104.688 24.7389C99.7037 24.7389 95.409 28.7988 95.409 34.7325C95.409 40.6068 99.7037 44.7262 104.688 44.7262C109.673 44.7262 113.967 40.5994 113.967 34.7325Z"
        fill="#FBBC05"
      />
      <path
        d="M155.311 19.2364V48.8457C155.311 61.0255 148.146 66 139.675 66C131.702 66 126.903 60.6537 125.093 56.2814L131.383 53.6566C132.503 56.3409 135.247 59.5086 139.668 59.5086C145.09 59.5086 148.45 56.155 148.45 49.8421V47.47H148.198C146.581 49.4703 143.465 51.2177 139.534 51.2177C131.308 51.2177 123.772 44.0347 123.772 34.792C123.772 25.4824 131.308 18.24 139.534 18.24C143.458 18.24 146.573 19.9874 148.198 21.9281H148.45V19.2438H155.311V19.2364ZM148.962 34.792C148.962 28.9847 145.097 24.7389 140.18 24.7389C135.195 24.7389 131.019 28.9847 131.019 34.792C131.019 40.5399 135.195 44.7262 140.18 44.7262C145.097 44.7262 148.962 40.5399 148.962 34.792Z"
        fill="#4285F4"
      />
      <path
        d="M166.623 1.88123V50.2138H159.576V1.88123H166.623Z"
        fill="#34A853"
      />
      <path
        d="M194.081 40.1607L199.689 43.9083C197.879 46.5926 193.518 51.2177 185.982 51.2177C176.636 51.2177 169.656 43.9752 169.656 34.7251C169.656 24.9173 176.695 18.2325 185.173 18.2325C193.711 18.2325 197.887 25.0437 199.251 28.7244L200 30.5982L178.008 39.7294C179.692 43.0383 182.31 44.7262 185.982 44.7262C189.661 44.7262 192.212 42.9119 194.081 40.1607ZM176.821 34.2269L191.523 28.1073C190.714 26.0475 188.281 24.6124 185.418 24.6124C181.746 24.6124 176.636 27.8619 176.821 34.2269Z"
        fill="#EA4335"
      />
      <path
        d="M25.9087 30.4421V23.445H49.429C49.6589 24.6645 49.7776 26.107 49.7776 27.6685C49.7776 32.9182 48.3461 39.4096 43.7325 44.0347C39.245 48.7192 33.5114 51.2176 25.9161 51.2176C11.838 51.2176 0 39.7219 0 25.6088C0 11.4957 11.838 0 25.9161 0C33.7043 0 39.2524 3.06354 43.421 7.05655L38.4959 11.9939C35.5067 9.18319 31.4568 6.99707 25.9087 6.99707C15.6283 6.99707 7.58791 15.3028 7.58791 25.6088C7.58791 35.9148 15.6283 44.2206 25.9087 44.2206C32.5768 44.2206 36.3745 41.5363 38.8074 39.0973C40.7804 37.1194 42.0784 34.2938 42.5902 30.4346L25.9087 30.4421Z"
        fill="#4285F4"
      />
    </svg>
  );
}

export { LogoGoogle, type LogoGoogleProps };
