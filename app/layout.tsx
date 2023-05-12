'use client';
import './globals.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { AnalyticsContainer } from '../components/Analytics'
import Head from './head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <ThemeProvider theme={ theme }>
        <body>
          {children}
        </body>
      </ThemeProvider>
      <AnalyticsContainer />
    </html>
  )
}
