'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    fbq: any
  }
}

export function FacebookPixelEvents() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      // Track page view on route change
      window.fbq('track', 'PageView')
      
      // Track ViewContent em todas as páginas
      window.fbq('track', 'ViewContent', {
        content_name: pathname,
        content_category: pathname === '/' ? 'home' : pathname.split('/')[1] || 'page',
        content_type: 'page',
      })
    }
  }, [pathname])

  return null
}

// Função para rastrear ViewContent
export function trackViewContent(contentName: string, contentCategory: string, contentId?: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
      content_category: contentCategory,
      content_ids: contentId ? [contentId] : undefined,
      content_type: 'product',
    })
  }
}

// Função para rastrear quando abre o paywall
export function trackInitiateCheckout(value: number, currency: string = 'BRL') {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value: value,
      currency: currency,
    })
  }
}

// Função para rastrear quando clica em começar a ler
export function trackLead(contentName: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: contentName,
    })
  }
}

// Função para rastrear pesquisa
export function trackSearch(searchString: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Search', {
      search_string: searchString,
    })
  }
}
