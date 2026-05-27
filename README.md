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

1. El límite de Next.js 16 (Por qué no es suficiente por sí solo)
Next.js 16 es una bestia manejando el estado en el servidor (Server Components) y haciendo mutaciones seguras (Server Actions). Si estuvieras haciendo un blog o un e-commerce tradicional, Next.js puro alcanza y sobra.

Pero estamos haciendo un Dashboard Crypto. Los precios titilan, cambian cada 5 segundos, el usuario cambia de pestaña y vuelve.
Si intentás hacer polling (consultas periódicas en tiempo real) usando Next.js puro, tendrías que usar router.refresh() o llamar a Server Actions en un loop. Esto obliga al servidor a re-renderizar todo el árbol de componentes y mandarle el HTML/RSC payload al cliente una y otra vez. Eso destroza la performance del servidor y la experiencia del usuario.

2. El mito de la "Dependencia Externa"
En entornos corporativos de alta exigencia, no se ve mal usar dependencias externas siempre y cuando sean estándares de la industria. TanStack Query (React Query) es el estándar absoluto para el manejo de caché asíncrona en el cliente.

Reinventar la rueda intentando manejar estados de carga (isLoading), errores de red (isError), reintentos automáticos si se cae el Wi-Fi, y sincronización en tiempo real armando un useEffect gigante a mano... eso sí es una red flag en una entrevista. El entrevistador va a pensar: "Este pibe armó un código espagueti inmanejable para ahorrarse una librería de 13kb".

3. La respuesta Senior para la Entrevista (El Patrón de Aislamiento)
Si en una entrevista técnica te preguntan: "¿Por qué agregaste TanStack Query si Next.js ya tiene fetch con caché?", tu respuesta de Tech Lead tiene que ser esta:

"Utilizo Next.js nativo para el SSR, el SEO y la carga inicial de los datos (Server Components). Pero para la hidratación en tiempo real y el polling en el navegador, delego la responsabilidad a TanStack Query. Además, gracias a nuestra Arquitectura Orientada a Dominios, TanStack Query está estrictamente encapsulado dentro de nuestros Custom Hooks (ej: useCryptoPrices). Nuestros componentes de UI no saben que TanStack existe. Si mañana Next.js lanza una solución nativa superior para el cliente, solo modificamos el interior de ese Hook y el resto de la aplicación ni se entera."