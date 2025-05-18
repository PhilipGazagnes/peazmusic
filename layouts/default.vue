<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">
            PeazMusic
          </NuxtLink>
          <div class="flex space-x-4">
            <NuxtLink 
              to="/" 
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              active-class="text-blue-600 font-medium"
            >
              Accueil
            </NuxtLink>
            <NuxtLink 
              to="/chansons" 
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              active-class="text-blue-600 font-medium"
            >
              Chansons
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              active-class="text-blue-600 font-medium"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white shadow-inner mt-8">
      <div class="container mx-auto px-4 py-6">
        <p class="text-center text-gray-600">
          © {{ new Date().getFullYear() }} PeazMusic. Tous droits réservés.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout setup if needed
</script> 