<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">Mes Chansons</h1>
    
    <!-- Loading state -->
    <div v-if="pending" class="text-center py-8">
      <p>Chargement...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-red-500">
      {{ error.message }}
    </div>

    <!-- Songs list -->
    <div v-else class="grid gap-4">
      <div 
        v-for="song in data" 
        :key="song.id" 
        class="p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
        @click="navigateTo(`/chanson/${song.id}`)"
      >
        <p class="text-lg font-semibold">{{ song.name }}</p>
        <p class="text-gray-600">{{ song.artist }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const { data, pending, error } = await useAsyncData('songs', async () => {
  const { data } = await client.rpc('get_songs')
  return data
})

definePageMeta({
  title: 'Chansons'
})
</script> 