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
    // Aguardar o pixel carregar
    const checkPixel = setInterval(() => {
      if (typeof window !== 'undefined' && window.fbq) {
        clearInterval(checkPixel)
        
        console.log('Facebook Pixel carregado!')
        
        // Track page view on route change
        window.fbq('track', 'PageView')
        console.log('PageView disparado para:', pathname)
        
        // Track ViewContent em todas as páginas
        window.fbq('track', 'ViewContent', {
          content_name: pathname,
          content_category: pathname === '/' ? 'home' : pathname.split('/')[1] || 'page',
          content_type: 'page',
        })
        console.log('ViewContent disparado para:', pathname)
      }
    }, 100)

    // Limpar após 5 segundos
    setTimeout(() => clearInterval(checkPixel), 5000)

    return () => clearInterval(checkPixel)
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
