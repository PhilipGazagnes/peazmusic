<template>
    <div class="container mx-auto px-4 py-8">
      <!-- Loading state -->
      <div v-if="pending" class="text-center py-8">
        <p>Chargement...</p>
      </div>
  
      <!-- Error state -->
      <div v-else-if="error" class="text-red-500">
        {{ error.message }}
      </div>
  
      <!-- Song details -->
      <div v-else-if="song" class="max-w-2xl mx-auto">
        <NuxtLink to="/chansons" class="text-blue-500 hover:underline mb-4 inline-block">
          ← Retour à la liste
        </NuxtLink>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <h1 class="text-3xl font-bold mb-4">{{ song.name }}</h1>
          <p class="text-xl text-gray-600 mb-6">{{ song.artist }}</p>
          
          <!-- Add more song details here -->
          <div class="space-y-4">
            {{ song }}
            <!-- Add more fields as needed -->
          </div>
        </div>
      </div>
  
      <!-- Not found state -->
      <div v-else class="text-center py-8">
        <p class="text-xl text-gray-600">Chanson non trouvée</p>
        <NuxtLink to="/" class="text-blue-500 hover:underline mt-4 inline-block">
          Retour à la liste
        </NuxtLink>
      </div>
    </div>
  </template>
  
<script setup>
import { useCache } from '~/composables/useCache'

const route = useRoute()
const client = useSupabaseClient()
const { getCachedData, setCachedData } = useCache()

// Fetch the specific song
const { data: song, pending, error } = await useAsyncData(
  `song-${route.params.id}`,
  async () => {
    // Try to get from cache first
    const cachedData = await getCachedData(`song-${route.params.id}`)
    if (cachedData) {
        return cachedData
    }
    // If not in cache, fetch from Supabase
    const { data, error } = await client
      .rpc('get_song_data', {
        song_id: route.params.id,
      })
    
    if (error) throw error

    // Cache the data for 1 hour
    await setCachedData(`song-${route.params.id}`, data, 3600)
    
    return data
  }
)
</script>