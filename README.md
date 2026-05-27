# CryptoPulse Engineering — Core Architecture Platform

Bienvenido al repositorio central de **CryptoPulse**, una plataforma web financiera de alto rendimiento construida sobre el ecosistema moderno de **Next.js 16**, **Tailwind CSS 4** y **TypeScript**. 

Este proyecto no está estructurado como un sitio web tradicional; está diseñado bajo principios de ingeniería de software empresarial, aplicando **Screaming Architecture (Arquitectura Orientada a Dominios)** y aislamiento estricto de capas para garantizar la escalabilidad, la mantenibilidad y la inmunidad del código frente a cambios en APIs externas.

---

## 🛠️ Stack Tecnológico Core

* **Framework:** Next.js 16 (App Router) con soporte nativo para React Server Components (RSC) y Turbopack.
* **Lenguaje:** TypeScript configurado bajo modo estricto (`strict: true`) para erradicar el uso de `any` y asegurar Type-Safety de extremo a extremo.
* **Estilos:** Tailwind CSS v4 utilizando variables de sistema basadas en un diseño conceptual *Light & Clean High-End*.
* **Iconografía:** Lucide React para componentes visuales vectoriales limpios y consistentes.
* **Gestión de Estado:**
  * **Server State:** TanStack Query para el manejo inteligente de caché, revalidaciones en segundo plano y sincronización de datos de red.
  * **Client State:** Zustand para el estado global persistente inter-rutas y `useState` local para flujos eficientes de interfaz de usuario.

---

## 📐 Pilares de Arquitectura (Screaming Architecture)

El proyecto rechaza la organización tradicional por roles técnicos (carpetas globales de `hooks/`, `components/`, `utils/`) y adopta un enfoque modular basado en **Features Encapsuladas**. Al abrir el directorio `src/features/`, la estructura "grita" explícitamente cuáles son los módulos de negocio de la aplicación.

Cada módulo o funcionalidad encapsulada dentro de `src/features/[nombre-del-dominio]/` se compone de cuatro fronteras estrictas:

```text
src/features/[feature-name]/
├── domain/
│   └── models/       # Interfaces de dominio (camelCase) y contratos puros.
├── adapters/         # Frontera sagrada: Mapeo estricto de API a Dominio (Anti-Corruption).
├── hooks/            # Orquestación de lógica, servicios de red y almacenamiento local.
└── components/       # Composición de UI atómica (Átomos, Moléculas, Organismos).