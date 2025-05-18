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
        <NuxtLink to="/" class="text-blue-500 hover:underline mb-4 inline-block">
          ← Retour à la liste
        </NuxtLink>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          {{ song }}
            <h1 class="text-3xl font-bold mb-4">{{ song.title }}</h1>
          <p class="text-xl text-gray-600 mb-6">{{ song.artist }}</p>
          
          <!-- Add more song details here -->
          <div class="space-y-4">
            <div v-if="song.album" class="flex items-center">
              <span class="font-semibold w-24">Album:</span>
              <span>{{ song.album }}</span>
            </div>
            <div v-if="song.year" class="flex items-center">
              <span class="font-semibold w-24">Année:</span>
              <span>{{ song.year }}</span>
            </div>
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
  const route = useRoute()
  const client = useSupabaseClient()
  
  // Fetch the specific song
  const { data: song, pending, error } = await useAsyncData(
    `song-${route.params.id}`,
    async () => {
      const { data, error } = await client
        .rpc('get_song_data', {
            song_id: route.params.id
        })
      
      if (error) throw error
      return data
    }
  )
  </script>